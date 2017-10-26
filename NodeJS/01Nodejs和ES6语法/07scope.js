
// 文件名：作用域

// var abc = 'hello'; //全局的

function fn(){
    var abc = 'world!'; //局部的
}

// 块级(使用关键字 let 来创建一个块级变量)只要是一对花括号，就是一个块，再用let来定义，就是一个块级作用域的变量了
if(true) {
    // var abc = 'hello world!';
    let abc = 'hello world!'; 
    console.log(abc);//打印成功，说明abc只能在{}范围内去用，外面都不可以用
}

console.log(abc); 
//1.三者都在 打印全局 2.隐藏第一个，也不会打印全局，因为没执行，而且局部的只能在函数里面用

// （var）所以打印结果 hello world! 
// （let）打印 abc未定义   因为在外部根本没有abc这个变量




