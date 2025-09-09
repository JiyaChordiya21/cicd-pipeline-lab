const http = require('http');
const port = 8888;

const requestHandler = (req, res) => {
  res.end("Hello from CI/CD Pipeline with Jenkins + Docker + Trivy!");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
