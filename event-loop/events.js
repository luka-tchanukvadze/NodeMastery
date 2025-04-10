const EventEmitter = require("events");
const https = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: chanu");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////

const server = https.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  res.end("Another request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, () => {
  console.log("waiting for request...");
});
