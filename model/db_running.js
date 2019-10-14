const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*系统设置表*/
module.exports = {
    "table":"rel_running",
    "field":function(){ return ["`id`", "`task_id`", "`uid`", "`kind`", "`milieu`", "`project`", "`task_key`", "`task_data`", "`result`", "`ip`", "`create_date`", "`runtime`", "`status`"]; },
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
          + DB.isNumber(d.task_id)
          + ','  + DB.isNumber(d.uid)
          + ','  + DB.isNumber(d.kind)
          + ','  + DB.hex(d.milieu)
          + ','  + DB.hex(d.project)
          + ','  + DB.hex(d.task_key)
          + ','  + DB.hex(d.task_data)
          + ',""'
          + ','  + DB.hex(d.ip)
          + ','  + Func.time()
          + ',0'
          + ','  + DB.isNumber(d.status)
          + ")";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.result)   field.push('`result`='+DB.hex(d.result));
        if(d.runtime)  field.push('`runtime`='+DB.isNumber(d.runtime));
        if(d.status)   field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    }
};
