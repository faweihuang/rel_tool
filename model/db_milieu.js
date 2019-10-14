const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*环境表*/
module.exports = {
    "table":"rel_milieu",
    "field":function(){ return ["`id`", "`role_id`", "`milieu_name`", "`val`", "`create_date`", "`status`","`is_delete`"];},
    "search" : async function(f, field, page){
        let ret = {"total": page ? await DB.total(this.table,f) : 0, "data":[]};
        let s = DB.limit(page);
        let sql = 'select ' + (field ? field : this.field().toString()) + ' from ' + this.table + ' ' + (f ? f : '') + ' ' + s.limit;
        let raw = await DB.query(sql);
        if(raw) ret.data = raw;
        //console.log(sql);
        return ret;
    },
    "list": async function(){
        let raw = await DB.query('select `id`,`milieu_name` from ' + this.table);
        let ret = raw ? raw : [];
        if(ret.length){
              let obj = {};
              ret.forEach(function(v, i){ obj[v.id] = v; });
              SYS_CONF.cache.milieu = obj;
        }
        return ret;
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.isNumber(d.role_id)
          + ',' + DB.hex(d.milieu_name)
          + ',' + DB.hex(d.val)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ",0)";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.role_id)       field.push('`role_id`='+DB.hex(d.role_id));
        if(d.milieu_name)   field.push('`milieu_name`='+DB.hex(d.milieu_name));
        if(d.val)           field.push('`val`='+DB.hex(d.val));
        if(d.status)        field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    }
};
