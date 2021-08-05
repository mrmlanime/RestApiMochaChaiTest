//Define request response in root URL
var express = require("express")
var app = express()

app.get("/",function(req,res){
    res.send("welcome")
})

app.listen(9090,function(){
    console.log("App is listening on port 9090")
})