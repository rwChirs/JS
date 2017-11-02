// 将都要链接数据库的部分公共

let mysql = require('mysql');

let md5 = require('md5');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '545658',
    database: 'blog' 
});

db.md5 = md5; //给db对象添加md5属性 等 md5方法
// 开放出去，db上就会有md5


// 因为db是一个对象，不能直接去等exports
module.exports = db;


















