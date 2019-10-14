/*
 * url: /logout
 * 退出登陆
 */
const Logs   = require(SYS_CONF.path + '/model/db_logs');
const Plus   = require(SYS_CONF.path + '/lib/plus');

module.exports = async (ctx) => {
    let ret = Plus.ret();
    Logs.save({action:"用户["+ctx.session.userinfo.user_name+"] 退出登录"}, ctx);
    Plus.clean_session(ctx);
    ret.status = 1;
    ctx.body = ret;
 };
