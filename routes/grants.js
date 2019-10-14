//通用无需授权的api列表
const GUEST_API_LIST = [
  'user/login',            //登陆帐号
  'verif'                  //获取验证码
];

//已登陆用户授权的api列表
const USER_API_LIST = [
  'user/check',           //检查登陆状态
  'user/logout',         //退出登陆
  'user/change_pwd'       //修改密码
];



//检查列表
function check_api(api_list, api){
  let ret = false;
  for(let i in api_list){
      if(api === ( SYS_CONF.Api_Fix + api_list[i]) ){
        ret = true;
        break;
      }
  }
  return ret;
};

module.exports = {
  "guest": function(api){
      return check_api(GUEST_API_LIST, api);
  },
  "user": function(ctx, url){
      //超级用户,可访问所有接口
      if(0 === ctx.session.userinfo.role_id) return true;

      //所访问api,为公共api
      if(check_api(USER_API_LIST, url)) return true;

      //根据当权用户所有权进行访问
      return ctx.session.apis[url] ? true : false;
  }
};
