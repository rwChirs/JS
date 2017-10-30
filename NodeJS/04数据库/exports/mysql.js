
// 1、通过exports向外开放了一个createConnection方法

exports.createConnection = function (obj) {
// 3、再调用createConnection的时候又返回了一个对象，就是query方法
    return {
        query: function () {

        }
    }

}