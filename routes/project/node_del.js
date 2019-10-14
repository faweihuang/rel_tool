/*
 * url: /node_del
 * 删除
 */
const DB   = require(SYS_CONF.path + '/model/db_nodes');
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

   return ret;
}

module.exports = async (ctx, next) => {
    ctx.body = await del(ctx);
};
