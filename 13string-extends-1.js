

// 字符串扩展（第一部分：对象方法）


var str = 'my name is admins!';
// console.log( str.length );

// 法1：以某字符开始
// str.startsWith('my') 这个字符串是不是以 my 开头的
console.log( str.startsWith('my') ); //true

// 法2：以某字符结尾
// str.endsWith('my') 这个字符串是不是以 my 结尾的
console.log( str.endsWith('my') ); //false

// 法3：任意位置包含某字符
// str.includes('my') 这个字符串有没有 abc
console.log( str.includes('abc') ); //false


// 如果没有ES6，我们想要判断 字符串中 包不包含某一个字符的时候，
    // 我们的解决是 indexOf，如果有返回的是索引值，没有的话返回的是-1
    // 可是返回一个 布尔类型才更合适，所以用includes替换那个方法


// 法4：重复某个字符
// str.repeat(n) 重复这个字符串 n次
var ha = '嘿';
console.log( ha.repeat(5) ); //嘿嘿嘿嘿嘿


















