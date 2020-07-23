const http  = require('http');
const os    = require('os');
const redis = require('redis').createClient({
	host: 'redis-server',
	port: 6379
});

var handler = function(request, response) {
  redis.incr('counter', (error,data) => {
    response.writeHead(200);
    response.end("I've been visited " + data + " times, and my hostname is " + os.hostname() + "\n");
  });
};

var www=http.createServer(handler);
www.listen(3000);
