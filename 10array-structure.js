
// 文件名：数组解构  赋值

// 使用类似于数组的结构来声明变量


// 0.1
// var a = 'a';
// var b = 'b';

// 0.2
// var a = 'a', b = 'b';

// 0.3
// let a = 'a', b = 'b';


// 1、基本用法
// var [a, b, c] = ['aa', 'bb', 'cc'];
// // 相当于
// // var a = 'aa', b = 'bb', c = 'cc';
// console.log(a, b, c);


// 2、（解析结构赋值）这种方式声明变量，比较灵活
// var info = [{name : '小明'}, 'hello', 'world'];
// // var obj = info[0];
// // var h = info[1];
// var [obj, h, w] = info;
// console.log(obj);


// 3、一一对应，当没有对应的单元时，值为 undefined
let [a, b, c] = [1, 2];
// console.log(a); //1
// console.log(b); //2
// console.log(c); //undefined

// 相当于重新赋值
[a, b, c] = [1, 2, null];
// console.log(a); //1
// console.log(b); //2
// console.log(c); //null


// 4、
[a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a); //1
// console.log(b); //2
// console.log(c); //[3, 4, 5, 6]


// 5、目的是为了理解 解构赋值，首先要保证结构一样，才能进行对应的赋值操作
[a, [b, c], d] = [1, [2, 3], 4];
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4


let [e, f, g] = 'abc';
console.log(e, f, g); // a,b,c

















