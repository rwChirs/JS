
let http = require('http');

let url = require('url');

let mime = require('mime');

let path = require('path');

let fs = require('fs');

let template = require('art-template');

template.defaults.root = './views';
template.defaults.extname = '.html';

// 使用第三方模块来操作mysql数据库
let mysql = require('mysql');
// 通过mysql提供的方法 实现对mysql数据库的操作
// 方法如下：
// a)连接数据库
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '545658',
    database : 'wish'
});
// console.log(connection);
// b) 执行sql语句
// select * from lists;
// 查询操作
connection.query('select * from lists', (err, rows) => {
    if(!err){
        // console.log(rows);
    }
});

// insert into (id, username, content, no, datetime) value(null, 'web','嘿嘿嘿嘿嘿嘿', 1231231,'2017-10-01 12:36:59')
// 插入操作
// connection.query('insert into lists (id, username, content, no, datetime) value(null, "web","嘿嘿嘿嘿嘿嘿", 1231231,"2017-10-01 12:36:59")');

// 查询操作：用户名为 itcast的用户
// select * from lists where username = 'itcase';


let username = 'itcast';//如果这样写就涉及字符串拼接
let no = 5462132;
/*
connection.query("select * from lists where username = 'itcase'");
*/
// 为了避免字符串的拼接，mysql模块 进行了封装处理
// 可以使用 ？ 充当一个占位符 ，表示此处将来会替换一个变量
connection.query("select * from lists where username = ? and no = ?", [username, no], (err, rows) => {
    // console.log(rows);
});

connection.query('select * from lists where ?', [{username: username}, {no: no}], (err, rows) => {
    console.log(rows);
})
    


let app = http.createServer();

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器端口3000');
    }
})

app.on('request', (req, res) => {
    // 设计路由

    // 设置地址对应路由
    let {pathname} = url.parse(req.url, true);

    // 在res上追加方法
    res.render = function(tpl, data){
        let html = template(tpl, data);

        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        })

        res.end(html);
    }

    // 判断地址pathname与路由匹配的时候执行的逻辑
    switch(pathname) {

        case '/':
        case '/index':
            res.render('index', {});

        break;
        
        default:
            // 记得换html中，去掉点改成绝对路径
            // console.log(req.url);
            // console.log(pathname);

            let realPath = path.join('./public', pathname);
            fs.readFile(realPath, (err, data) => {
                if(!err) {

                    res.writeHeader(200, {
                        'Content-Type': mime.getType(realPath)
                    })

                    res.end(data);
                }
            });

            


    }
})