// nodejs的静态页面

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
      
      // 怎么知道用户请求的是什么
      // 可以根据用户请求的地址来的判断用户所需的内容

      
      // req.url 就是用户的请求地址
      // console.log(req.url); //打印/，现在访问的根

      // if(req.url == 'index.html'){
            // 如果地址等于一个html，就给它响应一个页面
      // } else if(req.url == 'logo.png') {  
            // 如果地址等于一个png，就给它响应一个图片   
      // }
      
      
      if(req.url == '/') {
            // 将网页首页响应
            res.writeHeader(200, {
                  'Content-Type':'text/html; charset=UTF-8'
            })


            // 读取 index.html 的内容，然后将读取的内容响应给浏览器
            fs.readFile('./index.html', 'UTF-8', (err, data) => { //data形参数据
                  if(!err){
                        // console.log(data); //能够读出整个html文档
                        res.write(data); 

                        // 此时运行：浏览器已经接收到html，但是还在加载请求，
                        // 因为还有css，浏览器拿到html就会逐行解析，
                        // 到link的时候有href属性，而这个属性可以发送请求，也就是说浏览器再次发起新请求了
                        // 而这个请求如果是根（/），就访问html，而这个请求已经不是根了，
                        // 也就意味着除了根以外的请求就没有处理，服务器并无响应，浏览器会一直等待直到超时
                        // 所以除了判断根，还需要判断其他的，不管是什么，都可以转换成一个路径，
                        // 只需要按照路径去读即可，通过fs.readFile

                        res.end();
                  }
            });


      } else {
            // 老方法:// let realPath = '.' + req.url;
            let realPath = path.join('./', req.url); //解决路径问题，改成./ （拼接路径）
            // console.log(realPath); //真实路径
            
            // 不同的资源要响应不同的头信息,能读取,但是还要能响应
            // Content-Type: image/gif
            // Content-Type: text/css
            // Content-Type: text/javascript
            // Content-Type:应该是个变量才对



            fs.readFile(realPath, (err, data) => {
                  if(!err){
                        // 通过第三方模块 mime 可以获得不同类型资源的 mime
                        
                        console.log(mime.getType(realPath)); //读取不同路径对应资源的类型
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
