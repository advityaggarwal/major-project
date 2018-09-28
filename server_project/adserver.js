var module= require('./module.js')
var express= require('express')
var cors=require('cors');
var parser=require('body-parser');

var app=express();
app.use(parser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:value', function(req, res){
    val=req.params.value;
    module.getData(val,res);
    
})

app.get('/:value1/:value2', function(req, res){
    val1=req.params.value1;
    val2=req.params.value2;
  //  console.log(val1);
  //  console.log(val2);
    module.getDatas(val1,val2,res);
})

/*app.get('/Electronics/television', function(req, res){
    sam.television(res);
    

})

app.get('/Electronics/others', function(req, res){
    sam.othersElectronics(res);
    

})

app.get('/Property', function(req, res){
    sam.property(res);
    

})

app.get('/Property/apartment', function(req, res){
    sam.apartment(res);
    

})
app.get('/Property/bungalow', function(req, res){
    sam.bungalow(res);
    

})
app.get('/Property/sites', function(req, res){
    sam.sites(res);
    

})
app.get('/Property/villa', function(req, res){
    sam.villa(res);
    

})
app.get('/Property/others', function(req, res){
    sam.othersProperty(res);
    

})
app.get('/Vehicles', function(req, res){
    sam.vehicles(res);
    

})
app.get('/Vehicles/2Wheelers', function(req, res){
    sam.twowheelers(res);
    

})
app.get('/Vehicles/4Wheeler', function(req, res){
    sam.fourwheelers(res);
    

})
app.get('/Vehicles/others', function(req, res){
    sam.othersvehicles(res);
    

})
app.get('/others', function(req, res){
    sam.others(res);
    

})
app.get('/others/books', function(req, res){
    sam.books(res);
    

})
app.get('/others/furniture', function(req, res){
    sam.furniture(res);
    

})
*/
app.use(cors()).listen(8081,()=>{
    console.log("Server has started")
})