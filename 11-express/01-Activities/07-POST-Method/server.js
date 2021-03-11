// Dependencies
const http = require('http');

const PORT = 8080;

var server = http.createServer(handleRequest);


const handleRequest = (req, res) => {
    // Saving the request data as a variable
    let requestData = '';

    // When the server receives data...
    req.on('data', (data) => {
        // Add it to requestData.
        requestData += data;
        console.log("Data that you are putting in\n", requestData);
    });

    // When the request has ended...
    req.on('end', () => {
        // Log (server-side) the request method, as well as the data received!
        var myHTML = "<html><head><title>Hello Duck!</title></head><body>" +
            "<h1>Thank you for the data: </h1><code>" + requestData + "</code>" +
            "</body></html>";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(myHTML);
    });
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
