const url = require("url");
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const pathName = req.url;
    if (pathName == "/about") {
      console.log("about page");
      res.writeHead(200, { "context-type": "text/html" });
      const fileContent = fs.readFile("./project/about.html");
      res.write(fileContent);
    } else if (pathName == "/") {
      console.log("home page");
      res.writeHead(200, { "context-type": "text/html" });
      const fileContent = fs.readFile("./project/home.html");
      res.write(fileContent);
    } else if (pathName == "/services") {
      console.log("services");
      res.writeHead(200, { "context-type": "text/html" });
      const fileContent = fs.readFile("./project/services.html");
      res.write(fileContent);
    }
  })
  .listen(9898);
