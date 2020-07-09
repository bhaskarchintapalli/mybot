const TelegramBot = require('node-telegram-bot-api'); 
const token = '1124178769:AAEcmR77EimqSemALOPeGN2jX2cg47jBMmM';
const bot = new TelegramBot(token, {polling: true});

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
bot.on('message', (msg) => {
    
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
    }

    var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
} 
        
    });
    var reqTimer = setTimeout(function wakeUp() {
        request("https://fierce-scrubland-56942.herokuapp.com/", function() {
           console.log("WAKE UP DYNO");
        });
        return reqTimer = setTimeout(wakeUp, 1200000);
     }, 1200000);