/*
 * url: /role/search
 *
 */
const DB    = require(SYS_CONF.path + '/model/db_role');
const SQL   = require(SYS_CONF.path + '/lib/sql');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

async function search(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret({status:1});

        let condition = "";

        //按分类搜索
        if(d.role_name) condition += ', role_name=' + SQL.hex(d.role_name);

        let dats = await DB.search((condition.length ? ' where ' + condition.substr(2) : '') + ' order by id desc', '', d);
        //console.log(dats);

        ret.total = dats.total;
        ret.data = dats.data;

        return ret;
};

module.exports = async (ctx, next) => {
    ctx.body = await search(ctx);
 };
