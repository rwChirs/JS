// nodejs的静态页面

let http = require('http');

let fs = require('fs');

let path = require('path');

let mime = require('mime');

let app = http.createServer();

app.listen(3000, () => {
      console.log('服务器已启动')
});

app.on('request', (req, res) => { 
      // 根据请求做出相应的响应
      let realPath = req.url == '/' ? 'index.html' : path.join('.', req.url);
      let realPath = req.url == '/' ? 'doc.html' : path.join('.', req.url);


      function render(path) {

            // 读取 index.html 的内容，然后将读取的内容响应给浏览器
            fs.readFile(path, (err, data) => { //data形参数据
                  if(err){
                        res.writeHeader('404');
                        res.write('<h1>404 Not Found!</h1>');
                        return res.end();
                  }
                        res.write(data); 

                        res.end();
            });

      } else {
 
            fs.readFile(realPath, (err, data) => {
                  if(!err){   
                        console.log(mime.getType(realPath)); //读取不同路径对应资源的类型
                        res.writeHeader(200, {  
                              'Content-Type':mime.getType(realPath)
                        });

                        res.write(data);
                        res.end();
                  }
                  
            });

      }



})
