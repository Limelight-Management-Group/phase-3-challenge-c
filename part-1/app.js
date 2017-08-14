const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

/*

GET /api/shout/:word

Shout the word back! 
Return the value of the 
URL parameter :word converted 
to ALL CAPS and with three 
exclamation points added 
to the end.

POST /api/array/merge

request: POST /api/array/merge
request body: {"a": ["one","two"],
               "b": ["three","four"]}
request content type: application/json
response status code: 200
response: {"result": ["one","three","two","four"]}
response content type: application/json

request: POST /api/array/merge
request body: {"a": [10,100],
               "b": [50,500]}
request content type: application/json
response status code: 200
response: {"result": [10,50,100,500]}
response content type: application/json

request: POST /api/array/merge
request body: {"a": "abcd",
               "b": [5,6]}
request content type: application/json
response status code: 400
response: {"error": "Both keys in request body must be of type Array."}
response content type: application/json
*/

app.get('/api/shout/:word', (req, res) =>{
  let wordparams = req.params.word
  console.log(wordparams)
  
  
  let params = wordparams.toUpperCase()
  console.log(params)
  res.send('1')
})

app.post( '/api/array/merge', (req,res)=>{
  var params = req.body

  if ( !Array.isArray(params.array1) || !Array.isArray(params.array2)) {
    res.send(400).json({"error": "Both keys in request body must be of type Array."})
  } else {
    // res.set('Content-Type', 'application/json')
    var array1 = params.array1
    var array2 = params.array2
    let result = array1.concat(array2)
    res.send(result)
  }
})

let port = 3008
app.listen(port, ()=>{
  console.log('app is ready for business on port:', port)
})