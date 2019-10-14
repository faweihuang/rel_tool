/*
 * url: /user/search
 *
 */
const DB    = require(SYS_CONF.path + '/model/db_user');
const SQL   = require(SYS_CONF.path + '/lib/sql');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

async function search(ctx){
        let d = await Plus.query(ctx);
        let ret = Plus.ret({status:1});

        let condition = "";

        //按分类搜索
        if(d.real_name) condition += ' and real_name ' + SQL.like(d.real_name);

        let dats = await DB.search('where role_id > 0' + condition + ' order by id desc', '', d);
        //console.log(dats);

        ret.total = dats.total;
        ret.data = dats.data;

        return ret;
};

module.exports = async (ctx, next) => {
    ctx.body = await search(ctx);
 };
