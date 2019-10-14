/*
 * url: /upload
 * 上传
 */
const Router  = require('koa-router');
const KoaBody = require('koa-body');
const R       = new Router();
const Plus    = require(SYS_CONF.path + '/lib/plus');
const Img     = require('./img');

const Obj = {
    "/":        Img,
    "/img":     Img,
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
   R.post(k, KoaBody(opt), Obj[k]);
}
module.exports = R;
