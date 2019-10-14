const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*项目表*/
module.exports = {
    "table":"rel_project",
    "field":function(){ return ["`id`", "`project_name`", "`exclude`","`note`", "`create_date`","`status`","`is_delete`"];},
    "search" : async function(f, field, page){
        let ret = {"total": page ? await DB.total(this.table,f) : 0, "data":[]};
        let s = DB.limit(page);
        let sql = 'select ' + (field ? field : this.field().toString()) + ' from ' + this.table + ' ' + (f ? f : '') + ' ' + s.limit;
        let raw = await DB.query(sql);
        if(raw) ret.data = raw;
        //console.log(sql);
        return ret;
    },
    "list":async function(){
        let raw = await DB.query('select `id`,`project_name` from ' + this.table);
        let ret = raw ? raw : [];
        if(ret.length){
              let obj = {};
              ret.forEach(function(v, i){ obj[v.id] = v; });
              SYS_CONF.cache.project = obj;
        }
        return ret;
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.hex(d.project_name)
          +',' + DB.hex(d.exclude)
          +',' + DB.hex(d.note)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ",0)";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.project_name)  field.push('`project_name`='+DB.hex(d.project_name));
        if(d.exclude)  field.push('`exclude`='+DB.hex(d.exclude));
        if(d.note)  field.push('`note`='+DB.hex(d.note));
        if(d.status)        field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    }
};
