var httpProxy = require('http-proxy');

var server = httpProxy.createServer({
   router: {
     '192.241.174.150': 'localhost:3001',
     'chatleap.com': 'localhost:3001',
     'www.chatleap.com': 'localhost:3001',
     '.*': 'localhost:3000'
   }
});

server.listen(80);
