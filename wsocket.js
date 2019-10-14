const Https         = require('https');
const Http           = require('http');
const Ws              = require('ws');
const Fs                = require('fs');
const Msg            = require('./wsocket/index');

let Server  =  null;

function cb(req, res){
    //要是单纯的https连接的话就会返回这个东西
    res.writeHead(403);//403即可
    res.end("This is a  WebSockets server!\n");
}

if(SYS_CONF.is_https){
      //https链接
      Server = Https.createServer({
              key: Fs.readFileSync(SYS_CONF.ws.ssl.key),
              cert: Fs.readFileSync(SYS_CONF.ws.ssl.crt),
              passphrase:SYS_CONF.ws.ssl.pass  //如果秘钥文件有密码的话，用这个属性设置密码
      }, cb);

} else {

      Server = Http.createServer(cb);

}

let Wss = new Ws.Server( { server: Server } );//把创建好的https服务器丢进websocket的创建函数里，ws会用这个服务器来创建wss服务

//同样，如果丢进去的是个http服务的话那么创建出来的还是无加密的ws服务
Wss.on( 'connection', function ( wsConnect, req ) {
    let Client = {
             "ip": req.connection.remoteAddress,
             "port": req.connection.remotePort
       };
    wsConnect.on( 'message', function(m){ this.client = Client; Msg(m, this); });
});

exports.start = function(){
       console.log("WebSocket Listening on: " + SYS_CONF.ws.opt.host + ':' + SYS_CONF.ws.opt.port);
       Server.listen(SYS_CONF.ws.opt.port, SYS_CONF.ws.opt.host);
};
