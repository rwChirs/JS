
let mysql = require('mysql');

// exports模块向外去公开一些东西，把db公开出去
// exports添加一个属性，db属性是一个对象,也就是把mysql返回的结果给了db
module.exports = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '545658',
    database : 'wish'
});

