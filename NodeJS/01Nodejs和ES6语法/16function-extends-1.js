

// 函数扩展 a)默认参数

// 在ES6中 在定义函数的时候可以设置默认参数值

/*
function sayHi(name){
      console.log('你好' + name );
}

// sayHi('小明'); //你好小明

sayHi();//如果不写小明，打印：你好undefined
// 所以语言不严谨
*/


// ES6的语法
// 所以，若用户传了就以用户传的为准，若没有传，可以给一个默认值
function sayHi(name = '小红'){
      console.log('你好' + name );
}

// sayHi('小明');//若不写这个（你好小红），若写这个（你好小明）

sayHi();



















