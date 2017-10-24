

// 文件名：对象 解构赋值

// 使用类似于对象的结构来声明变量

// 1.声明变量name
// let {name: name} = {name: '小明'};
// console.log(name); //小明

// 2.声明变量 abc
// let {age: abc} = {age: 16};
// // console.log(abc, age); //age是undefined，所以定义的是abc
// console.log(abc);

// 3.声明 abc 变量， 值为 16
// let {age: abc} = {aaa: 18, age: 16};//age属性一一对应，变量名abc，变量值16
// console.log(abc);


// 总结：使用 对象解构 是根据左右两侧的属性 来对应
// 与 数组不同，数组解构 是根据左右两侧 一一对应（靠索引值）




// 产生错误的原因：使用解析赋值时，需要使用 关键字声明(var / let 都行)
// 1.表示要声明变量了，而不是给一个对象赋值呢
// var {name: name} = {name: '小明'};
// console.log(name);  //小明

// 2.使用对象解构时，可以使用简写形式
// var {name, age} = {name: '小明', age: 16};
// // 完全等于
// // var {name: name, age: age} = {name: '小明', age: 16}
// console.log(name, age); //小明 16

// 3.若属性和属性对应不上的时候
// var {name, age} = { age: 16}
// console.log(name, age); // undefined(对应不上就是这)  16


// 4.1
// var {name, age, childs} = {name: '小明', age: 16, childs:{name: '小小明', age: 16}}
// console.log(name);//小明
// console.log(age); //16
// console.log(childs); //{name: '小小明', age: 16}

// 4.2
var {name, age, childs:{name, age}} = {name: '小明', age: 16, childs:{name: '小小明', age: 2}}
console.log(name);//
console.log(age); //
console.log(childs); //报错undefined（因为冒号后面的才是变量名，这里是缩写）





