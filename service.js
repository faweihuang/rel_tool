const Fs         = require('fs');
const Http       = require('http');
const Https      = require('https');
const Koa        = require('koa');
const Session    = require('koa-session');
const BodyParser = require('koa-bodyparser'); //处理post数据
const Compress   = require('koa-compress');
const Security   = require('./security');

const App = new Koa();

const mainRouter = require('./routes');
const Docs       = require("./routes/index");

//错误输出
App.on('error', err => {
   if(!['read ECONNRESET', 'write ECONNABORTED', 'write ECANCELED', 'write ECONNRESET'].includes(err.message)) {
      console.log(err);
   }
});

App.keys = ['a4c9316905db9e4b5cd471f6bdacf539db3e2163bd45f9185fec977140c0e4b9'];
const CONFIG = {
  key: 'HW-SESS', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000, //一天
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
App.use(Session(CONFIG, App));

//绑定路由
App.use(BodyParser())             //处理post请求
   .use(Security.helmet())      // 请求头安全设置
   .use(Compress({threshold: 2048})) //压缩
   .use(Docs.header)            // 头部设置
   .use(Docs.grants)            // 检查授权
   .use(mainRouter.routes())    // 接口判断
   .use(Docs.doc);              // 读文件

//开启服务
function web_start(){

/*
   if(SYS_CONF.enable_http){
        Http.createServer(App.callback()).listen({"host":SYS_CONF.http.host, "port":SYS_CONF.http.port}, function(){
            console.log("   HTTP   Listening on: " + SYS_CONF.http.host + ':' + SYS_CONF.http.port);
        });
   }
   */

    if(SYS_CONF.is_https){

              let opt = null;
              //ssl 证书设置
              if(Fs.existsSync(SYS_CONF.http.ssl_path.key) && Fs.existsSync(SYS_CONF.http.ssl_path.cert)){
                 opt = {
                    key: Fs.readFileSync(SYS_CONF.http.ssl_path.key),
                    cert: Fs.readFileSync(SYS_CONF.http.ssl_path.cert)
                 };
              }
              const https_server = opt ? Https.createServer(opt, App.callback()) : Https.createServer(App.callback());
              //Https.createServer(opt, App.callback())
              https_server.listen({"host":SYS_CONF.http.host, "port":SYS_CONF.http.https_port}, function(){
                  console.log("   HTTPS  Listening on: " + SYS_CONF.http.host + ':' + SYS_CONF.http.https_port);
              });

    } else {

              Http.createServer(App.callback()).listen({"host":SYS_CONF.http.host, "port":SYS_CONF.http.port}, function(){
                  console.log("   HTTP   Listening on: " + SYS_CONF.http.host + ':' + SYS_CONF.http.port);
              });

    }
}


exports.start = web_start;
