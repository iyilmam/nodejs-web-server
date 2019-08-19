var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = 3000;
/*
app.get("/",function(req, res){
    res.send("Merhaba Express!!!!");
})
*/
/*
var middleware = {
    requireAuthentication : function(req, res, next){
        console.log("Özel route girildi!!!");
        next();
    },
    logger : function(req, res, next){
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}
*/

app.use(middleware.logger);


app.get("/hakkimda",middleware.requireAuthentication,function(req, res){
    res.send("Hakkımda Sayfası!!!!");
})

app.use(express.static(__dirname + "/public"));

app.listen(PORT,function(){
    console.log("Express server " + PORT + " nolu portta çalışıyor.....");
});
