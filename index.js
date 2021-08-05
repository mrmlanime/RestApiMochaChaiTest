n//Define request response in root URL
app.get("/",function(req,res){
    res.send("welcome to my app")
})

app.listen(9090,function(){
    console.log("App is listening on port 9090")
})