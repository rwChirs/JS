// Express框架的使用

// 相当于 require('http')
let express = require('express');

// 相当于 createServer()
let app = express();

// 1、模板引擎
// 设置模板目录为./views 
app.set('views','./views');
// 模板引擎 xtpl
// 模板后缀为 xtpl
// xtpl模块不需要手动引入
// express内部负责自动引入
app.set('view engine', 'xtpl');

// 监听端口
app.listen(3000);

// 2、
// express.static 专门处理静态资源
app.use( express.static('public') );




// Express 没有内置模板引擎功能
// 但是它可以非常方便的在支持其他模板引擎

// 客户端（浏览器）以get方式请求的时候，就会有请求地址
app.get('/', (req, res) => {
    // send是封装的,相当于 write+end
    // res.send('hello express get');
    res.render('add', {});
});

// 3、路由
// 和下面不冲突，这里是get方式请求的
app.get('/add', (req, res) => {
    res.render('add', {});
})

app.get('/list', (req, res) => {
    res.render('list', {});
})

// 以post方式
app.post('/add', (req, res) => {
    res.send('hello express post');
})






























