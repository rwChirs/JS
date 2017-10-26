

// http 是一个系统模块,通过 http模块可以创建一个http服务器
// (类似于 Apache)
// 
// 通过一系列的方法来创建
// 例如方法 createServer


let http = require('http');

let url = require()


// 通过 createServer 得到一个服务器实例
let server = http.createServer();

// 通过 服务器实例 来处理请求和响应

// get/post + url
// 
// get + localhost:3000
// 端口区分服务的使用(node习惯用3000做端口)

// 通过服务器实例的 listen方法 来实现端口的监听

server.listen(3000);

// 通过服务器实例的 request 事件来处理客户端(浏览器)的请求
// 并根据情况作出 响应
// 通过 on方法 来实现 事件的监听

server.on('request', (req, res) => { //用res代表响应
      console.log('有人来访问了...');
      // console.log(req);
      // console.log(req.headers);
      // 
      // console.log(req.url);
      console.log(url.parse(req.url, true));

      // 在回调函数当中可以设置两个参数，分别对应请求和响应
      // 第一个表示 请求相关，习惯上使用req
      // 第二个表示 响应相关，习惯上使用res
      res.writeHead('200', {
            'Content-Type':'text/html; charset = UTF-8';
      });

      res.write('hello browser!'); //write类似于php中的echo
      res.write('哈哈哈');

      // 响应结束
      res.end();
})

// 每当修改了nodejs 代码后，需要重新启动





























