// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();


app.get('/', function (req, res) {
    res.send('Hello Dev!');
});
app.post('/',function(req,res){
    console.log("post method");

if(req.body.queryResult.intent.displayName == "sample")
{
    res.json(
    {
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "this is a simple response"
                  }
                }
              ]
            }
          }
        }
      }
)

}
});

app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});