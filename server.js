const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.send("Hello World");
})
app.get("/myname",function(req,res){
    res.send("Maithreyi");
})
app.listen(3000, function(){
    console.log("server running on http://localhost:3000")
})
