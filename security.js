const RateLimit  = require('koa-ratelimit');
//const Redis      = require(SYS_CONF.path + '/lib/redis');


// 限制单位时间相同ip（60s）请求数
/*
const Limit_Option = {
    db: Redis.default,
    duration: 60000,
    errorMessage: 'error 503',
    id: (ctx) => {
      const {req, ip} = ctx;
      return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || ip;
    },
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 2000,                //duration 指定的时间(毫秒)内 允许访问的次数
    disableHeader: false,
  };

exports.limit  = RateLimit(Limit_Option);
*/
//劫持，css注入防注入攻击
exports.helmet = require('koa-helmet');
