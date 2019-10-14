/*
 * url: /user/change_pwd
 * 用户修改自己的密码
 */
 const DB   = require(SYS_CONF.path + '/model/db_user');
 const Logs   = require(SYS_CONF.path + '/model/db_logs');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //修改密码
 async function change(ctx){
       let ret = Plus.ret();

       if(!ctx.session.isLogin){ ret.msg = '请先登录!'; return ret; }

       let d = await Plus.query(ctx);

       if(!d){
         ret.msg = '参数提交错误!';
       } else if(!d.password){
         ret.msg = '请输入密码!';
       } else if(!d.new_password){
         ret.msg = '请输入新密码!';
       } else {
         if(SQL.pwd(ctx.session.userinfo.user_name, d.password, true) !== ctx.session.hash){
           ret.msg = '原密码错误!';
         } else {
           ret.status = 1;
         }
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let data = {
         "id":ctx.session.userinfo.id,
         "user_name":ctx.session.userinfo.user_name,
         "password":d.new_password
       };

       let dats = await DB.update(data);

       //console.log(dats);

       if(dats){
         ret.status = 1;
         ret.msg = 'success';
         Plus.clean_session(ctx);
       } else{
         ret.msg = '重置密码出错!';
       }

       Logs.save({action:"用户["+data.user_name+"]修改密码",val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ret)}, ctx);

       return ret;
 };


module.exports = async (ctx, next) => {
     ctx.body = await change(ctx);
 };
