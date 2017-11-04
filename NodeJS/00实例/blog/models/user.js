// 专门用来操作用户的数据(数据库)

let db = require('./db');

// 插入用户
exports.insert = function(data, cb) { //数据 和 成功后执行的回调参数
    let query = 'insert into users set ?';

    // 密文处理
    data.pass = db.md5(data.pass);//重新处理赋值
    // 执行 sql 语句
    db.query(query, data, (err) => { 
        if(err){ //如果失败，其信息交给cb
            return cb(err);
        }

        cb(null);
    });

}


// 查找(验证登录)
exports.auth = function(email, password, cb) {

    // 查询 sql
    let query = 'select * from users where email = ?';

    // 根据邮箱名称查询数据库中记录的密码
    db.query(query, email, (err, rows) => {
        if(err) {
            return cb(err);
        }

        // 数据中的密码与用户提交上的密码如果一致
        // 则认证通过（即登录成功）
        // 根据用户输入的密码进行检测判断
        if( rows[0].pass == db.md5(password) ) {
            return cb(null, rows[0]);
        }

        cb({msg: '用户名或密码错误！'});
    })
}

// 查询个人资料
exports.find = (id, cb) => {
    
    let query = 'select * from users where id = ?';

    db.query(query, id, (err, rows) => {
        if(err) {
            return cb(err);
        }

        cb(null, rows);
    })
    
}


exports.updata = function(id, data, cb) {

    let query = 'update users set ? where id = ?';
    // 执行 sql 语句
    db.query(query, [data, id], (err) => {
        if(err) {
            // 失败
            return cb(err);
        }
        // 成功
        cb(null);
    })
}




















