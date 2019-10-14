const crypto = require('crypto');

function hash256(s){
   const hash = crypto.createHash('sha256');
   hash.update(s);
   return hash.digest('hex');
}

function _hash(s, t){
   const hash = crypto.createHash(t ? t : 'sha512');
   hash.update(s);
   return hash.digest('hex');
}

function md5(s){
   const hash = crypto.createHash('md5');
   hash.update(s);
   return hash.digest('hex');
}

//md5编码
exports.md5 = md5;

//hash256编码
exports.hash256 = hash256;

//hash
exports.hash = _hash;
