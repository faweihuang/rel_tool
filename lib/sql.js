const { URLSearchParams } = require('url');
let Mydb  = require('./db');
let Enc   = require('./crypt');
let Func  = require('./func');
//字符串
let hex = function(s){
  let str = ('object' == typeof(s)) ? JSON.stringify(s) : s;
  return str ? '0x' + Func.strToHex(str) : '""';
};
//模糊搜索字符串
let like = function(s){
  let str = s.real_name.replace(/"|%/g, '');
  return 'like "%' + str + '%"';
};
//电话
let isTel = function(s){
  return '"' + s.replace(/[^0-9- ]/g,'') + '"';
};
//IPv4地址
let isIP = function(s){
  return '"' + s.replace(/[^0-9.]/g,'') + '"';
}
//日期时间
let isDateTime = function(s){
  let t = s.replace(/[^0-9- :]/g,'');
  return t ? ( (new Date(t)).valueOf() / 1000 ) : 0;
};
//日期
let isDate = function(s){
   let st = s.split(' ')[0] + ' 00:00:00';
   return (new Date(st)).valueOf()/1000;
};
//数直
let isNumber = function(s){
   let number = 0;
   switch(typeof(s)){
      case 'string':
        number = parseInt(s.replace(/[^0-9.]/g,''));
        number = isNaN(number) ? 0 : number;
      break;
      case 'number':
        number = s;
      break;
   }
   return number;
};
//密码计算, hash512
let pwd = function(u, p, t){
   let s = Enc.hash(u + (t ? p : Enc.md5(p)) );
   return s;
};
//通用删除表记录
let to_delete = async function(tab, id){
    let ids = id.replace(/[^0-9,]/g,'').split(',');
    return await Mydb.query('delete from '+tab+' where id='+ids.toString().replace(/,/g," or id="));
}
//返回页信息
let limit = function(params){
    let p = params ? params : {};

    p.page = isNaN(parseInt(p.page)) ? 0 : parseInt(p.page);
    let ret = {
        page_size: p.limit ? p.limit : 30,
        page_number: p.page ? (p.page > 0 ? (p.page - 1) : 0) : 0,
        limit:' limit ',
    };

    ret.limit += (ret.page_size * ret.page_number) + ',' + ret.page_size;

    return ret;
};

//获取总记录数
let total = async function(tab, w){
    let wh = w ? ' ' + w : '';
    let raw = await Mydb.query('select count(*) as total from ' + tab + wh);
    raw = raw ? raw[0]['total'] : 0;
    return raw;
}


exports.query = Mydb.query;
exports.hex = hex;
exports.isTel = isTel;
exports.isIP = isIP;
exports.isDateTime = isDateTime;
exports.isDate = isDate;
exports.isNumber = isNumber;
exports.pwd = pwd;
exports.to_delete = to_delete;
exports.limit = limit;
exports.total = total;
