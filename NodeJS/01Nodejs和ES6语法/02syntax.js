// 文件名：语法

// Nodejs是ECMAScript的宿主环境，与浏览器中的Javascript一奶同胞，所以其基础语法是一致的，都遵循ECMAScript 的标准规范。


// 在定义变量上 没有任何差别
// 1.字符串
// var str = 'hello world!';
// console.log(str);


// 2.数组
var arr = ['html', 'javascript', 'css'];
// console.log(arr);


// 3.对象
var obj = {
      name:'小明',
      age:18
};
// console.log(obj);


// 4.函数
// function sayHi(arg){
//       console.log('你好' + arg);
// }
// sayHi('小红');


// 5.遍历

// for(var i=0; i<arr.length; i++) {
//       console.log(arr[i]);
// }

// for(var key in obj) {
//       console.log(key, obj[key]);
// }


// 6.没有DOM/BOM操作
// alert(1); //会not defined