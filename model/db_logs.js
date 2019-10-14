const DB   = require('../lib/sql');
const Func = require('../lib/func');
/*日志信息表*/
module.exports = {
    "table":"rel_logs",
    "field":function(){ return ["`id`", "`uid`", "`kind`", "`action`", "`val`", "`ip`", "`create_date`", "`status`","`is_delete`"];},
    "search" : async function(f, field, page){
        let ret = {"total": page ? await DB.total(this.table,f) : 0, "data":[]};
        let s = DB.limit(page);
        let sql = 'select ' + (field ? field : this.field().toString()) + ' from ' + this.table + ' ' + (f ? f : '') + ' ' + s.limit;
        let raw = await DB.query(sql);
        if(raw) ret.data = raw;
        return ret;
    },
    "add" : async function(d){
        let sql = 'insert into ' + this.table + '(' + this.field().splice(1).toString() + ')values('
          + DB.isNumber(d.uid)
          + ',' + DB.isNumber(d.kind)
          + ',' + DB.hex(d.action)
          + ',' + DB.hex(d.val)
          + ',' + DB.hex(d.ip)
          + ',' + Func.time()
          + ',' + DB.isNumber(d.status)
          + ",0)";
        return await DB.query(sql);
    },
    "save": async function(dats, ctx){
          let d = ('object' === typeof(dats)) ? dats : {"action":dats};
          let uid = 0;
          let ip = '127.0.0.1';
          if(ctx){
                uid = ctx.session ? (ctx.session.userinfo ? ctx.session.userinfo.id : 0) : 0;
                ip = ctx.request.ip;
                if('127.0.0.1' === ip &&  ctx.request.header){
                    ip = ctx.request.header['x-real-ip'] ? ctx.request.header['x-real-ip'] : (ctx.request.header['x-forwarded-for'] ? ctx.request.header['x-forwarded-for'] : ip);
                }
          }

          return this.add({
              "uid": uid,
              "kind": d.kind ? d.kind : 0,
              "action":d.action,
              "val":d.val ? d.val : '',
              "ip":ip,
              "status": d.status ? d.status : 0
          });
    }
};
