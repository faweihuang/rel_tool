/*
 * url: /user/check
 * 登陆检测
 */
//const DB          = require(SYS_CONF.path + '/model/db_user');
const SQL         = require(SYS_CONF.path + '/lib/sql');
const Func        = require(SYS_CONF.path + '/lib/func');
const Plus        = require(SYS_CONF.path + '/lib/plus');
const Role_Api    = require(SYS_CONF.path + '/lib/role_api');
const DB_Project    = require(SYS_CONF.path + '/model/db_project'); //项目列表
const DB_Milieu    = require(SYS_CONF.path + '/model/db_milieu'); //环境列表

//返回初始数据
async function init_data(ctx){
     let uid = ctx.session.userinfo.id,  real_name = ctx.session.userinfo.real_name, role_id = ctx.session.userinfo.role_id;

      let token = Func.randmixed(32);
      SYS_CONF.online[uid.toString()] = {"id":uid, "real_name":real_name,"token": token, "time":Func.time()};

      let data =  {
        "ws":{"port":SYS_CONF.ws.opt.port,"is_https":SYS_CONF.is_https},
         "role": await Plus.role(),
         "grants": Role_Api.list,
         "project": (await DB_Project.list()),
         "milieu": (await DB_Milieu.list())
         //"apis": ctx.session.apis ? ctx.session.apis : {}
      };
      if(uid > 0){
           data.token = token;
           //如果当前登录的是超级用户则返回在线用户信息
           if(!role_id) data.user_online = SYS_CONF.online;
      }
      return data;
}

async function check(ctx){
    let ret = Plus.ret({status: ctx.session.isLogin ? 1 : 0, "me":{}});


    if(ret.status){
         ret.me = ctx.session.userinfo ? ctx.session.userinfo : {};
         ret.data = (await init_data(ctx));
    }

    return ret;
}

exports.ret = check;
exports.init_data = init_data;
/*
module.exports = async (ctx, next) => {
    ctx.body = await check(ctx);
 };
*/
