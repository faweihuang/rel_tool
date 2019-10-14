//返回json结构
function ws_ret(cmd,msg){
   let data = {
       "status":0,
       "msg": msg ? msg : ""
   };
   if(cmd) data.cmd = cmd;
    return data;
}

//发布 出现 错误 返回
async function ws_ret_close(ws, d){
      ws.send(JSON.stringify(d));
      ws.close();
}

module.exports = {
    "ws_ret": ws_ret,
    "ws_ret_close": ws_ret_close
};
