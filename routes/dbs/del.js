/*
 * url: /del
 * 删除
 */
const DB   = require(SYS_CONF.path + '/model/db_dbconfig');
 const Logs   = require(SYS_CONF.path + '/model/db_logs');
const Func = require(SYS_CONF.path + '/lib/func');
const Plus = require(SYS_CONF.path + '/lib/plus');

async function del(ctx){
   let d = await Plus.query(ctx);
   let ret = await Plus.ret();
   if(!d.id){ ret.msg = "未提交id"; return ret; }

   let dats = await DB.delete(d.id);
   if(dats){
      ret.status = 1;
      ret.msg = 'success';
   }

   Logs.save({action:"删除数据库配置",val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ret)}, ctx);

   return ret;
}

module.exports = async (ctx, next) => {
    ctx.body = await del(ctx);
};
