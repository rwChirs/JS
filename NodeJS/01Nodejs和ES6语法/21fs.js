

// 通过系统模块 fs 可以实现目录及文件的操作(增、删、改、查)

// 想创建一个文件夹(php中用mkdir方法)
let fs = require('fs');

// mkdir 可以支持两个参数
// 第一个：目录名称
// 第二个：回调函数
// fs.mkdir('test' ,function(){
//       console.log(1);
// });
//nodejs有这个方法，但是必须要传参,就是文件要给个名字

fs.mkdir('text', (abc) => {//使用箭头函数去定义
      // 如果有错误，abc为一个对象
      // 描述了错误的原因
      // 如果没有错 abc 为 null
      console.log(abc);
});





// 想在test下创建文件

// fs.writeFile('./test/aa.html');//在创建的时候应该给内容，不给就得undefined


fs.writeFile('./test/aa.html', '<h1>hello Node!</h1>', (err) => {
      // console.log(err);
      if(!err){
            console.log('文件创建成功!');
      }
});





































