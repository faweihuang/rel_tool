// redis 链接
const Redis = require('redis').createClient(SYS_CONF.redis.port, SYS_CONF.redis.host);
Redis.auth(SYS_CONF.redis.auth, function(err){
  if(err){
    console.log("Error from Redis.auth(): ", err);
    return false;
  }
});

Redis.on("error",function(err){
  console.log("Error from Redis error: ", err);
});

//同步get
function rsync_get(k){
  return new Promise((resolve, reject) => {
      Redis.get(k, function(err, data){
          //console.log("dats:", dats, "   err:", err);
          resolve(err ? err : data);
      });
  });
}

module.exports = {
  "default": Redis,
  "rsync_get": rsync_get
};
