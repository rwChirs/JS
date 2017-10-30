
let http = require('http');


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
// 插入操作 第一种方法
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

// 其实是对象格式处理
/*
connection.query('select * from lists where ?', [{username: username}, {no: no}], (err, rows) => {
    console.log(rows);
})
*/

// 如果数据是对象 会将对象转成 key=val,key1=val1...
// 此语句没有结果输出
let s = connection.query('select * from lists where ?', {username: username, no: no}, (err, rows) => {
    // console.log(rows);
})  
// 通过 query方法的返回值，可以获得query 真正的sql语句
// console.log(s.sql);


// insert into lists set key=val,key1=val1...
// 插入操作 第二种方法



let app = http.createServer();

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器端口3000');
    }
})

app.on('request', (req, res) => {
    res.end('study mysql');
})