var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    fs = require("fs");



 app.use("/", express.static("./client"));
app.use("/", express.static("./"));
app.get("/api/img" , function(request, response) {

      fs.readdir("./client/img", function (err, files) {
        if (err) throw err;
      response.send(files);
    });


});





server.listen(3031);
console.log("Started!!");
