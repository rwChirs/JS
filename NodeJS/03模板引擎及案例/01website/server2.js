// 路径作参考

let http = require('http');

let url = require('url');

let fs = require('fs');

let path = require('path');

let template = require('art-template');

// 配置模板引擎
template.defaults.root = __dirname;
template.defaults.extname = '.html';

let server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
      // 路由 是地址 与 程序 间的映射关系
      
      // 路由是由开发人员设计的（开发人员想怎么写怎么写）
      
      // 通过 req.url 可以获得地址，（不包含参数）
      // console.log(url.parse(req.url, true));

      // 对象的解构赋值
      let {pathname} = url.parse(req.url);
      // console.log(pathname);

      // 拼接点（这个路径不带参数）
      let realPath = path.join('./', pathname);

      // res其实就是一个对象，我们动态增加一些方法
      res.render = function(tpl){

            // 当引入 art-template 模板引擎后
            // 会得到一个函数叫 template
            
            // 调用这个函数
            // template(模板路径，数据);
            
            // 默认去根路径下找（在window下，盘符即根路径），既然是默认，就可以更改
            // （Linux下   / 表示根路径，就一个大盘，没有CDE）
            let html = template('index', data);
            // console.log(html);
            
            res.write(html);
            res.end();

            // fs.readFile(tpl + '.html', (err, data) => {
            //       res.write(data);
            //       res.end();
            // });

      }


      switch(pathname){
            case '/':
            // 响应 index.html
            console.log('来到了 a路由');

            var data = {title: '首页11'};
            res.render('index', data);
            
            break;

            case '/doc':
            // 响应 doc.html
            console.log('来到了 b路由');
            res.render('doc');

            break;

            case '/blog':
            // 响应 blog.html
            console.log('来到了 c路由');
            res.render('blog');
            break;

            default :
                  // console.log(realPath);
                  // 这个不处理数据，可以直接返回，如图片
                  fs.readFile(realPath, (err, data) => {
                        if(!err) {
                          res.write(data);
                          res.end();    
                        }
                        
                  })
      }


})


