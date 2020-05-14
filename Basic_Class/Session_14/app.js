var http = require('http');
var oneLinerJoke = require('one-liner-joke');
const port = 8080


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(oneLinerJoke.getRandomJoke());
  res.end();
}).listen(8080);



var http = require('http'); //menggunakan library eksternal namanya 'http'
var rpar = require('random-paragraph');
const port = 8080

http.createServer(function (req, res) { //bikin server yang siap terima request
res.writeHead(200, {'Content-Type': 'text/html'}); //header HTTP request
res.write('<p>'+rpar({sentences:4})+'</p>');
res.end(); //isi pesan
}).listen(port); //bisa diakses di port 8080 


var http = require('http'); //menggunakan library eksternal namanya 'http'
const mq = require("popular-movie-quotes");
const port = 8080

http.createServer(function (req, res) { //bikin server yang siap terima request
res.writeHead(200, {'Content-Type': 'text/html'}); //header HTTP request
var quotes = mq.getSomeRandom(10);
//console.log(quotes);
for (var i=0; i<quotes.length; i++) {
res.write('<p>Quote: '+quotes[i].quote+'</p>');
res.write('<p>Movie: '+quotes[i].movie+'</p>');
res.write('<p>Year: '+quotes[i].year+'</p>');
}
res.end(); //isi pesan
}).listen(port); //bisa diakses di port 8080 
