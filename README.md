# Websocket
Websocket allows for two-way, event-driven communication between a web browser and server, and is great for real-time applications

* Open the server directory in terminal and initialize node package manager
```
npm init -y
```
* Then install the Websocket package
```
npm install ws
```
* Create an index.js file to host the Websocket server

## Running the Demo
```
cd server && node index.js
```
* Then, open index.html in your browser. This establishes a connection between the html page and the websocket server
* When the page is refreshed, the connection to the server is closed and then reconnected.
* In the network tab of the developer tools, specifically filtering for websocket calls, you can see the messages being sent over websocket (none right now)
    * You can also see the websocket handshake taking place in the headers
    * Initially, when establishing a connection to the serverside, it sends through an http request, but then it gets upgraded to a ws connection/protocol
```
Request Headers
Connection: Upgrade
Upgrade: websocket
``` 
```
Response Headers
Connection: Upgrade
Upgrade: websocket
```
* With the handshake complete, we can send messages between the client and the server