var http = require("http"),
	express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	io = require("socket.io").listen(server),
	port = process.env.PORT || 5000;

// Used to read body of POST requests
app.use(express.bodyParser());

app.get('/', function(request, response) {
	response.sendfile('public/index.html');
});

app.post('/nudging', function(request, response) {
	io.sockets.emit('nudge'+ request.body.nudged);
	response.json({success: true});
});

app.get(/^(.+)$/, function(req, res) {
	res.sendfile('public/' + req.params[0]);
});

server.listen(port, function() {
  console.log("Listening on " + port);
});

/* ------------------------------------------------------
 * 
 *  These lines tell the server to wait for 10 seconds
 *  before answering with an empty response if it has
 *  no specific response to a GET or POST request.
 *
 * ------------------------------------------------------ */
io.configure(function () {
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 10);
});

io.sockets.on("connection", function(socket) {
	
});