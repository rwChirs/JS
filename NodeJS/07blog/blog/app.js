

let express = require('express');

// 使用中间件
let bodyParser = require('body-parser');

let session = require('express-session');


let app = express();

app.listen(3000);

// 模板引擎
app.set('view engine', 'xtpl');
// 模板目录
app.set('views', './views');
// 静态资源
app.use( express.static('./public') );//所有的去public去找
app.use('/public', express.static('./public') );//public下还去public下去找


// 解析 post 数据的中间件
app.use(bodyParser.urlencoded({extended: false}));
// 使用的话，会在请求上加一个body属性，就是我们想要的数据


// 处理 session 的中间件
// 当使用了 session 中间后，就在 req 上添加了一个 session 属性
// 通过这个属性可以实现 设置和读取 session 目的
// 有点类似于 PHP 的 $_SESSION
app.use(session({
    secret: 'eef', //秘密，写任意都可以
    resave: false,
    saveUninitialized: false
    /*cookie: { 
        secure: true  //true，会走安全模式，但是要求支持https网站，比http安全
    }*/
}));
// 这个中间件在请求上加了一个 session

// 在nodejs中默认情况下 session 是放到内存当中的,
// 所以当服务器重启后,session 也会消失

// http 要求在请求头设置前不允许有响应主体
// 自己写的中间件，用来检测登录
app.use('/admin', (req, res, next) => { //必须是后台才能走的逻辑

    // console.log(req.url);

    if(!req.session.loginfo && req.url != '/login'){ //这里会设置响应头
        // 检测登录
        // return res.redirect('/login'); //若没有cookie，则跳转（express方法）
         //就不会重复去设置头了
    }

    next();
} )


// 可以通过路由来区分前台网站和后台网站
// 但是 前后台网站 又可以分成若干子路由

// 如果才能将主路由和子路由联系起来？

// 可以使用 express.Router() 来创建主路由,主路由可以认为是一个中间件（路由级别的中间件）
// 主路由下再创建 子路由

// 前后台主路由分装出去了,所以要引用回来
let admin = require('./routes/admin');
let home = require('./routes/home');


// 访问/admin才能访问到其后的子路由
app.use('/admin', admin);

app.use('/', home);












