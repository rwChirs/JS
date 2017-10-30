
let http = require('http');

let url = require('url');

let mime = require('mime');

let path = require('path');

let fs = require('fs');

let template = require('art-template');

template.defaults.root = './views';
template.defaults.extname = '.html';

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