/*
 * url: /role/add
 * 新增角色
 */
 const DB   = require(SYS_CONF.path + '/model/db_role');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

//添加角色
async function add(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret();
        if(!d){
          ret.msg = '参数提交错误!';
        } else if(!d.role_name){
          ret.msg = '请输入角色名称!';
        } else {
           ret.status = 1;
        }

        if(!ret.status) return ret;

        ret.status = 0;

        let data = {
          "role_name":d.role_name,
          "grants":d.grants,
          "status":d.status ? d.status : 1
        };

        let dats = await DB.add(data);
        //console.log(dats);

        if(dats){
          ret.status = 1;
          ret.msg = 'success';
          ret.data = await Plus.role();
        } else {
          ret.msg = '新增角色出错!';
        }

        return ret;
};


module.exports = async (ctx, next) => {

    ctx.body = await add(ctx);
 };
