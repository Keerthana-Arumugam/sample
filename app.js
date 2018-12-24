var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.json());

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
                        "textToSpeech": "To book your movie ticket..select and confirm the ticket..."
                      }
                    },
                    {
                        "basicCard": {
                          "title": "Ticket confirmation",
                          "text": "your ticket has been booked"
                        }
                    }
                    ],
                //   "suggestions": [
                //     {
                //       "title": "confirm ticket"
                //     },
                //     {
                //       "title": "cancel ticket"
                //     }
                //   ],
                //   "linkOutSuggestion": {
                //     "destinationName": "Website",
                //     "url": "https://assistant.google.com"
                //   }
                }
              }
            }
          }

      
);

} 

});
app.listen(process.env.PORT,function(req,res){
    console.log("Running...");
});



