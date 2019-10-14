/*
 * get file in document root
 *
 */
const Fs      = require('fs');
const Mime    = require("mime");
const Path    = require('path');
const Func    = require('../lib/func');
const Plus    = require(SYS_CONF.path + '/lib/plus');
const Grants  = require('./grants');

const Info = {
  version: "hfw_v" + SYS_CONF.version,
  script: "hfw_script_v" + SYS_CONF.version,
  allow_domain: (SYS_CONF.http.allow_origin ? ('string' === typeof(SYS_CONF.http.allow_origin) ? SYS_CONF.http.allow_origin : "*") : false),
};

//记录日志
exports.log = async (ctx, next) => {
        Func.logs(ctx.request.method + " " + ctx.request.url);
        await next();
};

//头部设置
exports.header = async (ctx, next) => {
    if(SYS_CONF.http.allow_origin){
       //允许跨域请求
       ctx.set("Access-Control-Allow-Origin", Info.allow_domain);
       ctx.set("Access-Control-Allow-Methods", "POST,OPTIONS,GET");
       ctx.set("Access-Control-Allow-Headers", "accept,x-requested-with,Content-Type");
       ctx.set("Access-Control-Allow-Credentials", "true");
    }

    //禁止缓存
    ctx.set("Cache-Control", "no-cache,must-revalidate");
    ctx.set("Pragma", "no");
    ctx.set("Expires", "0");
    //ctx.set("Access-Control-Allow-Methods","POST");
    ctx.set("Server", Info.version);
    ctx.set("X-Powered-By",Info.script);

    //访问记录
    Func.logs(ctx.request.ip + " " + ctx.request.method + " " + ctx.request.url);

    await next();
};


function not_found(ctx){
    ctx.response.status = 404;
    ctx.response.type = 'text/html';
    ctx.response.body = SYS_CONF.http.NOT_FOUND;
}


//读取静态文件
exports.doc = async (ctx, next) => {
     //console.log(ctx.request);
     let file_path = SYS_CONF.http.home + Path.resolve('/' === ctx.request.url[ctx.request.url.length - 1] ? ctx.request.url + SYS_CONF.http.index : ctx.request.url.split('?')[0]);
     if('/' === file_path.substr(-1)) file_path += SYS_CONF.http.index;

     try{
           if(Fs.existsSync(file_path)){
              //console.log("file_path: ",file_path);
              let fix = file_path.split('.');
              let content_type = Mime.getType(fix[fix.length - 1]);
              if(content_type) ctx.response.type = content_type;

              ctx.response.body = Fs.readFileSync(file_path);

           } else {
              Func.logs("File not found: " + file_path);

              not_found(ctx);
           }
     }catch(e){
        console.log(e);
        console.log("get file error: ", JSON.stringify(e));
        not_found(ctx);
     }

     await next();
};


//后台用户权限
async function admin(ctx, url){
      let ret = Plus.ret();

      if(!ctx.session.isLogin){
           //未登陆用户权限
           if(Grants.guest(url)){
              ret.status = 1;
           } else {
              ret.msg = "请先登陆!";
           }
      } else {
           //已经登陆用户权限
           if(Grants.user(ctx, url)){
              ret.status = 1;
           } else {
              ret.msg = "您无权操作!";
           }
      }
      return ret;
}


//登陆检查
exports.grants = async (ctx, next) => {
    let ret = Plus.ret();
//console.log(ctx.request.ip);
    let url = ctx.request.path.toLowerCase();

    if(url.substr(0, SYS_CONF.Api_Fix.length) !== SYS_CONF.Api_Fix){
      //访问静态文件
            ret.status=1;
    }else{
      //api访问

            let wx_route  = SYS_CONF.Api_Fix + 'wx/';

            if( wx_route === url.substr(0, wx_route.length) || wx_route.substr(0, wx_route.length - 1) === url ){
                 //前端微信验证体系
                 ret = await weixin(ctx, url);
            } else {
                 //后台验证体系
                 ret = await admin(ctx, url);
            }
    }


    if(ret.status){ await next(); }else{ ctx.body = ret; }
};
