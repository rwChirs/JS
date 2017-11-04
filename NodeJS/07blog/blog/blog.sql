/*
 Navicat Premium Data Transfer

 Source Server         : 我的MySQL
 Source Server Type    : MySQL
 Source Server Version : 50524
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50524
 File Encoding         : 65001

 Date: 04/11/2017 10:56:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brief` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `status` tinyint(4) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (2, 2, 'weui.js发布', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', 0, '2017-07-01 17:31:02');
INSERT INTO `posts` VALUES (3, 1, '中国第三届CSS开发者大会即将召开', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', 1, '2017-07-01 17:31:37');
INSERT INTO `posts` VALUES (4, 2, 'weui.js发布', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '<p>aaaaaaaaaaaaaaaaaaaaaaaa</p>\r\n', 0, '2017-07-01 17:32:08');
INSERT INTO `posts` VALUES (5, 1, '中国第三届CSS开发者大会即将召开', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '', 0, '2017-07-01 17:32:27');
INSERT INTO `posts` VALUES (6, 1, 'JS the Hardcore: 执行上下文(Execution Context)', '先看个例子: console.log(a) console.log(foo()) var a = \'hello world\' function foo() { console.log(\'foo\') } 估计大部分人早就对这种问题了如指掌了，输出结果也是脱口而出', '', 0, '2017-07-01 17:32:49');
INSERT INTO `posts` VALUES (7, 2, '中国第三届CSS开发者大会即将召开', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '', 1, '2017-07-01 17:33:05');
INSERT INTO `posts` VALUES (8, 1, 'JS the Hardcore: 执行上下文(Execution Context)', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '', 0, '2017-07-01 17:33:24');
INSERT INTO `posts` VALUES (9, 1, '中国第三届CSS开发者大会即将召开', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '', 0, '2017-07-01 17:34:21');
INSERT INTO `posts` VALUES (10, 2, 'weui.js发布', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '', 0, '2017-07-01 17:34:07');
INSERT INTO `posts` VALUES (11, 2, 'ffg3g', 'ewgewge', '<p>eeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>\r\n', NULL, NULL);
INSERT INTO `posts` VALUES (12, 1, 'fefqefwfqw', 'fqwfqwfqwfqwfqwfqwfqwfqwfw11111', '<p>111111111111111111111111111111111111111111111111666666666666666666666666666666666666666666666666</p>\r\n', NULL, NULL);
INSERT INTO `posts` VALUES (13, 1, '测试', '测试测试测试测试测试测试测试', '', NULL, NULL);
INSERT INTO `posts` VALUES (14, 1, '防腐漆发放群发器3', '3房改房去过刚刚网购去各位哥哥我d', '<p>为岗位更违规为岗位更违规11</p>\r\n', NULL, NULL);
INSERT INTO `posts` VALUES (15, 1, '11111111111', '111111111111111111111111111111', '<p>11111111111111111111111111111111111111111111111111111</p>\r\n', NULL, NULL);
INSERT INTO `posts` VALUES (16, 1, '焦强', '呆橘', '<p>萌柚</p>\r\n', NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pass` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `homepage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `alt` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '小明', 'e10adc3949ba59abbe56e057f20f883e', 'xiaoming@itcast.cn', '/public\\admin\\uploads\\avatar\\avatar-1509716449540.jpg', 0, '12312345678', '百度', 'http://www.itcast.cn', '一名1');
INSERT INTO `users` VALUES (2, '小米', 'e10adc3949ba59abbe56e057f20f883e', 'xiaomi@itcast.cn', NULL, 0, '12312345678', '小米', 'http://www.itcast.cn', '一名程序员');
INSERT INTO `users` VALUES (17, '123', '123', '111@111.com', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `users` VALUES (18, '小区', '123', 'xiaoqu@qq.com', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `users` VALUES (19, '小青', '123', 'xiaoqing@qq.cn', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `users` VALUES (20, '小刚', '202cb962ac59075b964b07152d234b70', 'xiaogang@qq.com', 'uploads\\avatar\\avatar-1498880853834.png', 0, '12312345678', '百度', 'http://www.itcast.cn', '一名程序员');

SET FOREIGN_KEY_CHECKS = 1;
