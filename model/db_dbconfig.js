const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*数据库里嗯接配置表*/
module.exports = {
    "table":"rel_dbconfig",
    "field":function(){ return ["`id`", "`milieu_id`", "`project_id`", "`milieu_name`", "`kind`", "`host`", "`port`", "`user`", "`passwd`", "`dbname`", "`create_date`", "`status`","`is_delete`"];},
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
          + DB.isNumber(d.milieu_id)
          + ',' + DB.isNumber(d.project_id)
          + ',' + DB.hex(d.milieu_name)
          + ',' + DB.isNumber(d.kind)
          + ',' + DB.hex(d.host)
          + ',' + DB.isNumber(d.port)
          + ',' + DB.hex(d.user)
          + ',' + DB.hex(d.passwd)
          + ',' + DB.hex(d.dbname)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ",0)";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.milieu_id)    field.push('`milieu_id`='+DB.isNumber(d.milieu_id));
        if(d.project_id)   field.push('`project_id`='+DB.isNumber(d.project_id));
        if(d.milieu_name)  field.push('`milieu_name`='+DB.hex(d.milieu_name));
        if(d.kind)         field.push('`kind`='+DB.isNumber(d.kind));
        if(d.port)         field.push('`port`='+DB.isNumber(d.port));
        if(d.user)         field.push('`user`='+DB.hex(d.user));
        if(d.passwd)       field.push('`passwd`='+DB.hex(d.passwd));
        if(d.dbname)       field.push('`dbname`='+DB.hex(d.dbname));
        if(d.status)       field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    }
};
