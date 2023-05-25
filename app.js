const express   = require('express')
const app       = express()

app.use("/public/TemplateData",express.static(__dirname + "/public/TemplateData"));
app.use("/public/Build",express.static(__dirname + "/public/Build"));
app.use(express.static(__dirname+'/public'));

app.listen(8080,function(){
    console.log('listening on 8080')
})