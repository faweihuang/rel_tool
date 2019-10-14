/*
 * url: /search
 * 搜寻
 */
const DB    = require(SYS_CONF.path + '/model/db_milieu');
const SQL   = require(SYS_CONF.path + '/lib/sql');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

async function search(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret({status:1});

        let condition = "";

        //按项目名搜索
        if(d.milieu_name) condition += ' where milieu_name ' + SQL.like(d.milieu_name);

        let dats = await DB.search( condition + ' order by id desc', '', d);
        //console.log(dats);

        ret.total = dats.total;
        ret.data = dats.data;

        return ret;
};

module.exports = async (ctx, next) => {
    ctx.body = await search(ctx);
 };
