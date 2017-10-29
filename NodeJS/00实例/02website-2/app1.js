
let http = require('http');

let fs = require('fs');

// path模块实现拼接（将当前路径拼接到现有路径上）
let path = require('path');

let app = http.createServer();

app.listen(3000, (err) => {
  if(!err){
    console.log('服务器3000端口');
  }
});

// 根据请求做出响应的响应
app.on('request', (req, res) => {
  // 用户一般访问网站是不加/的，也就是要处理下默认的路径
  // console.log(req.url);// 先知道下用户的访问地址  /
  
  // 如果路径等于/的话，访问index，若不是的话，原样输出
  let realPath = req.url == '/' ? './index.html' : path.join('.', req.url);
//   console.log(realPath); // 里面是/开头的，不是想要的路径，需要拼接.变成相对路径(用path模块)


  if(req.url == '/') { //当路径为/时，返回首页面
    fs.readFile(realPath, 'utf-8', (err, data) => {

        if(err) {
            res.writeHeader('404');
            res.write('<h1>404 Not Found</h1>');

            return res.end();
        }

        res.end(data);
    })

  } else {
      fs.readFile(realPath, (err, data) => {
        if(err) {
            res.writeHeader('404');
            res.write('<h1>404 Not Found</h1>');

            return res.end();
        }
        res.end(data);
        
      })
  }





})