let Fs = require('fs');
/*输出调试信息*/
function debug(dats){
   var datetime = new Date().toLocaleString();

   switch( typeof(dats) ){
   case 'object':
      if( 'string' == typeof(dats.msg) ){
          switch(dats.report){
          case 'show': console.log(dats.msg); break;
          case 'raw':
             wlogs(JSON.stringify(dats));
          break;
          default:
             wlogs(dats.msg);
          break;
          }
      } else { console.log(dats); }
   break;
   case 'string':
      wlogs(dats);
   break;
   default:
     console.log(dats);
   break;
   }

}


//写日志
function wlogs(msgs, f){
   var datetime = new Date().toLocaleString();
   var fn = (f ? f : datetime.split(' ')[0].replace(/[^0-9]/g,'')) + '.log';

   Fs.appendFile(SYS_CONF.logs_path + '/ff_' + fn, '[' + datetime + ']: ' + msgs + "\n", function(err){
      if(err){ console.log('logs error: '); console.log(err); }
   });
}

//JSON字符串转JSON对象
function isJson(data){
   var json_data = null;
   var data_type = typeof(data);
   switch(data_type){
     case "string":
        try {
           json_data = JSON.parse(data);
        } catch (err){ return false; }
     break;
     case "object":
        json_data = data;
     break;
   }
	return json_data;
}


//产生随机数
function randmixed(n) {
   var chars=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','0','p','q','r','s','t','u','v','w','x','y','z'];
   var res="";
   for(var i=0;i<n;i++){var id=Math.ceil(Math.random()*61);res+=chars[id];}
   return res;
}

//返回文件内容
function readf(f){
   return Fs.readFileSync(process.cwd() + '/' + f).toString();
}

// 字符串转hex
function strToHex(str) {
   var arr = '';
   var h = '';
   for (var i = 0; i < str.length; i++) {
      if( str.charCodeAt(i) < 256 ){
         h = str.charCodeAt(i).toString(16);
      } else {
         h = encodeURIComponent(str.charAt(i)).replace(/\%/g,'');
      }
      arr += ( (h.length < 2) ? ('0' + h) : h );
   }
  return arr;
}

/* 返回时间戳 */
function timestamp(){
  return parseInt(new Date().valueOf()/1000);
}


/* url请求转json */
function getUrlVars(uri){
      var raw = uri.replace(/\?/g,'').split('&');
      var dats = {};
      for(var i = 0; i < raw.length; i++){
        var r = raw[i].split("=");
        if(r.length > 1) dats[r[0]] = r[1];
      }
    return dats;
}


//链接事件
exports.logs = wlogs;
exports.debug = debug;
exports.isJson = isJson;
exports.randmixed = randmixed;
exports.strToHex = strToHex;
exports.time = timestamp;
exports.getUrlVars = getUrlVars;
exports.readf = readf;
