let Enc   = require('./crypt');
let Func  = require('./func');

let Role_Grants = JSON.parse( Func.readf("conf/api.json") );
let Role_Apis = {};

function init(arr){
    for(let i in arr){
       let v = arr[i].val
       let id = v ? Enc.md5(v) : ''
       arr[i].id = id;
       Role_Apis[id] = v;
       if(arr[i].children){
           init(arr[i].children);
       }
    }
}

//初始化计算 id
init(Role_Grants);

module.exports = {
  "list": Role_Grants,
  "apis": Role_Apis,
  "reload": function(){
     Role_Grants = JSON.parse( Func.readf("../conf/api.json") );
     Role_Apis = {};
     init(Role_Grants);
  },

}
