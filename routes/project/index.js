/*
 * 项目管理
 */
const Router = require('koa-router');
const R      = new Router();
const Plus   = require(SYS_CONF.path + '/lib/plus');
const Search = require('./search');

const Obj = {
    "/":           Search,
    "/search":   Search,
    "/node": require('./node'),
    "/add":        require('./add'),
    "/update":     require('./update'),
    "/del":        require('./del'),
    "/node_add":require('./node_add'),
    "/node_del":require('./node_del'),
    "/node_update":require('./node_update')
};

//输出接口路由, 同时支持 GET,POST
Plus.R(R, Obj);
module.exports = R;
