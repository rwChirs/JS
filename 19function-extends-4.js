

// 定义函数的方法
// function fn() {

// }

// var fn = function(){}

// 一个完整的函数应该具备以下三点
// 名字
// 参数
// 返回值

// ES6中提供了一种新的定义函数的方法

// 具名函数
// let fn = () => {}

// fn是函数名 

// let fn = (arg) => {
//       console.log(arg);
//       console.log('我是箭头函数!');
// }

// fn('测试');

// 匿名函数
setTimeout( () => {
      console.log('匿名函数');
}, 2000);




// 简写形式(少见)
var bar = () => 'hello';
// 相当于
// var bar = () => {return 'hello'};
console.log(bar());










