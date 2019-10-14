const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*系统设置表*/
module.exports = {
    "table":"rel_setting",
    "field":function(){ return ["`id`", "`key`", "`val`", "`create_date`", "`status`","`is_delete`"];},
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
          + DB.hex(d.key)
          + ',' + DB.hex(d.val)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ",0)";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.key)      field.push('`key`='+DB.hex(d.key));
        if(d.val)      field.push('`val`='+DB.hex(d.val));
        if(d.status)   field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    }
};
