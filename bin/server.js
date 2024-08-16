const http = require('http');
const app = require('../src/app');

//definir qual porta ira inicializar e rodar o app;
const port = parseInt(process.env.port, 10) || 3000;

//criar servidor;
const server = http.createServer(app);

server.listen(port);
server.on('listening', onListenning);
console.log(`Api Inicilizada na porta ${port}`)

function onListenning(){
    const adress = server.address();
    bind = typeof adress == 'string' ? 'pipe' + adress : 'port' + adress.port;
    console.log('Listening on' + bind)
}