const MyDB                  = require(SYS_CONF.path + '/lib/mysql');
const SQL                     = require(SYS_CONF.path + '/lib/sql');
const DB_tasks           = require(SYS_CONF.path + '/model/db_tasks');
const DB_running     = require(SYS_CONF.path + '/model/db_running');
const DB_dbconfig   = require(SYS_CONF.path + '/model/db_dbconfig');
const Func                    = require('../lib/func');
const Glob                    = require('./global');

//执行sql任务
async function sql_task(ws, d){
       let ret = Glob.ws_ret("sql_task");
       let id = SQL.isNumber(d.id);
       let project_id = SQL.isNumber(d.project_id);
       let milieu_id = SQL.isNumber(d.milieu_id);

       if(!id){
             ret.msg = "未提交id !";
       } else if(!project_id){
             ret.msg = "未选择项目 !";
       } else if(!milieu_id){
             ret.msg = "未选择环境 !";
       } else{

             let dbconfig = (await DB_dbconfig.search('where project_id=' + project_id + ' and milieu_id=' + milieu_id)).data;
             dbconfig = dbconfig ? (dbconfig.length ? dbconfig[0] : null) : null;

             if(!dbconfig){ ret.msg = "未找到该项目环境的数据库配置!"; } else {


                   let raw = (await DB_tasks.search(' where id=' + id, ['`uid`','`val`','`title`'])).data;
                   raw = raw ? (raw.length ? raw[0] : null) : null;

                   let opt = {
                        "opt":{"host":dbconfig.host, "port":dbconfig.port, "user":dbconfig.user, "password":dbconfig.passwd, "database":dbconfig.dbname},
                        "sql":raw.val
                   };

                   let res = await DB_running.add({
                         "task_id": id,
                         "kind":1,
                         "milieu":SYS_CONF.cache.milieu[milieu_id] ? SYS_CONF.cache.milieu[milieu_id].milieu_name : "",
                         "project":SYS_CONF.cache.project[project_id] ? SYS_CONF.cache.project[project_id].project_name : "",
                         "task_key":Func.randmixed(16),
                         "task_data":JSON.stringify(d) +", " +JSON.stringify(opt),
                         "ip":ws.client.ip,
                         "create_date":Func.time(),
                         "status":0
                   });

                   if(!res.insertId){ ret.msg = '添加执行记录失败!';  } else {
                            let req = await MyDB.exec(opt);

                            let up_data = {"id":res.insertId, "runtime":Func.time(), "result":"", "status":1};

                            if(req.error){
                                 ret.msg = req.error;
                                 up_data.result = req.error;
                            } else {
                                 ret.status  = 1;
                                 ret.result = req.result;
                                 up_data.result = JSON.stringify(req.result);
                           }

                           await DB_running.update(up_data);
                   }

             }
       }

       ws.send(JSON.stringify(ret));

       ws.close();
}


module.exports = sql_task;
