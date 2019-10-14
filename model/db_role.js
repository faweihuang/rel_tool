const DB   = require('../lib/sql');
const Func = require('../lib/func');

module.exports = {
    "table":"rel_role",
    "field":function(){ return ["`id`", "`role_name`", "`grants`", "`create_date`", "`status`"];},
    "search" : async function(f, field, page){
        let ret = {"total": page ? await DB.total(this.table,f) : 0, "data":[]};
        let s = DB.limit(page);
        let sql = 'select ' + (field ? field : this.field().toString()) + ' from ' + this.table + ' ' + (f ? f : '') + ' ' + s.limit;
        let raw = await DB.query(sql);
        if(raw) ret.data = raw;
        //console.log(sql);
        return ret;
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.hex(d.role_name)
          + ',' + DB.hex(d.grants)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ")";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.role_name)  field.push('`role_name`='+DB.hex(d.role_name));
        if(d.grants)     field.push('`grants`='+DB.hex(d.grants));
        if(d.status)     field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    },
    //返回api列表
    "api_list": async function(){
        return await DB.query('select `id`,`api_name`,`route` from tab_api');
    }
};
