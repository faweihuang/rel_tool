const Fs                         = require("fs");
const SQL                     = require(SYS_CONF.path + '/lib/sql');
const DB_project      = require(SYS_CONF.path + '/model/db_project');
const DB_milieu        = require(SYS_CONF.path + '/model/db_milieu');
const DB_nodes         = require(SYS_CONF.path + '/model/db_nodes');
const Logs                    = require(SYS_CONF.path + '/model/db_logs');
const Func                    = require('../lib/func');
const Glob                    = require('./global');

//执行发布脚本
function rel_exec(ws, opt, callback, bin){
      let ret = Glob.ws_ret("release");
      let wait_time = 0;
      let result = "";

      const { spawn } = require('child_process');
      const rsync = spawn(bin ? bin : SYS_CONF.rsync.bin, opt);

      rsync.stdout.on('data', (data) => {
           wait_time += 5;
           setTimeout(function(){
                 ret.status = 1;
                 ret.result = `${data}`;
                 result += ret.result;
                 ws.send(JSON.stringify(ret));

           }, wait_time);
      });

      rsync.stderr.on('data', (data) => {
          setTimeout(function(){
              ret.status = 0;
              ret.msg = `${data}`;
              result += ret.msg;
              ws.send(JSON.stringify(ret));
          }, wait_time);
      });

      rsync.on('close', (code) => {
           setTimeout(function(){
                 ret.status = 1;
                 //ret.result = `\n运行结束，退出码 ${code}`;
                 ret.result = `\n`;
                 if(callback) callback(result, ret);
                 //Glob.ws_ret_close(ws, ret);
                 wait_time = 0;
            }, wait_time);
      });
}

//同步执行
async function rel_exec_sync(ws, opt, bin){
       return new Promise((resolve, reject) => {
               rel_exec(ws, opt, function(result, ret){
                      resolve({"ret":ret, "result":result});
               }, bin);
       });
}

//同步参数设置
 function rsync_set(ws, row, p){
        const pwd_file = '/tmp/rsync_'+ws.info.id+'.passwd';
        const exc_file = '/tmp/exclude_'+ws.info.id+'.txt';

        if(!Fs.existsSync(pwd_file)){
              Fs.writeFileSync(pwd_file, row.rsync_passwd);
        }else{
             //设置权限
             Fs.chmodSync(pwd_file, 0o600);
             Fs.writeFileSync(pwd_file, row.rsync_passwd);
        }
        //设置权限
        Fs.chmodSync(pwd_file, 0o400);


        if(!Fs.existsSync(exc_file)){
             Fs.writeFileSync(exc_file, p.exclude);
        }else{
            //设置权限
            Fs.chmodSync(exc_file, 0o600);
            Fs.writeFileSync(exc_file, p.exclude);
        }
        //设置权限
        Fs.chmodSync(exc_file, 0o400);

        return {"pwd": pwd_file, "exc": exc_file, "user":row.rsync_user, "name":row.rsync_name, "ips":row.nodes, "project_name":p.project_name, "shell_path":row.shell_path, "is_sync":row.is_sync};
}

//发布检查
async function release(ws, d){
       let ret = Glob.ws_ret("release");

       let project_id = SQL.isNumber(d.project_id);
       let milieu_id = SQL.isNumber(d.milieu_id);

       if(!project_id){
           ret.msg = "未选择项目 !";
           Glob.ws_ret_close(ws, ret);
           return;
       }

       if(!milieu_id){
             ret.msg = "未选择环境 !";
             Glob.ws_ret_close(ws, ret);
             return;
       }

       if (!Fs.existsSync(SYS_CONF.rsync.bin)) {
                ret.msg = '同步工具 rsync 未安装!';
                Glob.ws_ret_close(ws, ret);
                return;
       }

      //读取项目名
      let project = (await DB_project.search('where is_delete=0 and status=1 and id='+project_id,'`project_name`,`exclude`')).data[0];
      if(!project){
                   ret.msg = "未找到项目！";
                   Glob.ws_ret_close(ws, ret);
                   return;
      }

      //读取环境名
      let milieu = (await DB_milieu.search('where is_delete=0 and status=1 and id='+milieu_id,'`milieu_name`,`val`')).data[0];
      if(!milieu){
                   ret.msg = "未找到环境配置！";
                   Glob.ws_ret_close(ws, ret);
                   return;
      }

      //读取节点信息
      let n_list = [];
      let row = (await DB_nodes.search('where is_delete=0 and status=1 and milieu_id='+milieu_id+' and project_id='+project_id,'`rsync_user`,`rsync_passwd`,`rsync_name`,`nodes`,`is_sync`,`shell_path`',{limit:10000})).data;
      if(row){
                  row.forEach(function(raw){
                        let arr = [];
                        raw.nodes.split('\n').forEach(function(v,i){
                                let val = v.replace(/[^0-9.]/g,'');
                                if(val) arr.push(val);
                        });

                        //if(arr.length > 0){
                               raw.nodes = arr;
                               n_list.push(raw);
                        //}
                  });

                   if(n_list.length < 1){
                       ret.msg = "未找到发布节点0";
                       Glob.ws_ret_close(ws, ret);
                       return;
                  }
      }else{
                 ret.msg = "未找到发布节点1";
                 Glob.ws_ret_close(ws, ret);
                 return;
    }

    let opt = rsync_set(ws, n_list[0], project);

    let thread_res = 0;

    let result_all = "";

    let shell_return = null;


    //发布前执行脚本
    if(Fs.existsSync(opt.shell_path)){
         shell_return = (await rel_exec_sync(ws, [opt.project_name], opt.shell_path));
         result_all = shell_return.result;
    }


   if(!opt.is_sync){
         //不执行同步

         //写日志
         Logs.save({
           action:"["+opt.project_name+"]执行发布--> " + milieu.val,
           val:result_all
         }, {
           "session":{"userinfo":{"id":ws.info.id}},
           "request":{"ip":ws.client.ip}
         });

         if(shell_return){
             ret = shell_return.ret;
         } else {
             ret.msg = "Nothing to do!";
         }

         Glob.ws_ret_close(ws, shell_return ? shell_return.ret : ret);

   } else if(opt.ips.length < 1){
        ret.msg="未找到发布节点2";
        Glob.ws_ret_close(ws, ret);
   } else {

              const options =  [
                  '-avrzu',
                  '--password-file='+opt.pwd,
                  '--exclude-from='+opt.exc,
                  SYS_CONF.code_path + '/' + opt.project_name
              ];
              //console.log(opt);
              opt.ips.forEach(function(ip){
                        let new_options = options.concat('rsync://'+opt.user+'@'+ip+'/'+opt.name+'/');

                        rel_exec(ws, new_options, function(result, res){
                              result_all += result;
                              thread_res++;

                              if(thread_res === opt.ips.length){
                                    //写日志
                                    Logs.save({
                                      action:"["+project.project_name+"]执行发布--> " + milieu.val,
                                      val:result_all
                                    }, {
                                      "session":{"userinfo":{"id":ws.info.id}},
                                      "request":{"ip":ws.client.ip}
                                    });

                                    Glob.ws_ret_close(ws, res);
                              }
                        });
              });
    }

}


module.exports = release;
