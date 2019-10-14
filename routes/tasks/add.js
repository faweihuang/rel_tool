/*
 * url: /add
 * 新增
 */
 const DB   = require(SYS_CONF.path + '/model/db_tasks');
 const SQL  = require(SYS_CONF.path + '/lib/sql');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');


 //获取真实ip
function get_ip(req){
   let ip = req.ip;
   if('127.0.0.1' === ip){
       ip = req.header['x-real-ip'] ? req.header['x-real-ip'] : (req.header['x-forwarded-for'] ? req.header['x-forwarded-for'] : ip);
   }
   return ip;
}

 //新增
 async function add(d){
       let ret = Plus.ret();
       if(!d){
           ret.msg = '参数提交错误!';
       } else if(!d.kind){
           ret.msg = '请输入任务类型!';
       } else if(!d.title){
           ret.msg = '请输入任务标题!';
       } else if(!d.val){
           ret.msg = '请输入任务内容!';
       }   else {
            ret.status = 1;
       }

       if(!ret.status) return ret;
       ret.status = 0;

       let data = {
         "uid": d.uid,
         "kind":d.kind,
         "title":d.title,
         "val":d.val,
         "note":d.note,
         "ip":get_ip(d.req),
         "status":1
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

module.exports = add;
