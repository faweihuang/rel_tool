/*
 * 执行SQL任务
 */
const Router = require('koa-router');
const R      = new Router();
const Logs   = require(SYS_CONF.path + '/model/db_logs');
const Plus   = require(SYS_CONF.path + '/lib/plus');
const Search = require('../tasks/search');
const Add = require('../tasks/add');
const Update = require('../tasks/update');
const Del = require('../tasks/del');
const Run_Search = require('../run/search');

//搜寻返回
async function search_result(ctx){
      let d = await Plus.query(ctx);
      d.kind = 1;
      if(ctx.session.userinfo.role_id > 0) d.uid = ctx.session.userinfo.id;
      return await Search(d);
}

const Obj = {
    "/": async (ctx, next) => { ctx.body = await search_result(ctx); },
    "/search": async (ctx, next) => { ctx.body = await search_result(ctx); },
    "/history": async (ctx, next) => {
           let d = await Plus.query(ctx);
           d.kind = 1;
           ctx.body = await Run_Search(d);
    },
    "/add": async (ctx, next) => {
           let d = await Plus.query(ctx);
           d.uid = ctx.session.userinfo.id;
           d.req = ctx.request;
           d.kind = 1;
           let ret = await Add(d);

            Logs.save({action:"新增任务", val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ret)}, ctx);

           ctx.body = ret;
    },
    "/update": async (ctx, next) => {
           let d = await Plus.query(ctx);
           let w = 'and kind=1';
           if(ctx.session.userinfo.role_id > 0) w += ' and uid=' + ctx.session.userinfo.id;
           let ret = await Update(d, w);

           Logs.save({action:"修改任务",val:JSON.stringify(d) + '==> [ 条件: ' + w + '] ==> ' + JSON.stringify(ret)}, ctx);

           ctx.body = ret;
    },
    "/del":  async (ctx, next) => {
           let d = await Plus.query(ctx);
           let w = 'and kind=1';
           if(ctx.session.userinfo.role_id > 0) w += ' and uid=' + ctx.session.userinfo.id;
           let ret = await Del(d, w);

           Logs.save({action:"删除任务",val:JSON.stringify(d) + '==> [ 条件: ' + w + '] ==> ' + JSON.stringify(ret)}, ctx);

           ctx.body = ret;
    }
};

//输出接口路由, 同时支持 GET,POST
Plus.R(R, Obj);
module.exports = R;
