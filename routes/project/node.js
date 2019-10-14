/*
 * url: /node
 * 发布节点信息
 */
const DB    = require(SYS_CONF.path + '/model/db_nodes');
const SQL   = require(SYS_CONF.path + '/lib/sql');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

async function search(d){
        let ret = Plus.ret({status:1});

        let cond = "";

        if(d.project_id) cond += ' and project_id=' + SQL.isNumber(d.project_id);
        if(d.milieu_id) cond += ' and milieu_id=' + SQL.isNumber(d.milieu_id);

        let dats = await DB.search( cond ? ' where ' + cond.substr(4) : '', '', d);
        //console.log(dats);

        ret.total = dats.total;
        ret.data = dats.data;

        return ret;
};

module.exports = async (ctx, next) => {
      let d = await Plus.query(ctx);
      ctx.body = await search(d);
 };
