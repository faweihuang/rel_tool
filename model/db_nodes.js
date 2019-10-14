const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*发布节点表*/
module.exports = {
    "table":"rel_nodes",
    "field":function(){ return ["`id`", "`milieu_id`", "`project_id`", "`rsync_user`","`rsync_passwd`","`rsync_name`","`nodes`", "`shell_path`", "`is_sync`", "`create_date`", "`status`"]; },
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
          + ','  + DB.isNumber(d.project_id)
          + ','  + DB.hex(d.rsync_user)
          + ','  + DB.hex(d.rsync_passwd)
          + ','  + DB.hex(d.rsync_name)
          + ','  + DB.hex(d.nodes)
          + ','  + DB.hex(d.shell_path)
          + ','  + DB.isNumber(d.is_sync)
          + ','  + Func.time()
          + ','  + DB.isNumber(d.status)
          + ")";

        return await DB.query(sql);
    },
    "update": async function(d){
        let sql = 'update ' + this.table + ' set ';
        let field = [];
        if(d.milieu_id)               field.push('`milieu_id`='+DB.isNumber(d.milieu_id));
        if(d.project_id)             field.push('`project_id`='+DB.isNumber(d.project_id));
        if('undefined' != typeof(d.rsync_user))            field.push('`rsync_user`='+DB.hex(d.rsync_user));
        if('undefined' != typeof(d.rsync_passwd))     field.push('`rsync_passwd`='+DB.hex(d.rsync_passwd));
        if('undefined' != typeof(d.rsync_name))         field.push('`rsync_name`='+DB.hex(d.rsync_name));
        if('undefined' != typeof(d.nodes))                     field.push('`nodes`='+DB.hex(d.nodes));
        if('undefined' != typeof(d.shell_path))            field.push('`shell_path`='+DB.hex(d.shell_path));
        if(d.is_sync)                  field.push('`is_sync`='+DB.isNumber(d.is_sync));
        if(d.status)                     field.push('`status`='+DB.isNumber(d.status));

        sql += field.toString() +' where id=' + DB.isNumber(d.id);

        //console.log(sql);

        return await DB.query(sql);
    },
    "delete": async function(id){
        return await DB.to_delete(this.table, id);
    }
};
