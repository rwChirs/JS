

let express = require('express');

let app = express();

app.listen(3000);

// 告诉express想要使用哪个模板引擎
app.set('view engine', 'xtpl');
// 放在哪里了
app.set('views', './views');


app.use(express.static('public'));


// 在express中， 设计了中间件这个概念,原生中没有
// 所谓中间件就是指 在请求或响应的中间阶段
// 对请求和响应作出处理的一系列逻辑

// 通过 use 方法来实现这一概念
// use 方法 可以支持 3 个参数
app.use( (req, res, next) => {
    req.zyc = '玉川';
    res.abc = 'itcast';

    next();
} );


// 中间件的本质就是一个函数，此函数可以接收到 请求和响应 
// 并且在此函数内部处理对 请求和响应的逻辑


// 中间件的书写方式(常见的写法)
/*
function static(){
    return function(){}
}
//app.use(static);
app.use(static());
*/

// 关于next
app.use(function (req, res, next) {

    // next 将请求和响应 传递给下一中间件
    // 如果不调用 next 那么下一个中间件会 持续等待
    next(); 
})


// 关于顺序
app.use( (req, res, next) => {
    // console.log(req.zyc);
    // console.log(res.abc);

    next();
} );


// 中间件支持路由
app.use('/add', (req, res, next) => {
    req.demo = '测试';
    req.text = '测试ba';    

    next();
})

// 所有路由
app.use( () => {} );


app.get('/add', (req, res) => {
    console.log(req.demo);
    console.log(req.test);
    res.render('index', {});
});























