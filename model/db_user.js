const DB   = require('../lib/sql');
const Func = require('../lib/func');

module.exports = {
    "table":"rel_users",
    "field":function(){ return ["`id`", "`role_id`", "`user_name`", "`password`", "`real_name`", "`avatar`", "`telephone`", "`last_time`", "`create_date`", "`note`", "`status`", "`is_delete`"];},
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
         return await DB.query('select `id`,`real_name` from ' + this.table);
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.isNumber(d.role_id)
          + ',' + DB.hex(d.user_name)
          + ',"' + DB.pwd(d.user_name, d.password, true) + '"'
          + ',' + DB.hex(d.real_name)
          + ',' + DB.hex(d.avatar)
          + ',' + DB.isTel(d.telephone)
          + ',0'
          + ',' + Func.time()
          + ',' + DB.hex(d.note)
          + ',' + DB.isNumber(d.status)
          + ",0)";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        //if(d.user_name)  field.push('`user_name`='+DB.hex(d.user_name));
        if(d.real_name)  field.push('`real_name`='+DB.hex(d.real_name));
        if(d.avatar)     field.push('`avatar`='+DB.hex(d.avatar));
        if(d.password)   field.push('`password`="'+DB.pwd(d.user_name, d.password, true)+'"');
        if(d.role_id)    field.push('`role_id`='+DB.isNumber(d.role_id));
        if(d.last_time)  field.push('`last_time`='+DB.isNumber(d.last_time));
        if(d.status)     field.push('`status`='+DB.isNumber(d.status));
        if(d.telephone)  field.push('`telephone`='+DB.isTel(d.telephone));
        if(d.note)       field.push('`note`='+DB.hex(d.note));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "set_pwd":async function(id, user_name, password){
        let sql = 'update ' + this.table + ' set `password` = "' + DB.pwd(user_name, password, true) + '" where id='+id;
        return await DB.query(sql);
    },
    "delete": async function(id){
        let ids = id.toString().replace(/[^0-9,]/g,'').replace(/,/g,' or id=');
        return await DB.query('delete from '+this.table+' where role_id > 0 and (id='+ids+')');
    },
    "login": async function(d){
        if(!d) return;

        let sql = 'select `id`,`role_id`,`user_name`,`real_name`,`avatar`,`last_time` from ' + this.table + ' where user_name=' + DB.hex(d.user_name) + ' and `password`=' + DB.hex(d.password) + ' limit 1';
        //console.log(sql);

        let dats = await DB.query(sql);

        return dats ? Func.isJson(JSON.stringify(dats)) : {};
      }
};
