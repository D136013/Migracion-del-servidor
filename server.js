const  http = require('http');

const host = "localhost";
const port = 8080

const tareas = [
    { id: 1, description: "correr", state: true},
    { id: 2, description: "saltar", state: false },
    { id: 3, description: "jugar", state: true },
    { id: 4, description: "caminar", state: true },
    { id: 5, description: "estudiar", state: false },
    { id: 6, description: "dormir", state: true },
    { id: 7, description: "trabajar", state: false }
  ];

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(tareas))
    res.end();
  });
  

server.listen(port, host, () => {
console.log(`servidor funcionando en http://${host}:${port}`)
});