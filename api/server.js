const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.LISTENING_PORT || 3001;

server.listen(PORT, (err) => {
  console.log("APP IS LISTENING ON PORT NO : " + PORT);
});
