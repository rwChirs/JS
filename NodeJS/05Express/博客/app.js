

let express = require('express');

let app = express();

app.listen(3000);

app.set('view engine', 'xtpl');
app.set('views', './views');

app.use( express.static('./public') );



// 可以通过路由来区分前台网站和后台网站
// 但是 前后台网站 又可以分成若干子路由

// 如果才能将主路由和子路由联系起来？

// 可以使用 express.Router() 来创建主路由,主路由可以认为是一个中间件（路由级别的中间件）
// 主路由下再创建 子路由

// 前后台主路由分装出去了,所以要引用回来
let admin = require('./routes/admin');
let home = require('./routes/home');


// 访问/admin才能访问到其后的子路由
app.use('/admin', admin);

app.use('/', home);












