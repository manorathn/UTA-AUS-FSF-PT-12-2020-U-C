var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            fs.readFile(__dirname + "/index.html", function (data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;

        case "/food":
            fs.readFile(__dirname + "/food.html", function (data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;

    }
}

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
