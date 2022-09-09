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
app.get("/_next/image", function(req, res){
  res.redirect(301, "https://aduruthuma.ml/assets/img/LSM-Logo-Light.png")
})
app.get('*', function(req, res){
  console.log(req.url)
  const options = {
    url: 'https://aduruthuma.instatus.com'+req.url,
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Connection':'keep-alive',
      'Accept-Language':'en-US,en;q=0.9'
    }
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(200).send(body)})

})
app.post('*', function(req, res){
  console.log(req.url)
  const options = {
    url: 'https://aduruthuma.instatus.com'+req.url,
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Connection':'keep-alive',
      'Accept-Language':'en-US,en;q=0.9'
    },
    method: 'POST',
  };
  request(options, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 res.status(200).send(body)})

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


