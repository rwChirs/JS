
// 2、得到一个对象，对象的下面就会有createConnection方法
var mysql = require('./mysql');
// console.log(mysql);

var db = mysql.createConnection({

});

// 4、db 是一个对象，db下应该有个query方法
// console.log(db);

// exports = db;
// 这样写是不对的，exports != module.exports
// 其实我们向外开放空间用的是module.exports
// 用exports = module.exports的话，相当于他们两个指向同一个空间
// 若让exports = {}，等于一个新的对象的时候，相当于又开辟了一个空间
// exports != module.exports他们就断开了，不相等了


// 可以写的两种方式
// 方式1
// exports.db = db;
// 方式2
module.exports = db;