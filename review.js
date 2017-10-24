

// 文件名：变量声明提升问题


// 老版本的变量提升，应该是js语言的一个bug，不要认为是一个高级的特性。
// 在ES6新版本之后，有问题就要修复，ES6就不再有变量提升的问题了

// let 和 const 不存在变量提升问题

/*
// 例：ES5
console.log(a); //直接输出 报错：未定义
var a = 12; //加上这行声明 打印undefined（在执行打印代码之前，变量已经存在了）
// 变量提升详解：js在解析js代码的时候，先收集查找所有声明变量的代码，表面上写在下面的了，
// 实际上，先把这些处理了，就是先声明了变量，到达代码原位置的时候才进行赋值操作
*/


/*
// 例1：ES6
console.log(a); //报错：未定义
let a = 12;
// 也就是说如果用 let 的话，是不存在变量提升的现象，不是它的语言特点
*/

/*
// 例2：ES6
console.log(a); //报错：未定义
const a = 12;
// 也不存在变量声明提升
*/


// 总结：按照正常的书写习惯，一般都是先声明变量，再使用变量


















