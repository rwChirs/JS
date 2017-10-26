

// 文件名：数组扩展

// 想要在js中定义一个数组，有几种方式？

// 1、字面量
var arr1 = ['a', 'b'];

// 2、构造函数
var arr2 = new Array('a', 'b');
// console.log(arr2);//['a', 'b']

// var arr3 = new Array(2); //这是表示长度为 2
// // console.log(arr3); //[ , ]
// var arr31 = new Array(2, 3); 
// console.log(arr31); //[2, 3]
// 问题：若想创建一个单元的数组，而数组的单元是一个数组的时候，就遇到麻烦（做不到）
// 存在歧义：如果只给一个数字的时候，它表示的是数组长度，用了ES6方法就不存在了

// ES6的处理方式
// 创建新数组
// 3、Array.of();

var arr4 = Array.of(2);
// console.log(arr4);//[2]

var arr41 = Array.of(2, 3, 4);
// console.log(arr41);//[2, 3, 4]
// 想创建数组很简单，把单元值写进方法的（）即可




// 遍历的方式操作
var arr = ['a', 'b', 'c'];

// 1)
// arr.forEach(function( val, key){ // 原生第一个是单元值，第二个是索引值
//     console.log(key, val); //0 'a'  1 'b'  2  'c'
// })

// 2)
// 当find方法执行的时候，里面的回调函数执行了3回
// 也起到了遍历的作用
// arr.find(function(){
//     console.log(1); // 1 1 1
// })

// 3)
// arr.find(function(val, key){
//     console.log(key, val); //0 'a'  1 'b'  2  'c'
// })

// 4)
// 如何使用呢（可以用来查找数组中的某一个单元）
    // 原来若想要实现这个功能，需要完全的遍历

// var res = arr.find(function(val, key){
//     // find就是查找，找到一个以后就停止了
//     return val > 'a';
// })
// console.log(res); //b


// 说明 findIndex() 也会把数组遍历
// arr.findIndex(function(val, key) {
//     console.log(1); // 1  1  1
// });

// 使用: 找到这个数组当中 第一个 大于a的索引值
var k = arr.findIndex(function(val, key) {

    return val > 'a';
});
console.log(k); //1













