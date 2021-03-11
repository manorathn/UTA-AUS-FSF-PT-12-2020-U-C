const http = require("http");

const port1 = 7000;
const port2 = 7500;


const handleRequestOne = (request, response) => {
    response.end(`Imagination is more important than knowledge ${request.url}`);
};

const handleRequestTwo = (request, response) => {
    response.end(`In the middle of difficulty lies opportunity ${request.url}`);
};

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(port1, () => {

    console.log("Server listening on: http://localhost:" + port1);
});

serverTwo.listen(port2, () => {

    console.log("Server listening on: http://localhost:" + port2);
});