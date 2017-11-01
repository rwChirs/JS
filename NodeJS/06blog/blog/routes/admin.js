
let express = require('express');

let post = require('../models/post');

let user = require('../models/user');

// 后台主路由
let admin = express.Router();

// 后台首页
// 这里拼上主路由后再拼/
admin.get('/', (req, res) => { //登陆后来到这里
    console.log(req.session);
    res.render('admin/index', {});
});


admin.get('/settings', (req, res) => {
    // 通过 session 获得用户的id
    let uid = req.session.loginfo.id;

    user.find(uid, (err, rows) => {
        console.log(err);
        if(!err) {
            res.render('admin/settings', {user: rows[0]});
        }
    });
    
});

admin.post('/update', (req, res) => {
    console.log(req.body);
    res.send('ok');

    let uid = req.session.loginfo.id;

    user.updata(uid, req.body, (err) => {
        if(!err) {
            res.json({
                code: 10000,
                msg: '更新成功！'
            });
        }
    });

});



// 写文章（添加博客页面）
admin.get('/add', (req, res) => {
    res.render('admin/add', {});
});


admin.get('/logout', (req, res) => {
    req.session.loginfo = null;

    res.redirect('/login');
})

// 添加博客
admin.post('/add', (req, res) => {
    console.log(req.body);

    // 当前登录用户即为作者
    // 通过 session 可以读取到作者的id
    // 然后将id记录在博客文章中
    req.body.uid = req.session.loginfo.id;

    post.insert(req.body, (err) => {
        if(!err){
            res.json({
                code: 10000,
                msg: '添加成功！'
            });
        }
    })

    // res.send('ok');
    
});

// 文章列表
admin.get('/list', (req, res) => {

    post.findAll( (err, rows) => {
        if(err) {
            return res.send('数据库错误');
        }

        res.render('admin/list', {posts: rows});
    });

});


admin.get('/delete', (req, res) => {
    // 通过 query 来接收 get的参数
    console.log(req.query);

    post.delete(req.query.id, (err) => {
        if(!err) {
            res.json({
                code: 10000,
                msg: '删除成功！'
            });
        }
    });

})





admin.get('/repass', (req, res) => {
    res.render('admin/repass', {});
});



module.exports = admin; 