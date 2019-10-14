const Logs                    = require(SYS_CONF.path + '/model/db_logs');
const Func                    = require('../lib/func');
const Glob                    = require('./global');
const Sql_task            = require('./sql_task');
const Release             = require('./release');

module.exports = function(msg, ws){
             let dat = Func.isJson(msg);

             if(dat){
                 if(!dat.cmd){ console.log("cmd error!"); return; }

                 let ret = Glob.ws_ret(dat.cmd);
                 let info = SYS_CONF.online[dat.uid.toString()];

                 if(!dat.uid){
                     ret.msg = "参数错误! 未找到uid!";
                     //Glob.rel_error_return(ws, ret);
                     //return;
                 } else if(!info){
                      ret.msg = "未获得登录授权!";
                      //Glob.rel_error_return(ws, ret);
                      //return;
                  } else if(dat.token !== info.token){
                      ret.msg = "token错误!";
                      //Glob.rel_error_return(ws, ret);
                       //return;
                  } else {
                       ret.status = 1;
                  }

                  if(!ret.status){
                       //写日志
                       Logs.save({
                          action:"ws收到错误请求!!",
                          val:ret.msg + ' ---> ' + JSON.stringify(dat)
                       });
                       Glob.rel_error_return(ws, ret);
                       return;
                  }

                  ret.status = 0;

                  ws.info = info;

                 //console.log(dat);
                 switch(dat.cmd){
                   //执行sql语句
                    case "sql_task":
                                 Sql_task(ws, dat.data);
                    break;

                    //发布代码
                    case "release":
                                 Release(ws, dat.data);
                    break;

                    default:
                         ret.msg = "未知请求 !";
                         //写日志
                         Logs.save({
                            action:"ws请求出错!!",
                            val:ret.msg + ' ---> ' + JSON.stringify(dat)
                         });
                         Glob.rel_error_return(ws, ret);
                    break;
                 }
             } else { console.log("未知websocket数据: ", dat); }

               //关闭链接
               //this.close();
};
