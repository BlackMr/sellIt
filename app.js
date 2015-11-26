var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req,res)
{
	//helps us for using 'tasarim.css' and serving folder;
	
	res.sendFile(__dirname + '/public/view/index.html');

});

app.get('/admin', function(request,response){
	response.sendFile(__dirname + '/public/view/settings.html');
});

server.listen(process.env.PORT || 8080);
console.log('Listening on MagicPort 8080');