const express = require("express");
const app = express();

app.use(express.static("frontend"))
app.get("/html",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html")
})
app.get("/",function(req,res){
    res.send("Hello World");
})
app.listen(3000, function(){
    console.log("server running on http://localhost:3000")
})

