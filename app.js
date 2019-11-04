global.SYS_CONF  = require('./conf/config');
let Func                      = require('./lib/func');

let config = JSON.parse( Func.readf("config.json") );

/*检索配置*/
function clone_config(k){
   if(config[k]){
      Object.keys(SYS_CONF[k]).forEach(function(key){
          if(config[k][key]) SYS_CONF[k][key] = config[k][key];
      });
   }
}

if(config){
   clone_config('http');
   clone_config('db');
   clone_config('ws');
   //clone_config('redis');
   //clone_config('upload');


   //是否开启https 默认关闭
   if('undefined' !== typeof(config.is_https)) SYS_CONF.is_https = config.is_https;

   //代码目录
   if('undefined' !== typeof(config.code_path)) SYS_CONF.code_path = config.code_path;

   //日志目录
   if(config.logs_path) SYS_CONF.logs_path = config.logs_path;
}


console.log("\n    绑定域:\t"+ SYS_CONF.http.server_name + "\n\n站点根目录:\t" + SYS_CONF.http.home + "\n\n  日志目录:\t" + SYS_CONF.logs_path + "\n");

/*----------------------------------------------------- setting first -----------------------------------------*/
require('./service').start();

require('./wsocket').start();
