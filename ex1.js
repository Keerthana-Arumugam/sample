
var http = require('http');
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var fs = require('fs');
var dt = require('./firstmodule');
http.createServer(function (req, res) {
    fs.readFile('ex2.html', function(err, data) {
       
        
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write("\nThe date and time are currently: " + dt.myDateTime());
var q = url.parse(adr, true);


console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); 
//var txt = q.year + " " + q.month;
var qdata = q.query;
console.log(qdata.month); //returns 'february'

 // res.write(req.url);
    res.end();
    });
}).listen(8080);


  






