
let http = require('http');

let url = require('url');

let mime = require('mime');

let path = require('path');

let fs = require('fs');

let template = require('art-template');

template.defaults.root = './views';
template.defaults.extname = '.html';
// 修改定界符：标准语法的界定符规则
template.defaults.rules[1].test = /##([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*##/;
// 后端在使用template时用##，解决前后端冲突

// 使用第三方模块来操作mysql数据库
let db = require('./config/db');
// console.log(db);
    


let app = http.createServer();

app.listen(3000, (err) => {
    if(!err) {
        console.log('服务器端口3000');
    }
})

app.on('request', (req, res) => {
    // 设计路由

    // 设置地址对应路由
    let {pathname, query} = url.parse(req.url, true);
    // console.log(url.parse(req.url, true));

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

            // 使用模板引擎渲染页面
            // 在刷新页面的时候，也就是加载模板的时候，要把数据取出 展示
            db.query('select * from lists', (err, rows) => {
                if(!err){
                    // rows 查询结果，为数组类型
                    res.render('index', {lists: rows});
                }
            })

            // res.render('index', {});
        break;

        case '/create':
            // console.log(req.url);
            // 得到参数后，插入数据库
            /*
            //测试
            var s = db.query('insert into lists set ?', query, (err, info) => {
                
            })
            console.log(s.sql);
            */

           

            query.no = Math.ceil( Math.random() * 100000);

            query.datetime = new Date();

            db.query('insert into lists set ?', query, (err, info) => {
                if(!err) {
                    
                    res.writeHeader('200', {
                        'Content-Type': 'application/json'
                    })

                    // res.end('添加成功！');
                    res.end( JSON.stringify( {
                        code: 10000, 
                        msg: '添加成功！',
                        result: query
                    }) );
                }
            })
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