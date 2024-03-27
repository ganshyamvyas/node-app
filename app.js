const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public'));


var rn = require('random-number');
var options = {
  min:  0, 
  max:  100, 
  integer: true
}
const a= rn(options)
console.log(a)

app.get('/',(req,res)=>{
    res.render('index',{a})
})
app.listen(2000,()=>{
    console.log('port on server')
})