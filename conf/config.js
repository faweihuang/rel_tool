module.exports = {
   version       : '2.0.0',   //版本号
   path          : process.cwd(),
   logs_path     : process.cwd() + '/logs/',
   Api_Fix       : '/api.',   //api前缀
   debug         : 1,
   ws:{
       "opt":{"host":"0.0.0.0", "port":2030},
       "ssl":{"key":process.cwd() + '/conf/ssl-key.pem', "crt":process.cwd() + '/conf/ssl-crt.pem', "pass":""}
   },
   http : {
     "host"        : "0.0.0.0",
     "port"        : 8080,
     "https_port"  : 8443,
     "home"        : process.cwd() + "/web/dest",
     "index"       :  "index.html",
     "ssl_path"    : {
       "key"  : process.cwd() + "/conf/ssl-key.pem",
       "cert" : process.cwd() + "/conf/ssl-crt.pem"
     },
     "server_name" : ["localhost"],
     "NOT_FOUND"   : "Not Found!",
     "allow_origin": false,   //是否允许跨域
     opt : function(){ return {host:this.host, port:this.port}; }
   },
   "upload" : {
      "path": process.cwd() + "/upload",          //上传目录
      "max_file_size": (200 * 1024)               //允许上传最大文件(单位 KByte, 默认 200M)
   },
   is_https:false, //是否https (默认否)
   cache:{},
   rsync:{
        "bin":"/usr/bin/rsync"  //rsync路径
        //"bin":"/data/sh/git-pull.sh"
   },
   online:{},
   code_path:"/home/hfw", //代码目录
   db : {
          host: '127.0.0.1',
          port: 3306,
          user: 'mdbuser',
          password: 'a123258',
          database: 'test'
   },
   redis: {
      host: '127.0.0.1',
      port: 6379,
      auth: 'QiaoQiao2017',
      expire: 3600                   /*token 超时时间*/
   }
};
