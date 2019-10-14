/*
 * url: /user/update
 * 修改用户
 */
 const DB   = require(SYS_CONF.path + '/model/db_user');
 const Logs   = require(SYS_CONF.path + '/model/db_logs');
 const Plus = require(SYS_CONF.path + '/lib/plus');

//修改角色
async function update(d){
        let ret = Plus.ret();
        let id = parseInt(d.id);
        if(!d){ ret.msg = '参数提交错误!'; return ret; }
        if(!id){ ret.msg = '参数错误, 未提交用户ID!'; return ret; }

        if(d.password){
            let u = (await DB.search('where is_delete=0 and status=1 and id='+id, '`user_name`')).data[0];
            d.user_name = u ? u.user_name : '';
        }

        let dats = await DB.update(d);

        //console.log(dats);

        if(dats){
          ret.status = 1;
          ret.msg = 'success';
        } else {
          ret.msg = '修改用户出错!';
        }

        return ret;
};

module.exports = async (ctx, next) => {
     let d = await Plus.query(ctx);
     let ret = await update(d);

     Logs.save({action:"修改用户",val:JSON.stringify(d) + ' ==> ' + JSON.stringify(ret)}, ctx);
     //console.log(d);
     ctx.body = ret;
 };
