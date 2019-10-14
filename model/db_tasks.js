const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*系统设置表*/
module.exports = {
    "table":"rel_tasks",
    "field":function(){ return ["`id`", "`uid`", "`kind`", "`title`", "`val`", "`ip`", "`note`", "`create_date`", "`status`"]; },
    "search" : async function(f, field, page){
        let ret = {"total": page ? await DB.total(this.table,f) : 0, "data":[]};
        let s = DB.limit(page);
        let sql = 'select ' + (field ? field : this.field().toString()) + ',(select `runtime` from `rel_running` where task_id=rel_tasks.id order by id desc limit 1) as run_time from ' + this.table + ' ' + (f ? f : '') + ' ' + s.limit;
        let raw = await DB.query(sql);
        if(raw) ret.data = raw;
        //console.log(sql);
        return ret;
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.isNumber(d.uid)
          + ','  + DB.isNumber(d.kind)
          + ','  + DB.hex(d.title)
          + ','  + DB.hex(d.val)
          + ','  + DB.hex(d.ip)
          + ','  + DB.hex(d.note)
          + ','  + Func.time()
          + ','  + DB.isNumber(d.status)
          + ")";

        return await DB.query(sql);
    },
    "update": async function(d,w){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.kind)      field.push('`kind`='+DB.isNumber(d.kind));
        if(d.title)       field.push('`title`='+DB.hex(d.title));
        if(d.val)         field.push('`val`='+DB.hex(d.val));
        if(d.note)      field.push('`note`='+DB.hex(d.note));
        if(d.status)   field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id) + (w ? ' ' + w : '');

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id,w){
        let ids = id.replace(/[^0-9,]/g,'').split(',');
        return await DB.query('delete from '+this.table+' where id='+ids.toString().replace(/,/g," or id=") + (w ? ' ' + w : ''));
    }
};
