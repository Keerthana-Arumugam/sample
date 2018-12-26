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
                        "textToSpeech": "ticket confirmation..."
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
else if(req.body.queryResult.follow-upintent.displayName == "movie ticket - confirmation")
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
                    "textToSpeech": "This is a Basic Card:"
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
// else if(req.body.queryResult.)
// {
//     res.json(
//     {
//         "payload": {
//           "google": {
//             "expectUserResponse": true,
//             "richResponse": {
//               "items": [
//                     {  
//                         "basicCard": {
//                           "title": "Ticket confirmation",
//                           "text": "Your ticket has been cancelled successfully..."
//                         }
//                     }
//                ],
//             }   
//         }
//       }
//     });
// }

});
app.listen(process.env.PORT,function(req,res){
    console.log("Running...");
});



