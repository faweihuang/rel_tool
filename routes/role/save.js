/*
 * url: /role/save
 *
 */
 const DB   = require(SYS_CONF.path + '/model/db_role');
 const Func = require(SYS_CONF.path + '/lib/func');
 const Plus = require(SYS_CONF.path + '/lib/plus');

//添加角色
async function add(d){
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
        } else {
          ret.msg = '新增角色出错!';
        }

        return ret;
};

//更新角色
async function update(d){
        let ret = Plus.ret();
        if(!d){
           ret.msg = '参数提交错误!';
           return ret;
        }

        let dats = await DB.update(d);
        //console.log(dats);

        if(dats){
          ret.status = 1;
          ret.msg = 'success';
        } else {
          ret.msg = '新增角色出错!';
        }

        return ret;
};

module.exports = async (ctx, next) => {
    let d = await Plus.query(ctx);
    ctx.body = d.id ? await update(d) : await add(d);
 };
