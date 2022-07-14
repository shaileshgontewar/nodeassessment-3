// Middleware functions are functions that have access to the request object ( req ), 
//the response object ( res ), and the next middleware function in the application's request-response cycle. 
//The next middleware function is commonly denoted by a variable named next .
const express = require('express') // importing express
const app = express();

//creating first middleware
const middleware1 = function(req,res,next){ 
    console.log('middleWare 1 ');
    next();
}

app.use(middleware1); 

//creating second middleware
const middleware2 = function(req,res,next){
    console.log('middleware 2');
}

//creating routes

//using middleware2 and global middleware
app.get('/',middleware2,function(req,res){
    res.send("Home page")
})

//using middleware1 => global
app.get('/first',function(req,res){
    res.send("First Page")
})

//using middleware2 and global middleware
app.get('/second',middleware2,function(req,res){
    res.send("Second Page")
})

//using middleware1 => global
app.get('/third',function(req,res){
    res.send("Third Page")
})

app.listen(3002);