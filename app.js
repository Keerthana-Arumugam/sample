var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();



app.post('/',function(req,res){
    console.log("post method");

if(req.body.queryResult.intent.displayName == "movie ticket")
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
                    "textToSpeech": "click to proceed..."
                  }
                }
              ]
            }
          }
        }
      }
);

}
});

app.listen(8080, function () {
    console.log('Dev app listening on port 8080!');
});