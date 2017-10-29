
let http = require('http');

let url = require('url');

let path = require('path');

let fs = require('fs');

// json也可以当做模块加载
let db = require('./database/students.json');
// console.log(db); //数组格式
// console.log(typeof db); //object ，而不是字符串

// 模板引擎引入
let template = require('art-template');
// 配置模板引擎（配置路径）
template.defaults.root = './views';
template.defaults.extname = '.html';

let app = http.createServer();

app.listen(3000, (err) => {
      if (!err) {
            console.log('服务器已经启动')
                  ;
      }
})

app.on('request', (req, res) => {
      // 获得路径
      let { pathname } = url.parse(req.url);
      // 处理成真实路径（当前下的public下的）
      let realPath = path.join('public', pathname);

      // 封装模板引擎
      res.render = function (tpl, data) {

            let html = template(tpl, data);
            /*
            res.write(html);
            res.end();
            */
            res.end(html);
      }

      switch (pathname) {
            case '/':
            case '/add':
                  // 传一个模板的名字add，数据看情况+
                  res.render('add', {});
                  break;

            case '/list':
                  res.render('list', { list: db });
                  break;

            case '/create':
                  // console.log('有请求来了');

                  // 解析参数，给一个叫query的对象
                  let { query } = url.parse(req.url, true);
                  // console.log(query);

                  db.push(query);

                  // console.log(JSON.stringify(db));

                  fs.writeFile('./database/students.json', JSON.stringify(db), (err) => {
                        if (!err) {
                              res.writeHead(302, {
                                    'Location': './list'
                              })
                        }
                        res.end();
                  })
                  break;

            default:
                  // console.log(pathname);// /css/main.css  并不是真实路径
                  // console.log(realPath);// public/css/main.css 真实路径

                  // 读取真实路径
                  fs.readFile(realPath, (err, data) => {
                        if (!err) {
                              res.end(data);
                        }
                  })


      }

})
