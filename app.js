var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.json());

app.post('/',function(req,res){
    console.log("post method");

if(req.body.queryResult.intent.displayName == "movie ticket") { 
    console.log("forintent",JSON.stringify(req.body));
    res.json(
    {
            "payload": {
              "google": {
                "expectUserResponse": true,
                   "richResponse": {
                  "items": [
                    {
                      "simpleResponse": {
                        "textToSpeech": "click to conform!...",
                        "displayText":"choose to conform"
                      }
                    },
                ],
                  "suggestions": [
                    {
                      "title": "confirm ticket"
                    },
                    {
                      "title": "cancel ticket"
                    }
                  ],
                  }
            
                }
            }
          }

      
);

} 
else if(req.body.queryResult.intent.action == "movieticket.movieticket-custom")
{
    console.log("intentaction",JSON.stringify(req.body));
        res.json(
    {
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "This is a Basic Card:",
                    "displayText" : "ticket confirmation"
                  }
                },
                    {  
                        "basicCard": {
                          "title": "Ticket confirmation",
                          "text": "Your ticket has been booked successfully..."
                        }
                    }
               ],
            }   
        }
      }
    });
}

else if(req.body.queryResult.intent.action == "movieticket.movieticket-custom")
{
    console.log("cancelaction",JSON.stringify(req.body));
        res.json(
    {
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "This is a Basic Card:",
                    "displayText" : "ticket cancelation"
                  }
                },
                    {  
                        "basicCard": {
                          "title": "Ticket Cancellation",
                          "text": "Your ticket has been cancelled successfully..."
                        }
                    }
               ],
            }   
        }
      }
    });
}


});
app.listen(process.env.PORT,function(req,res){
    console.log("Running...");
});



