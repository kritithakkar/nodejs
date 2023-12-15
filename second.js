// to send response to a server
const http = require("http");
const c = require("./third");
const avg = c(10, 5, 15);
console.log(avg);
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text-html" });
    res.write("<h1>Hello from server</h1>");
    res.write("<h2>Good to see you</h2>");
    res.end("ok bye bye");
  })
  .listen(9898);
