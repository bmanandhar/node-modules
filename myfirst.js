// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);

// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(3000);

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello beautiful World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8000); //the server object listens on port 8080


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month + " " + q.day;
//   res.end(txt);
// }).listen(3030);


// Example of 'url' Module
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);
var conclusion = 'Please read carefully what this module returns on console'
/*The parse method returns an object containing url properties*/
console.log(q.host, ' ->This is the path');
console.log(q.pathname, ' ->This is the path ');
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);
console.log(conclusion)
