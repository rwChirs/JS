
let http = require('http');

let template = require('art-template');

template.defaults.root = './views';
template.defaults.extname = '.html';

let app = http.createServer();

app.listen(3001);

app.on('request', (req, res) => {
    if(req.method == 'get'){
        //
    } else if(req.method == 'post') {
        //
    }

})