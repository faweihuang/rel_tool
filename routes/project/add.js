/*
 * url: /add
 * 新增
 */
 const DB   = require(SYS_CONF.path + '/model/db_project');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //新增
 async function add(d){
       let ret = Plus.ret();
       let role_id = null;
       if(!d){
           ret.msg = '参数提交错误!';
       } else if(!d.project_name){
           ret.msg = '请输入项目名!';
       } else {
            ret.status = 1;
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let data = {
         "project_name":d.project_name,
         "exclude":d.exclude ? d.exclude : '',
         "note":d.note
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
