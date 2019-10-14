/*
 * url: /role/save
 * 修改角色
 */
 const DB   = require(SYS_CONF.path + '/model/db_role');
 const Plus = require(SYS_CONF.path + '/lib/plus');

//更新角色
async function update(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret();
        if(!d){ret.msg = '参数提交错误!'; return ret;}
        if(!d.id){ret.msg = '参数错误,未提交id!'; return ret;}

        let dats = await DB.update(d);
        //console.log(dats);

        if(dats){
          ret.status = 1;
          ret.msg = 'success';
          ret.data = await Plus.role();
        } else {
          ret.msg = '修改角色出错!';
        }

        return ret;
};

module.exports = async (ctx, next) => {

    ctx.body = await update(ctx);
 };
