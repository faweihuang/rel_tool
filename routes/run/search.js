/*
 * url: /search
 * 搜寻
 */
const DB    = require(SYS_CONF.path + '/model/db_running');
const User_DB    = require(SYS_CONF.path + '/model/db_user');
const SQL   = require(SYS_CONF.path + '/lib/sql');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

async function search(d){
        let ret = Plus.ret({status:1});

        let cond = "";

        //按项目名搜索
        if(d.task_id) cond += ' and task_id=' + SQL.isNumber(d.task_id);
        //if(d.uid) cond += ' and uid=' + SQL.isNumber(d.uid);
        if(d.kind) cond += ' and kind=' + SQL.isNumber(d.kind);
        if(d.status) cond += ' and status=' + SQL.isNumber(d.status);

        let dats = await DB.search( (cond.length ? ' where ' + cond.substr(4) : '') + ' order by id desc', '', d);
        //console.log(dats);

        if(dats.data.length > 0){
            let raw = await User_DB.list();
            let user_list = {};
            raw.forEach(function(v,i){ user_list[v.id] = v.real_name; });
            dats.data.forEach(function(v,i){ v.owner = user_list[v.uid]; });
       }

        ret.total = dats.total;
        ret.data = dats.data;

        return ret;
};

module.exports = search;
