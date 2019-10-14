/*
 * url: /update
 * 修改
 */
 const DB   = require(SYS_CONF.path + '/model/db_tasks');
 const Plus = require(SYS_CONF.path + '/lib/plus');

//修改角色
async function update(d,w){
        let ret = Plus.ret();
        if(!d){ ret.msg = '参数提交错误!'; return ret; }
        if(!d.id){ ret.msg = '参数错误, 未提交ID!'; return ret; }

        let dats = await DB.update(d,w);

        //console.log(dats);

        if(dats){
          ret.status = 1;
          ret.msg = 'success';
        } else {
          ret.msg = '修改出错!';
        }

        return ret;
};


module.exports = update;
