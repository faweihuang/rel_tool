/*用户表*/
DROP TABLE IF EXISTS `rel_users`;
CREATE TABLE `rel_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL DEFAULT '1' COMMENT '角色: 0为超级用户',
  `user_name` char(64) NOT NULL DEFAULT '' COMMENT '用户名',
  `password`  char(130) NOT NULL DEFAULT '' COMMENT '密码',
  `real_name` char(18) NOT NULL DEFAULT '' COMMENT '真名',
  `avatar`    char(250) NOT NULL DEFAULT '' COMMENT '用户头像',
  `telephone` char(18) NOT NULL DEFAULT '' COMMENT '电话',
  `last_time` int NOT NULL DEFAULT '0' COMMENT '最后登陆时间',
  `create_date` int NOT NULL DEFAULT '0' COMMENT '创建时间',
  `note` varchar(500) NOT NULL DEFAULT '' COMMENT '备注',
  `status` tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
  `is_delete` tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT "用户表";

/*默认用户名: reladmin  密码: rel@123258*/
insert into rel_users(`role_id`,`user_name`,`password`,`real_name`,`avatar`,`create_date`,`status`)values(0,'reladmin','af3ba910fa4e241cd6ead8a847f8ae9229c399d1b4776fb1b1a2a61798b4d6f87ccc148e59abec55e49174a61db97d114bae60ef76facf92314352f54e338289','管理员','/static/images/admin.png',unix_timestamp(now()),1);


/*角色表*/
DROP TABLE IF EXISTS `rel_role`;
CREATE TABLE `rel_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` char(64) NOT NULL DEFAULT '' COMMENT '角色名',
  `grants` text NOT NULL COMMENT '权限内容, api表ID数组string',
  `create_date` int NOT NULL DEFAULT '0' COMMENT '创建时间',
  `status` tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
  `is_delete` tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT "用户表";

/*项目表*/
DROP TABLE IF EXISTS `rel_project`;
CREATE TABLE `rel_project`(
   `id`                           int NOT NULL AUTO_INCREMENT,
   `project_name`  varchar(64) NOT NULL DEFAULT '' COMMENT '项目名称',
   `exclude`               text NOT NULL COMMENT '排除同步文件',
   `create_date`      int NOT NULL DEFAULT '0' COMMENT '创建时间',
   `status`                  tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `note`                     varchar(600) NOT NULL DEFAULT '' COMMENT '备注',
   `is_delete`            tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "项目表";


/*环境表*/
DROP TABLE IF EXISTS `rel_milieu`;
CREATE TABLE `rel_milieu`(
   `id`                          int NOT NULL AUTO_INCREMENT,
   `role_id`               int NOT NULL DEFAULT '0' COMMENT '归属角色',
   `milieu_name`  varchar(64) NOT NULL DEFAULT '' COMMENT '环境名称',
   `val`                        varchar(64) NOT NULL DEFAULT '' COMMENT '环境值(或别名)',
   `create_date`     int NOT NULL DEFAULT '0' COMMENT '创建时间',
   `status`                 tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `is_delete`          tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "发布环境表";

insert into `rel_milieu`(`role_id`,`milieu_name`,`val`,`create_date`,`status`)values
(0,'测试环境','test',unix_timestamp(now()),1),
(0,'预发布','release',unix_timestamp(now()),1),
(0,'生产环境','master',unix_timestamp(now()),1);

/*发布节点表*/
DROP TABLE IF EXISTS `rel_nodes`;
CREATE TABLE `rel_nodes`(
   `id` int NOT NULL AUTO_INCREMENT COMMENT "唯一标志ID",
   `milieu_id` int NOT NULL DEFAULT '0' COMMENT "环境ID",
   `project_id` int NOT NULL DEFAULT '0' COMMENT "项目ID",
   `rsync_user` varchar(32) NOT NULL DEFAULT '' COMMENT '同步帐号',
   `rsync_passwd` varchar(64) NOT NULL DEFAULT '' COMMENT '同步密码',
   `rsync_name` varchar(64) NOT NULL DEFAULT '' COMMENT '同步项',
   `nodes`         text NOT NULL COMMENT '服务器节点列表',
   `shell_path`      varchar(300) NOT NULL DEFAULT '' COMMENT '发布前需要执行的脚本',
   `is_sync`      tinyint NOT NULL DEFAULT '1' COMMENT '是否执行同步: 0 不同步， 1 同步',
   `create_date` int NOT NULL DEFAULT '0' COMMENT "创建时间",
   `status`        tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `is_delete`     tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=MyISAM DEFAULT CHARSET=UTF8 COMMENT "发布节点表";

/* 对应项目数据库配置表 */
DROP TABLE IF EXISTS `rel_dbconfig`;
CREATE TABLE `rel_dbconfig`(
   `id`            int NOT NULL AUTO_INCREMENT,
   `milieu_id`     int NOT NULL DEFAULT '0' COMMENT '归属环境',
   `project_id`    int NOT NULL DEFAULT '0' COMMENT '归属项目',
   `milieu_name`   varchar(64) NOT NULL DEFAULT '' COMMENT '环境名称',
   `kind`          tinyint NOT NULL DEFAULT '0' COMMENT "数据库类型, 0 默认(MySQL), 1 Mssql, 2 sqlite",
   `host`          char(18) NOT NULL COMMENT '链接地址',
   `port`          int NOT NULL DEFAULT '3306' COMMENT '端口号',
   `user`          char(64) NOT NULL COMMENT '用户',
   `passwd`        char(64) NOT NULL COMMENT '密码',
   `dbname`        char(64) NOT NULL COMMENT '库名',
   `create_date`   int NOT NULL DEFAULT '0' COMMENT '创建时间',
   `status`        tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `is_delete`     tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "数据库配置表";


/*任务列表*/
DROP TABLE IF EXISTS `rel_tasks`;
CREATE TABLE `rel_tasks`(
    `id`            int NOT NULL AUTO_INCREMENT,
    `uid`           int NOT NULL DEFAULT '0' COMMENT "发布者ID",
    `kind`          int NOT NULL DEFAULT '0' COMMENT "任务类型: 0  未知, 1 执行sql, 2 重载nginx配置",
    `title`         char(32) NOT NULL DEFAULT '' COMMENT "任务标题",
    `val`           text NOT NULL COMMENT '内容',
    `ip`            char(18) NOT NULL DEFAULT '' COMMENT "创建者ip地址",
    `create_date`   int NOT NULL DEFAULT '0' COMMENT "创建时间",
    `note`            varchar(600) NOT NULL DEFAULT '' COMMENT '备注',
    `status`        tinyint NOT NULL DEFAULT '0' COMMENT "状态",
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "带执行的任务";


/*任务执行结果列表*/
DROP TABLE IF EXISTS `rel_running`;
CREATE TABLE `rel_running`(
    `id`            int NOT NULL AUTO_INCREMENT,
    `task_id` int NOT NULL DEFAULT '0' COMMENT "任务ID",
    `uid`           int NOT NULL DEFAULT '0' COMMENT "发布者ID",
    `kind`          int NOT NULL DEFAULT '0' COMMENT "任务类型",
    `milieu`        char(32) NOT NULL DEFAULT '' COMMENT "任务环境",
    `project`       varchar(128) NOT NULL DEFAULT '' COMMENT "项目",
    `task_key`      varchar(64)  NOT NULL DEFAULT '' COMMENT "任务密钥",
    `task_data`     MediumText NOT NULL COMMENT "任务所需数据",
    `result`        MediumText NOT NULL COMMENT "执行反馈",
    `ip`            char(18) NOT NULL DEFAULT '' COMMENT "执行者地址",
    `create_date`   int NOT NULL DEFAULT '0' COMMENT "创建时间",
    `runtime`       int NOT NULL DEFAULT '0' COMMENT "运行时间",
    `status`        tinyint NOT NULL DEFAULT '0' COMMENT "状态: 0 执行中, 1 已完成",
    UNIQUE KEY `task_key` (`task_key`),
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "任务队列表";


/*系统设置*/
DROP TABLE IF EXISTS `rel_setting`;
CREATE TABLE `rel_setting`(
   `id`            int NOT NULL AUTO_INCREMENT,
   `key`           char(32) NOT NULL DEFAULT '' COMMENT '设置键名',
   `val`           varchar(5000) NOT NULL DEFAULT '' COMMENT '设置值',
   `create_date`   int NOT NULL DEFAULT '0' COMMENT '创建时间',
   `status`        tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `is_delete`     tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "系统设置";


/*日志记录表*/
DROP TABLE IF EXISTS `rel_logs`;
CREATE TABLE `rel_logs`(
   `id`            int NOT NULL AUTO_INCREMENT,
   `uid`           int NOT NULL DEFAULT '0' COMMENT '用户id',
   `kind`          tinyint NOT NULL DEFAULT '0' COMMENT '日志类型',
   `action`        varchar(64) NOT NULL DEFAULT '' COMMENT '操作说明',
   `val`           MEDIUMTEXT NOT NULL COMMENT '日志内容',
   `ip`            char(18) NOT NULL DEFAULT '' COMMENT 'ip地址',
   `create_date`   int NOT NULL DEFAULT '0' COMMENT '创建时间',
   `status`        tinyint NOT NULL DEFAULT '0' COMMENT '状态: 0 禁用, 1 正常',
   `is_delete`     tinyint NOT NULL DEFAULT '0' COMMENT '是否删除: 0 正常， 1 已删除',
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8 COMMENT "日志记录表";

