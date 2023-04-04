const http = require("http");
const fs = require("fs/promises");
const port = 8080
http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      case "/": {
        const data = await fs.readFile("./index.html");
        res.end(data);
        break;
      }
      case "/about": {
        const data = await fs.readFile("./about.html");
        res.end(data);
        break;
      }
      case "contact-me": {
        const data = await fs.readFile("./contact-me.html");
        res.end(data);
        break;
      }
      default: {
        const data = await fs.readFile("./404.html");
        res.end(data);
        break;
      }
    }
  })
  .listen(port, () => console.log(`listening to port ${port}`));
