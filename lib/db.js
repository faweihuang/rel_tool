let Pool = require("mysql").createPool(SYS_CONF.db);
let Func = require('./func');

let query = function(sql){
   return new Promise((resolve, reject) => {
         Pool.getConnection(function(error, conn){
              if(error){
                 Func.debug("数据库链接失败 Error on db.js pool.getConnection() MySQL connect error! : " + JSON.stringify(error));
                 //if(status_call) status_call({"status":0, "error":error, "msg":"发生错误,数据库链接失败!"});
                 resolve(null);
              } else {
                 conn.query(sql, function(err, vals, fields){
                    //console.log("SQL: " + sql);
                    resolve(err ? null : vals);
                    //释放连接
                    conn.release();
                 });

              }
         });
   });
};

exports.query = query;
