

// 函数扩展 2）reset参数

// 函数的解构赋值

function sayHi(name, age, ...gender) {
      console.log(name);
      console.log(age);
      console.log(gender);
}

// sayHi('小明',16, '男');

// 这个时候实际参数比传参要多，加...比较好
sayHi('小红', 16, '女', 98); 

// 可以理解为赋值操作(变相的解构赋值---函数的解构赋值)
// 前面的一一对应，后面的统一当数组展示

// [name, age, ...gender] = []






















