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
* In the Network tab of the Developer Tools, specifically filtering for websocket calls, you can inspect your web socket connection
    * You can see the websocket handshake taking place in the headers
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
    * You can inspect the messages being sent in the Messages tab next to Headers within the Network tab
```
Hey how's it going?
```
* When a message is passed from the server to the client, it is sent as a Message Event, with the string stored in the data property
```
MessageEvent {isTrusted: true, data: "HEY, HOW'S IT GOING?", origin: 'ws://localhost:8082', lastEventId: '', source: null, …}
```
* You can also use object destructuring to only retrieve the data property as a string
```
HEY, HOW'S IT GOING?
```
* Again, each ws object is one connection, which has its own listeners, so if you open a new tab and navigate to the same link in two tabs, you end up with two sets of messages