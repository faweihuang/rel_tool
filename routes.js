const Fs     = require('fs');
const R      = require('koa-router');
const Router = new R();

const Mod    = Object.create(null);
const Path   = './routes';
const Files  = Fs.readdirSync(Path).filter(e => e !== 'index.js');

const Export_Api = [
  'user',             //用户
  'role',             //角色
  'upload',      //文件上传模块
  'img',            //读取上传图片
  'verif',          //验证码
  'project',    //项目管理
  'sql',            //执行SQL任务
  'logs',          //日志信息
  'dbs'            //数据库配置
];

for(const f of Files) {
  Mod[f.replace('.js', '')] = require(Path + '/' + f);
}

//console.log(Object.keys(Mod));

for(let i = 0; i < Export_Api.length; i++){
   let obj = Mod[ Export_Api[i] ];
   if(obj){
      Router.use(SYS_CONF.Api_Fix + Export_Api[i], obj.routes(), obj.allowedMethods());
   }
}

module.exports = Router;
