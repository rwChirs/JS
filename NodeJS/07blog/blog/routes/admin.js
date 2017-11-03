
let express = require('express');

let post = require('../models/post');

let user = require('../models/user');

let multer  = require('multer');
// let upload = multer({ dest: 'public/admin/uploads/avatar' });//默认配置目录

// 通过 diskStorage 实现目录位置和文件名的自定义操作
var storage = multer.diskStorage({
    // 放到哪个目录下
    destination: function (req, file, cb) {
        cb(null, 'public/admin/uploads/avatar');
    },
    // 叫什么名字
    filename: function (req, file, cb) {
        // console.log(file);
        // 获取后缀，通过点截取
        let extname = file.originalname.slice(file.originalname.lastIndexOf('.'));
        // console.log(extname);

        cb(null, file.fieldname + '-' + Date.now() + extname);
    }
});
  
var upload = multer({ storage: storage });


// 后台主路由
let admin = express.Router();


// 后台首页
// 这里拼上主路由后再拼/
admin.get('/', (req, res) => { //登陆后来到这里
    console.log(req.session);
    res.render('admin/index', {});
});

// 个人资料页面
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

// 更新个人资料
admin.post('/update', (req, res) => {
    // 获得表单数据
    // console.log(req.body);
    // res.send('ok');

    // 获得用户id
    let uid = req.session.loginfo.id;
    // 根据用户id更新内容
    user.updata(uid, req.body, (err) => {
        if(!err) {// 更新成功
            res.json({
                code: 10000,
                msg: '更新成功！'
            });
        }
    });

});

// 退出登录
// 点退出时候发送的请求，名字叫做logout
admin.get('/logout', (req, res) => {
    // 清空登录信息
    req.session.loginfo = null;
    // 跳转至登录页
    res.redirect('/login');
});


// 头像上传(用中间件来处理 multer)
admin.post('/upfile', upload.single('avatar'), (req, res) => {
    // console.log('ddddd')
    // console.log(req.file);
    // res.send('ok');

    res.json({
        code: 10000,
        msg: '上传成功',
        path: req.file.path
        
    })
})


// 写文章（添加博客页面）添加操作
admin.get('/add', (req, res) => {
    res.render('admin/manage', {action: '/admin/add'});//把地址当成变量对待
});

// 写文章（编辑博客文章）编辑操作
admin.get('/edit', (req, res) => {
    // req.query 获得 get 的参数，然后根据参数id 获得文章
    // console.log(req.query);

    // 查询操作
    post.find(req.query.id, (err, rows) => {
        // console.log(err);//测试数据错误
        console.log(rows[0]); //看看查询到的数据
        if(!err) {
            res.render('admin/manage', {
                post: rows[0],//属性名是post
                action: '/admin/modify'
            });
        }
    });

});

// 文章列表
admin.get('/list', (req, res) => {
    // 查询博客列表
    post.findAll( (err, rows) => {
        if(err) {
            return res.send('数据库错误');
        }
        // 查询成功
        res.render('admin/list', {posts: rows});
    });

});

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


// 删除博客
admin.get('/delete', (req, res) => {
    // 通过 query 来接收 get的参数
    console.log(req.query);

    // 根据博客id删除
    post.delete(req.query.id, (err) => {
        if(!err) {// 删除成功
            res.json({
                code: 10000,
                msg: '删除成功！'
            });
        }
    });

});


// 编辑博客
admin.post('/modify', (req, res) => {
    // req.body包含id，id作为主键不能被修改，它是对象，可以把对象属性删除
    console.log(req.body);

    let id = req.body.id;

    delete req.body.id;//在删除之前已经赋给另一个变量值了，这样body就没有id了

    post.modify(id, req.body, (err) => {
        if(!err) {
            res.json({
                code: 10000,
                msg: '修改成功！'
            })
        }
    });

    // res.send('ok');

})






admin.get('/repass', (req, res) => {
    res.render('admin/repass', {});
});



module.exports = admin; 