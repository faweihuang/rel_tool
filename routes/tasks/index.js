/*
 * 执行任务
 */
const Router = require('koa-router');
const R      = new Router();
const Plus   = require(SYS_CONF.path + '/lib/plus');
const Search = require('./search');
const Add = require('./add');
const Update = require('./update');
const Del = require('./update');

//搜寻返回
async function search_result(ctx){
      let d = await Plus.query(ctx);
      return await Search(d);
}

const Obj = {
    "/": async (ctx, next) => {
           ctx.body = search_result(ctx);
    },
    "/search": async (ctx, next) => {
           ctx.body = search_result(ctx);
    },
    "/add": async (ctx, next) => {
           let d = await Plus.query(ctx);
           d.uid = ctx.session.userinfo.id;
           d.req = ctx.request;
           ctx.body = await Add(d);
    },
    "/update": async (ctx, next) => {
           ctx.body = await Update(d);
    },
    "/del":  async (ctx, next) => {
           let d = await Plus.query(ctx);
           ctx.body = await Del(d);
    }
};

//输出接口路由, 同时支持 GET,POST
Plus.R(R, Obj);
module.exports = R;
