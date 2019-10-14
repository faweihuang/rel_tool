/*
 * url: /role/api_list
 *
 */
const DB   = require(SYS_CONF.path + '/model/db_role');
const Plus = require(SYS_CONF.path + '/lib/plus');

module.exports = async (ctx) => {
    let ret = Plus.ret();
    ret.data = await DB.api_list();
    if(ret.data){
      ret.status = 1;
    } else {
      ret.data = [];
    }
    ctx.body = ret;
 };
