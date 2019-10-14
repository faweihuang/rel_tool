/*
 * url: /verif
 * 验证码
 */
const Router      = require('koa-router');
const KoaBody     = require('koa-body');
const R           = new Router();
const Plus        = require(SYS_CONF.path + '/lib/plus');
const svgCaptcha  = require('svg-captcha');

//生成随机字符
function randtxt(n){
    let str = 'LHK6C1YD8X37WGJ5M0V2EQ4BPN9RAIZUFTS ';
    let w = 0;
    let res = '';
    for(let i=0;i<n;i++){
       w = Math.round(Math.random()*35);
       res += str[w];
    }
    return res;
}

const Obj = {
    "/": async (ctx, next) => {
              let captcha = svgCaptcha.create({
                  size: 3,// 验证码长度
                  ignoreChars: randtxt(6), // 验证码字符中排除 0o1i
                  noise: 3, // 干扰线条的数量
                  height: 44
              });
              ctx.session.verif_code = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
              //console.log('verif_code: ' + ctx.session.verif_code);
              ctx.type = 'image/svg+xml';
              ctx.body = captcha.data;
    },
};

const opt = {
    multipart: true,
    formidable: {
        maxFileSize: SYS_CONF.upload.max_file_size * 1024    //设置上传文件大小最大限制，200M
    }
};

//输出接口路由, 同时支持 GET,POST
//Plus.R(R, Obj);
for(let k in Obj){
   R.get(k, KoaBody(opt), Obj[k]);
}
module.exports = R;
