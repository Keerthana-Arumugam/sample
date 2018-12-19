
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Dev!');
});
app.listen(8080, function () {
    console.log('Dev app listening on port 8080!');
});
    

