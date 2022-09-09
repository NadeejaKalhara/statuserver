var request = require('request');
var http = require('http');
var fs = require('fs');
const express = require('express')
var cookieParser = require('cookie-parser');
const { Console } = require('console');
const app = express()
app.use(cookieParser())
app.use(express.static('public'))
const path = require('path')
var port = process.env.PORT || 3000;

app.get('*', function(req, res){
  console.log(req.url)
  //request('https://aduruthuma.instatus.com'+req.url, function (error, response, body) {
 // console.error('error:', error); // Print the error if one occurred
 // res.status(200).send(body)
try {
  var x = request('http://aduruthuma.instatus.com'+req.url)
  req.pipe(x)
  x.pipe(res)
} catch (error) {
  res.send(error)
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



