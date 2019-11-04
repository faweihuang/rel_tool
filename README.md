# 项目代码发布工具
##### 简介
使用rsync分发同步代码到节点服务器

##### 功能

1. 代码通过rsync同步分发到测试或生产服务器

2. 根据项目环境配置,执行数据库操作

3. 可自定义操作权限，规范测试，开发人员的操作

4. 操作日志记录

##### 代码发布过程
1. 前端通过websocket向服务端发出发布请求
2. 后端认证通过后执行预先配置好的shell脚本执行代码同步
3. 将发布脚本返回的信息记录同时反馈到前端

##### 数据库执行过程
1. 前端通过websocket向服务端发出执行SQL请求
2. 后端认证通过后根据提交的环境与项目信息找到对应数据库配置信息
3. 执行指定的SQL内容
4. 将SQL执行返回的信息记录同时反馈到前端

##### 操作系统支持
linux  
(不支持windows)

##### 服务端环境依赖
nodejs、rsync、mysql

##### 线上应用节点服务器环境依赖
rsync

##### 配置文件
config.json (参考默认配置 config_default.json,  复制一份出来)
配置项目:

属性名  |  值  |  作用
  ------------- | ------------- | -------------
  http | object | web服务绑定地址与端口信息
  is_https | string | 是否启用https
  ws | object | websocket配置信息
  db | object | 数据库配置信息
  code_path | string | 项目代码目录信息(包括各节点项目代码所在目录)

##### 默认超级帐号
用户名: reladmin  
密码: rel@123258

##### 安装
1. 运行安装脚本 `./install.sh`
2. 复制config_default.json 并重命名为 config.json
3. 编辑config.json配置数据库链接信息
4. 导入数据表结构文件 `tables.sql`

##### 开启
`./start.sh`

##### 停止
`./stop.sh`

## Contact to
微信  huangfwei  扫码加群一起交流  
Mail:  flyobj@163.com   
![系统模块](wx.jpg)

Copyright by huangfwei
