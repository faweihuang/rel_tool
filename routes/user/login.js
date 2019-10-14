/*
 * url: /login
 *
 */
const DB       = require(SYS_CONF.path + '/model/db_user');
const Logs   = require(SYS_CONF.path + '/model/db_logs');
//const ROLE_DB  = require(SYS_CONF.path + '/model/db_role');
const Func     = require(SYS_CONF.path + '/lib/func');
const Plus     = require(SYS_CONF.path + '/lib/plus');
const Role_Api = require(SYS_CONF.path + '/lib/role_api');
const Check = require('./check');


//返回当前用户拥有的api列表
function getUser_Api(g){
    let ret = {};
    let user_api = Role_Api.apis;

    if(!g) return ret;
    if(!g.grants) return ret;

    let grants = g.grants.split(',');
    for(let i in grants){
         if(user_api[grants[i]]) ret[ user_api[grants[i]].toLowerCase() ] = true;
    }

    return ret;
}

async function to_login(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret();
        if(!d){
          ret.msg = '参数提交错误!';
        } else if(!d.user_name){
          ret.msg = '请输入用户名!';
        } else if(!d.password){
          ret.msg = '请输入密码!';
        } else if(d.verif_code !== ctx.session.verif_code){
          //console.log("d: "+d.verif_code, "session: " + ctx.session.verif_code);
          ret.msg = '验证码错误!';
        } else {
           ret.status = 1;
        }

        if(!ret.status) return ret;

        ret.status = 0;
        let dats = await DB.login({"user_name":d.user_name, "password":d.password});
        //console.log(dats);

        if(!dats){ ret.msg = '登陆发生错误！请与管理员联系'; return ret; }

        if(!dats.length){ ret.msg = '用户名或密码错误!'; return ret; }

        let role_list = await Plus.role();

        ctx.session.isLogin = 1;
        ctx.session.userinfo = dats[0];
        ctx.session.hash = d.password;
        ctx.session.apis = getUser_Api( role_list[dats[0].role_id.toString()] );
        delete dats[0].role;
        ret.status = 1;
        ret.me = dats[0];
        ret.data = (await Check.init_data(ctx));

        //更新最后登陆时间
        DB.update({"id":dats[0].id, "last_time":Func.time()});

        Logs.save({action:"用户["+d.user_name+"] 登录"}, ctx);

        return ret;
};

module.exports = async (ctx, next) => {
      ctx.body = await to_login(ctx);
 };
