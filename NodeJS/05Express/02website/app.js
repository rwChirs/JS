
// 引入 express 框架
let express = require('express');

// bodyParser即中间件
let bodyParser = require('body-parser')

// 创建服务器实例
let app = express();

// 监听端口
app.listen(3000);

// 设置模板引擎
app.set('view engine', 'xtpl');
// 设置模板目录
app.set('views', './views');
// 设置静态资源目录
app.use(express.static('public'));

// 使用中间件来解析 post的数据
// urlencoded 解析 application/x-www-form-urlencoded
// 中间件会在 req上添加一个 body属性，即req.body
app.use(bodyParser.urlencoded({ extended: false }));


// 路由
app.get('/', (req, res) => {

    // 请求头
    // console.log(req.headers);
    
    // 在express中 直接使用req.query来获得地址参数
    // console.log(req.url);
    console.log(req.query); //之所以能用req.query，是express进行的封装，中间件get内部处理

    res.render('index', {});
});
// 路由
app.get('/doc', (req, res) => {
    res.render('doc', {});
});
// 路由
app.get('/blog', (req, res) => {
    res.render('blog', {});
});

// 测试路由
app.get('/test', (req, res) => {
    res.render('test', {});
})


// 路由
app.post('/', (req, res) => {

    // 如果要解析 post的参数
    // 需要使用一个中间件 名字叫body-parser

    // body-parser是一个第三方模块
    console.log(req.body);


    res.send('post方式');

})





















