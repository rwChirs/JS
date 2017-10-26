

// 在 Nodejs中 以 .js结尾的文件成为一个模块

console.log('我是以.js结尾的模块');


// 仅仅以 .js结尾不能完全意义上成为一个模块
// 只是nodejs 将其对待成了模块

// 作为开发者需要真正 对功能进行封装，并能够提供给其他开发者调用


let version = '1.0.0';

function addCart() {
      // 假设通过 addCart 添加购物车
      console.log('添加成功');
}
function deleteCart() {
      // 假设通过 deleteCart 删除购物车

}
function modifyCart() {
      // 假设通过 modifyCart 修改购物车

}

// 是文件，写return是不行的


// 仅仅将方法定义好不行，还得将这些方法公开出去（提供给别人去用）
// 使用 return 不合 语法，
// Nodejs 新增了一个专门负责 将模块内部函数或变量公开的对象 module.exports

/*
var module = {};
module.exports = {};
*/

/*
module.exports.addCart = addCart;
module.exports.deleteCart = deleteCart;
module.exports.modifyCart = modifyCart;

module.exports.abc = version;
*/


// 模块的返回值 就是 module.exports

// 在Nodejs中 除了使用module.exports外
// 又提供了一个 exports 来实现与 module.exports 类似的功能（有差别）
// 和上面结果一样
// 简写形式 // 根据的是 exports = module.exports

exports.addCart = addCart;
exports.deleteCart = deleteCart;
exports.modifyCart = modifyCart;
exports.abc = version;


// 演示区别
// 重新赋值了 与 module.exports 无关了，
// 所以也不能将模块内的数据分开给外部了

exports = {
      addCart : addCart,
      deleteCart : deleteCart,
      modifyCart : modifyCart,
      abc : version
}






