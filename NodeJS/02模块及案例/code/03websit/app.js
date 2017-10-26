

let http = require('http');

let fs = require('fs');

let path = require('path');

let mime = require('mime');

let server = http.createServer();

server.listen(3000, () => {
      console.log('服务器已启动')
});

server.on('request', (req, res) => {

      // 根据用户的不同请求，返回不同的内容
      
      // 可以根据用户请求的地址来的判断用户所需的内容
      
      // req.url 就是用户的请求地址
      // console.log(req.url);
      // if(req.url == 'index.html'){
      // } else if(req.url == 'logo.png') {  
      // }
      
      if(req.url == '/') {
            // 将网页首页响应
            res.writeHeader(200, {
                  'Content-Type':'text/html; charset=UTF-8'
            })


            // 读取 index.html 的内容，然后将读取的内容响应给浏览器
            fs.readFile('./index.html', 'UTF-8', (err, data) => {
                  if(!err){
                        // console.log(data);
                        res.write('data');

                        res.end();
                  }
            });


      } else {
            // 老方法:// let realPath = '.' + req.url;
            let realPath = path.join('./', req.url);
            // console.log(realPath);
            
            // Content-Type: image/gif
            // Content-Type: text/css
            // Content-Type: text/javascript



            fs.readFile(realPath, (err, data) => {
                  if(!err){
                        // 通过第三方模块 mime 可以获得不同类型资源的 mine
                        
                        // console.log(mime.getType(realPath));
                        // console.log(mime);

                        res.writeHeader(200, {
                              'Content-Type':mime.getType(realPath)
                        });

                        res.write(data);

                        res.end();


                  }
            });
      }

})
