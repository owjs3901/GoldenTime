var net = require('net'); 
const request = require('request');
const express = require('express');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


var server = net.createServer(function (client) {
	 console.log('Client connected');
client.on('data', function (data) {
	console.log(data.toString())
	let c=''
	for(k of data.toString()){
		switch(k){
			case '0':case '1':
				case '2':case '3':
					case '4':case '5':
						case '6':case '8':
							case '7':case '9':
				c+=k
				break;
		}
	} 	
	if(c.length!=0&&c.length<5)
		bpm=c;
});
client.on('end', function () { console.log('Client disconnected'); });
client.write('Hello'); }); 
server.listen(25565, function () { console.log('Server listening for connection'); });
var bpm=0;
app.get('/test',(res,req)=>{
	req.send(String(bpm))
})
app.post('/test',(res,req)=>{
	bpm=res.body.bpm
	req.send("ok")
})
app.listen(1001,()=>console.log('run'))