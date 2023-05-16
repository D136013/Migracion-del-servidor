const  http = require('http');

const host = "localhost";
const port = 8080

const tareas = [
    { id: 1, description: "orar", state: true},
    { id: 2, description: "trabajar", state: false },
    { id: 3, description: "cobrar", state: true },
    { id: 4, description: "viajar", state: true },
    { id: 5, description: "pintar", state: false },
    { id: 6, description: "patinar", state: true }
  ];

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(tareas))
    res.end();
  });
  

server.listen(port, host, () => {
console.log(`servidor funcionando en http://${host}:${port}`)
});