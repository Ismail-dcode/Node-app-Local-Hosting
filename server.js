// Import Node's built-in modules.
const http = require("http");
const fs = require("fs");
const path = require("path");

// Define the port where the server will listen.
const PORT = 8080;

// Resolve the path to the HTML file we want to serve.
const indexFilePath = path.join(__dirname, "index.html");

// Create an HTTP server to handle incoming requests.
const server = http.createServer((req, res) => {
  // Serve the same HTML page for the root URL.
  if (req.url === "/" && req.method === "GET") {
    // Read the HTML file from disk.
    fs.readFile(indexFilePath, "utf8", (err, html) => {
      if (err) {
        // Return a 500 response if something goes wrong while reading the file.
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Internal Server Error");
        return;
      }

      // Return the HTML page with a successful status code.
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
    });
    return;
  }

  // Return 404 for any route we do not handle.
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

// Start the server and print a startup message.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
