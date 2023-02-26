const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const courseLib = require('./backend/lib/courseLib');

const app = express();
const str = process.env.MONGO_CONNECTION_STRING;
const mongoose= require("mongoose");
mongoose.connect(process.env.MONGO_CONNECTION_STRING, async function(err){
    if(err)
        console.error(err);
    else{ 
        console.error("DB connection successful");
        await courseLib.createFirstCourse();
        const courses= await courseLib.getAllCourses();
        console.log(courses);
        app.listen(3000, function(){
            console.log("server running on http://localhost:3000")
        })
    }
})
app.use(express.static("frontend"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html")
})



