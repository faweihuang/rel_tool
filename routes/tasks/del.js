/*
 * url: /del
 * 删除
 */
const DB   = require(SYS_CONF.path + '/model/db_tasks');
const Func = require(SYS_CONF.path + '/lib/func');
const Plus = require(SYS_CONF.path + '/lib/plus');

async function del(d,w){
   let ret = await Plus.ret();
   if(!d.id){ ret.msg = "未提交id"; return ret; }

   let dats = await DB.delete(d.id,w);
   if(dats){
      ret.status = 1;
      ret.msg = 'success';
   }

   return ret;
}


module.exports = del;
