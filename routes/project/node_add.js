/*
 * url: /node_add
 * 新增
 */
 const DB   = require(SYS_CONF.path + '/model/db_nodes');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

 //新增
 async function add(d){
       let ret = Plus.ret();
       let role_id = null;
       if(!d){
           ret.msg = '参数提交错误!';
       } else if(!d.milieu_id){
           ret.msg = '未选择环境!';
       } else if(!d.project_id){
           ret.msg = '未选择项目!';
       } /*else if(!d.rsync_user){
           ret.msg = '请输入同步帐号!';
       } else if(!d.rsync_name){
           ret.msg = '请输入同步项!';
       } else if(!d.nodes){
           ret.msg = '未输入服务器节点地址!';
       } */else {
            ret.status = 1;
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let data = {
         "milieu_id":d.milieu_id,
         "project_id":d.project_id,
         "rsync_user":d.rsync_user ? d.rsync_user : '',
         "rsync_passwd":d.rsync_passwd ? d.rsync_passwd : '',
         "rsync_name":d.rsync_name ? d.rsync_name : '',
         "shell_path":d.shell_path ? d.shell_path : '',
         "is_sync":d.is_sync ? d.is_sync : '',
         "nodes":d.nodes ? d.nodes : '',
         "status":d.status ? d.status : 0
       };

       let dats = await DB.add(data);

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
 };
