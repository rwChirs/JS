
const http = require('http');

const template = require('art-template');

const server = http.createServer();

server.listen(3000);

template.defaults.extname = '.html';
template.defaults.root = './';

server.on('request', (req, res) => {

    // console.log(req.url);

    // res.render = function (tpl) {
    //     fs.readFile('./' + tpl + '.html', 'utf-8', (err, data) => {
    //         res.writeHeader(200, {
    //             'Content-Type': 'text/html; charset=utf-8'
    //         })
    //         // res.write(data);

    //         res.end(data);
    //     });
    // }

    // 模板路径可以写在绝对
    // 也可直接写模板名称
    // var html = template('模板路径', '数据');
    // E://
    // /
    
    res.render = function (tpl, data) {
        let html = template(tpl, data);

        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(html);
    }

    switch(req.url) {
        case '/list':
            res.render('list', {});
        break;

        case '/login':
            res.render('login', {});
        break;

        case '/register':
            res.render('register', {});
        break;
    }

})