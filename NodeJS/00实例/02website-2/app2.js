
let http = require('http');

let fs = require('fs');

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
  let realPath = req.url == '/' ? './index.html' : req.url;
//   console.log(realPath); // 里面是/开头的，不是想要的路径，需要拼接.变成相对路径(用path模块)
  realPath = path.join('.', realPath);

  function render(Path) {
    fs.readFile(Path, (err, data) => {
      
      if(err) {
          res.writeHeader('404');
          res.write('<h1>404 Not Found</h1>');

          return res.end();
      }

      res.end(data);
    })
  }

/*
  if(req.url == '/') { //当路径为/时，返回首页面
    render(realPath);
  } else { 
    render(realPath);
  }
*/
  render(realPath);




})