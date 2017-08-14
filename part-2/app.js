const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

let port = 3009
app.listen(port, ()=>{
  console.log('listening on port:', port)
})