routes = {
     'swiftnifty.trevordev.com': 3007,
     'blockfighter.trevordev.com': 3006,
     'niftykick.trevordev.com': 3005,
     'niftykick.com': 3005,
     'stockbrain.trevordev.com': 3004,
     'trevordev.com': 3003,
     'jokeydoke.com': 3002,
     'chatleap.com': 3001
}

var httpProxy = require('http-proxy');

var makeRoutes = function(routes, all){
    var newRoutes = {}
    for(key in routes){
        newRoutes[key] = 'localhost:'+routes[key];
        newRoutes['www.'+key] = 'localhost:'+routes[key];
    }
    if(all){
        newRoutes['.*']='localhost:'+all;
    }
    return newRoutes;
}

var server = httpProxy.createServer({
   router: makeRoutes(routes,3000)
});

server.listen(80);
