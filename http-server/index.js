const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(
      JSON.stringify({
        id: 1,
        name: "Minsu Kang",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Minsu!</li>");
    res.write("<li>Welcom to node.js<li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
