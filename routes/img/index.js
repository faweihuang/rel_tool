/*
 * url: /img
 * 上传
 */
const Fs      = require('fs');
const Path    = require('path');
const Router  = require('koa-router');
const Mime    = require("mime");
const R       = new Router();
const Func    = require(SYS_CONF.path + '/lib/func');
const Plus    = require(SYS_CONF.path + '/lib/plus');


R.get('/', async (ctx) => {
     let d = await Plus.query(ctx);

     let file_path = SYS_CONF.upload + Path.resolve( d.f ? ('/' === d.f[0] ? d.f : '/' + d.f ) : '/404.jpg' );

     if(Fs.existsSync(file_path)){
        let fix = file_path.split('.');
        let content_type = Mime.getType(fix[fix.length - 1]);
        if(content_type) ctx.response.type = content_type;

        ctx.response.body = Fs.readFileSync(file_path);

     } else {

        Func.logs("images File not found: " + file_path);
        ctx.response.status = 404;
        ctx.response.type = 'text/html';
        ctx.response.body = SYS_CONF.http.NOT_FOUND;
     }
});

module.exports = R;
