var httpProxy = require('http-proxy');

var server = httpProxy.createServer({
   router: {
     '127.0.0.1': 'localhost:3001',
     '.*': 'localhost:3000'
   }
});

server.listen(80);
