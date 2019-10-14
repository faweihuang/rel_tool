/*
 * url: /add
 * 新增
 */
 const DB   = require(SYS_CONF.path + '/model/db_milieu');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //新增
 async function add(d){
       let ret = Plus.ret();
       let role_id = null;
       if(!d){
           ret.msg = '参数提交错误!';
       } else if(!d.milieu_name){
           ret.msg = '请输入环境名!';
       } else {
            ret.status = 1;
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let data = {
         "role_id":0,
         "milieu_name":d.milieu_name,
         "val":d.val
       };

       let dats = await DB.add(data);

       //console.log(dats);

       if(dats){
         ret.status = 1;
         ret.msg = 'success';
         ret.data=(await DB.list());
       } else{
         ret.msg = '新增出错!';
       }

       return ret;
};

module.exports = async (ctx, next) => {
     let d = await Plus.query(ctx);
     //console.log(d);
     ctx.body = await add(d);
 };
