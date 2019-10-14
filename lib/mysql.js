const DB = require('mysql');

exports.exec = function(d){
  return new Promise((resolve, reject) => {
              let con = DB.createConnection(d.opt);

              con.connect(function(err){
                      if (err) {
                            resolve({"error":'error connecting:' + err.stack, "result":null});
                      } else {
                            con.query(d.sql, function (error, results, fields) {
                                  if (error){
                                        resolve({"error": error.code + ", " + error.sqlMessage, "result":null});
                                  } else {
                                        resolve({"error":null, "result":results});
                                  }
                            });
                      }
              });
      });
};
