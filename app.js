var httpProxy = require('http-proxy');

var server = httpProxy.createServer({
   router: {
     'niftykick.trevordev.com': 'localhost:3005',
     'www.niftykick.trevordev.com': 'localhost:8888',
     'www.stockbrain.trevordev.com': 'localhost:3004',
     'stockbrain.trevordev.com': 'localhost:3004',
     '192.241.174.150': 'localhost:3002',
     'trevordev.com': 'localhost:3003',
     'www.trevordev.com': 'localhost:3003',
     'jokeydoke.com': 'localhost:3002',
     'www.jokeydoke.com': 'localhost:3002',
     'chatleap.com': 'localhost:3001',
     'www.chatleap.com': 'localhost:3001',
     '.*': 'localhost:3000'
   }
});

server.listen(80);
