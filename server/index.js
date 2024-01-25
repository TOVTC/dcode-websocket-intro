// import package
const WebSocket = require("ws");

// create new websocket server, passing in several options
// here, we are just specifying the port that our server will be served from
// this will also start up our server
const wss = new WebSocket.Server({ port: 8082 });

// add a listener for an event where a new client has connected to our server
// the callback function will run every time a connection is made
// the ws represents a single connection to the serverside, so you will have multiple different ws objects for each wss server
wss.on("connection", ws => {
    console.log("New client connected!");

    // we can also listen for other events, such as the close event
    // this is applied to the specific connection, not to the web socket server itself
    ws.on("close", () => {
        console.log("Client has disconnected!");
    });
});

