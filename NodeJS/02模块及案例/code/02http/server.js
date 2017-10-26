

// 通过系统模块创建http服务器
let http = require('http');

let url = require('url');

let queryString = require('querystring');

// 通过 createServer 可以创建服务器实例
let server = http.createServer();

// 通过 listen 监听一个端口
server.listen(3000, (err) => {

      if(!err){
      console.log('服务器已启动，监听 3000 端口');
      }
      
});

// 通过事件监听来处理请求和响应 request
// 通过 on 来实现事件的监听
server.on('request', (req, res) => {

      // 通过 req 来处理请求
      // 请求
      // 请求行、请求头、请求主体
      
      // 请求行 由请求方式 + 请求地址
      
      // 通过 req.method 可以获得请求方式
      // console.log('您的请求方式为：', req.method);

      // 通过 req.url 可以获得请求地址
      console.log('您的请求地址为：', req.url);

      // 通过 req.headers 可以获得请求头
      // console.log('您的请求头为：', req.headers);

      // 请求方式为 get 时，没有请求主体，参数放到地址上的
      // 如果get方式请求，可以通过解析地址来获得参数
      // Nodejs 提供了专门模块url（系统模块）来解析地址上的参数
      
      // let params = url.parse(req.url, true);
      // console.log(params);


      // 当请求方式为 post 时，才会有请求主体（请求主体主要是参数）
      // 当数据以 post 方式上传时，会触发一个事件 data 
      
      var formData = '';
      req.on('data', (chunk) => {
            // console.log(chunk);
            formData += chunk;
      });  

      // 当 post数据 传输完毕时 会触发另一个事件 end
      req.on('end', () => {
            // 得到的数据为字符串，使用不方便
            // 可以使用系统模块 querystring 来解析
            console.log(formData);

            let params = queryString.parse(formData);
            console.log(params);
      })
      



      // 请求头 键值对
      // 请求主体 get方式没有请求主体 post可以有请求主体



      /*
      // 通过 res 来处理响应
      
      // 响应 由状态行、响应头、响应主体构成
      // 通过 writeHead() 来设置状态行和响应头
      res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
      });

      // 通过 write 来设置响应主体，允许执行多次
      res.write('你好 nodejs 呀呼');
      */
      

      // 终止响应
      res.end();

})






















