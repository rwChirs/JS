

// 通过系统模块 path 可以用来获得路径相关信息
// 比如文件名、目录名、文件后缀等


let path = require('path');


let img = './images/20171024/logo.png';

// 1.通过 path模块提供的 parse方法 可以解析出文件目录的相关信息
// console.log(path.parse(img));

// let dir = path.parse(img).dir;
// let name = path.parse(img).name;

// 解构赋值方法更简便
// let {dir, name, ext} = path.parse(img);
// console.log(dir, name, ext);

// 2.通过 path模块的 dirname方法，可以获得目录名称
dir = path.dirname(img);
// console.log(dir);


// 3.通过 path模块的 extname方法，可以获得文件后缀

ext = path.extname(img);
// console.log(ext);


// 4.通过 path模块 提供的 join方法，可以处理多个路径
// 连接多个路径

console.log( path.join('./a', './b', './c') ); // a\b\c

console.log( path.join('a', 'b', 'c', '../d') ); // a\b\d  c被d取代了


// Linux 使用的是 /  
// window 使用的是 / 和 \
// join会自动帮助去处理

var a = './abc/a';
var b = 'abc/b';

// a + b; // ./abc/aabc/b
 console.log(path.join(a, b));













