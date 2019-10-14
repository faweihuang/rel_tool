/*
 * url: /user
 *
 */
//const Fs     = require('fs');
const Router = require('koa-router');
const R      = new Router();
const Plus   = require(SYS_CONF.path + '/lib/plus');
const Search = require('./search');
const Check = require('./check');

let Obj = {
    "/":           Search,
    "/search":     Search,
    "/add":        require('./add'),
    "/update":     require('./update'),
    "/del":        require('./del'),
    "/login":      require('./login'),
    "/check":      module.exports = async (ctx, next) => {
           ctx.body = await Check.ret(ctx);
     },
    "/change_pwd": require('./change_pwd'),
    "/set_pwd":    require('./set_pwd'),
    "/logout":     require('./logout')
};

//输出接口路由, 同时支持 GET,POST
Plus.R(R, Obj);
module.exports = R;
