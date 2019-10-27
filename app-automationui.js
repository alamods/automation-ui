/**
 *  @file
 *  Alamods Production Process Automation UI control
 *
 *  This module...
 *
 */
let app                                     = require("express")();
let http                                    = require("http").Server(app);
let io                                      = require("socket.io")(http);



const WEB_PORT                              = 4444;




//
// CLIENT WEBSOCKET SERVER
//
// respond to "/" requests with the index file
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
// respond to file requests
app.get(/^(.+)$/, function(request, response) {
    response.sendFile(__dirname + request.params[0]);
})



// start websocket server
http.listen(WEB_PORT, function() {
    //   console.log("httpd listening on port 5200...");
});
