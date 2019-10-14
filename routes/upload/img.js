/*
 * url: /upload/img
 * 上传图片
 */
const Fs    = require('fs');
const Path  = require('path');
const Func  = require(SYS_CONF.path + '/lib/func');
const Plus  = require(SYS_CONF.path + '/lib/plus');

//图片后缀列表
const Suffix = {
  'png':true,
  'jpg':true,
  'jpeg':true
};

async function up(ctx){
        let d = ctx.request.query;
        let ret = Plus.ret();

        try{
            // 上传单个文件
            const file = ctx.request.files.file; // 获取上传文件

            if(!file){
              ret.msg = '获取上传文件发生错误!';
              return ret;
            }

            let fix = file.name.split('.');

            if(fix.length < 2) {
               ret.msg = '未知文件后缀!';
               return ret;
            }

            fix = fix[fix.length - 1];

            //console.log("upload file: ", file.name, "  fix: " + fix);

            let file_name =  (new Date()).valueOf() + '.' + fix;

            // 创建可写流
            const upStream = Fs.createWriteStream(SYS_CONF.upload.path + Path.resolve('/' + file_name));

            // 创建可读流
            const reader = Fs.createReadStream(file.path);

            // 可读流通过管道写入可写流
            reader.pipe(upStream);

            ret.msg = '上传成功';
            ret.data = file_name;
            ret.status = 1;
        } catch(e) {
            ret.msg = '上传失败';
        }

        return ret;
};

module.exports = async (ctx, next) => {
    ctx.body = await up(ctx);
 };
