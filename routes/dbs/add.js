/*
 * url: /add
 * 新增
 */
 const DB   = require(SYS_CONF.path + '/model/db_dbconfig');
  const Logs   = require(SYS_CONF.path + '/model/db_logs');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //新增
 async function add(d){
       let ret = Plus.ret();
       let role_id = null;
       if(!d){
           ret.msg = '参数提交错误!';
       } else if(!d.project_id){
           ret.msg = '请选择归属项目!';
       } else if(!d.milieu_id){
           ret.msg = '请选择归属环境!';
       } else if(!d.host){
           ret.msg = '请输入链接地址!';
       } else if(!d.user){
           ret.msg = '请输入链接账户!';
       } else if(!d.dbname){
           ret.msg = '请输入库名!';
       }  else {
            ret.status = 1;
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let dats = await DB.add(d);

       //console.log(dats);

       if(dats){
         ret.status = 1;
         ret.msg = 'success';
       } else{
         ret.msg = '新增出错!';
       }

       return ret;
};

module.exports = async (ctx, next) => {
     let d = await Plus.query(ctx);
     //console.log(d);
     ctx.body = await add(d);

     Logs.save({action:"新增数据库配置",val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ctx.body)}, ctx);
 };
