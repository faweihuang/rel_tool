const ROLE_DB  = require(SYS_CONF.path + '/model/db_role');

//解析数据
function Parse_Query(d){
    let Obj = {}
    let Arr = d.split('&');
    for(let i=0; i < Arr.length; i++ ) {
       let items = Arr[i].split('=');
       if(items.length > 1) Obj[ items[0] ] = decodeURIComponent(items[1]);
    }
    return Obj;
};

//获取get数据
function Parse_Uri(ctx){
   let arr = ctx.req.url.split('?');
   return (arr.length > 1 ? Parse_Query(arr[1]) : {});
}


module.exports = {
    "R": function(r, o){
        if(!r || !o) return;
        for(let k in o){
           r.get(k, o[k]);
           r.post(k, o[k]);
        }
    },
    "get": Parse_Uri,
    "query": function(ctx, tar) {
        return new Promise((resolve, reject) => {
           try {
              let Obj = {"get":Parse_Uri(ctx), "post":ctx.request.body};
              resolve(tar ? Obj : Object.assign({}, Obj.get, Obj.post));
           } catch (err){
              console.log(err);
              reject({});
           }
        });
    },
    "ret": function(dats){
        let d = dats ? dats : {};
        let data = {
          "status" : 0,   // 1 表示成功, 0 表示失败
          "msg"    : "",  // 数据集
          "data"   : []   // 状态说明
        };
        for(let k in d) data[k] = d[k];
        return data;
    },
    "clean_session": function(ctx){
       delete ctx.session.isLogin;
       delete ctx.session.userinfo;
       delete ctx.session.hash;
       delete ctx.session.role;
       delete ctx.session.apis;
    },
    "role": async function(){
        let rows = (await ROLE_DB.search('where status=1 and is_delete=0','id,role_name,grants')).data;
        let r = {};
        if(rows.length){
           for(let i in rows){ r[rows[i].id.toString()] = rows[i]; }
        }
        return r;
    }

};
