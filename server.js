var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 8000;


http.listen(8000, function(){
    console.log("server running on port 8000");
})
