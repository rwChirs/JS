

let http = require('http');

let url = require('url');

let fs = require('fs');

let template = require('art-template');

template.defaults.root = './';
template.defaults.extname = '.html';

let app = http.createServer();

app.listen(3000);

app.on('request', (req, res) => {

      // 路由不完全等于地址，地址后面可以传参数
      
      // 路由是可以有参数的，但是不是？后面携带的

      //一个完整地址   http://主机:端口/路径？参数

      // 只要路径pathname
      let {pathname} = url.parse(req.url);
      // console.log(pathname);
      // 需要获取真实路径
      let realPath = '.' + pathname;

      res.render = function(tpl, data) {
            let html = template(tpl, data);

            // console.log(html);

            res.write(html);
            res.end();
      }

      switch(pathname) {
            case '/':
                  let data = {
                        title: '许愿墙呀',
                        info: '学习使用模板引擎'
                  }

                  res.render('index', data);

                  
            break;

            default:

                  fs.readFile(realPath, (err, data) => {
                        if(!err){
                              res.write(data);
                              res.end();
                        }
                  })



      }

})