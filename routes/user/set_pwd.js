/*
 * url: /user/set_pwd
 * 用户修改其他用户的密码，为用户管理，或超管所用
 */
 const DB   = require(SYS_CONF.path + '/model/db_user');
 const Logs   = require(SYS_CONF.path + '/model/db_logs');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //修改密码
 async function set(ctx){
       let d = await Plus.query(ctx);
       let ret = Plus.ret();
       let user_id = '';
       let user_name = '';
       if(!d){
         ret.msg = '参数提交错误!';
       } else if(!d.user_id){
         ret.msg = '未提交用户id!';
       } else if(!d.password){
         ret.msg = '请输入密码!';
       } else {
           user_id = d.user_id.toString().replace(/[^0-9]/g, '');
           if(!user_id){
              ret.msg = '请提交正确的用户id!';
           } else {
              let raw = (await DB.search('where role_id > 0 and id='+d.user_id, 'user_name')).data;
              if(raw.length < 1){
                 ret.msg = '未找到用户!';
              } else {
                 user_name = raw[0].user_name;
                 ret.status = 1;
              }
           }
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let dats = await DB.set_pwd(d.user_id, user_name, d.password);

       //console.log(dats);

       if(dats){
         ret.status = 1;
         ret.msg = 'success';
       } else{
         ret.msg = '设置用户密码出错!';
       }

       Logs.save({action:"设置用户密码",val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ret)}, ctx);

       return ret;
 };


module.exports = async (ctx, next) => {
     ctx.body = await set(ctx);
 };
