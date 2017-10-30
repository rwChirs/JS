let express = require('express');

let app = express();

app.listen(3000);

let bodyParser = require('./body-parser');
// console.log(bodyParser);

app.use(bodyParser.urlencoded())



app.set('views', './views');

app.set('view engine', 'xtpl');

app.get('/', (req, res) => {
    res.render('index', {})
})

app.post('/add', (req, res) => {

    console.log(req.body);


    res.send('hello');
})






