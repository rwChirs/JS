// 目录和路径并不是一一对应的，并不是永远都一样


let http = require('http');

let url = require('url');

let fs = require('fs');

let app = http.createServer();

app.listen(3000);

app.on('request', (req, res) => {

    console.log(req.url);

    console.log(url.parse(req.url, true));// 加true可以使query从字符串变成对象格式

    if(req.url == '/a') {

        fs.readFile('./index.html', (err, data) => {
            res.end(data);
        })

        // res.end('hello nodejs!');
    } else {
        console.log(req.url);
        //  /css/index.css
        fs.readFile('.' + req.url, (err, data) => {
            if(!err) {
                res.end(data);
            }
        });
    }
})

// 浏览器访问http://localhost:3000/a
// 如果判断上改成req.url == '/a/b/c' 那访问的其实是http://localhost:3000/a/b/css等

// 解决：相对路径会根据地址的变化而变化，什么时候不变了呢，写上绝对路径就可以了
// 把html中引用href后面的 ./css/index.css的点去掉 变成/css/index.css
// 再次访问http://localhost:3000/a/b/c 也是可以访问到的

// 再改回/a 也是可以访问到的
// 也就是说更改html里面的 把./换成/根就可以了，使用绝对路径，
// 做网站肯定就得用绝对路径
// 这就是网络路径，它跟目录不是一一对应的