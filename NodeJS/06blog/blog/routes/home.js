
let express = require('express');

// 处理用户数据
let user = require('../models/user');

// 前台主路由
let home = express.Router();

home.get('/', (req, res) => {
    res.render('home/index', {});   
});

// 文章页
home.get('/article', (req, res) => {
    res.render('home/article', {});   
});

// 注册页
home.get('/register', (req, res) => {
    res.render('home/register', {});   
});

// 登录页
home.get('/login', (req, res) => {
    res.render('home/login', {});   
});

// 注册用户(虽然是一个地址，但是请求方式是不一样的，也会执行不同的逻辑)
home.post('/register', (req, res) => {
    // res.send('111');//测试1：前后端连调（表明请求和响应是空的）//不能直接给数字

    // 测试2：
    console.log(req.body);
    // res.send('ok');

    // 服务端接收数据（表单要有name属性）
    // insert into users () values();要交给数据库处理（封装了）
    user.insert(req.body, (err) => {
        if(!err) {
            // res.send('ok');
            res.json({ //响应结果
                code: 10000, //自定义的编码,让前端去比对
                msg: '添加成功！'
            });

            return;
        }

        res.json({
            code: 10001,
            msg: '添加失败！'
        });

    });

});

// 用户登录
home.post('/login', (req, res) => {
    // 获得前端传递的参数
    console.log(req.body);

    user.auth(req.body.email, req.body.pass, (err, row) => {
        // console.log(err);
        if(!err) {
            // 存一个 session 
            // console.log(req.session);
            // req.session.abc = 'hhh';

            // console.log(row);
            req.session.loginfo = row; //接收
            // 如果 req.session.loginfo 不为false，则认为登录成功

            // 登陆成功，响应结果（json数据） json又会设置响应头，已经有内容输出过了
            res.json({
                code: 10000,
                msg: '登录成功！'
            });
        }
    });

    // res.send('ok');
});






home.get('/about', (req, res) => {
    res.render('home/about', {});   
});

home.get('/center', (req, res) => {
    res.render('home/center', {});   
});

home.get('/join', (req, res) => {
    res.render('home/join', {});   
});








module.exports = home; 