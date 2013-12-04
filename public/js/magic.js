(function() {
	var socket = io.connect(window.location.hostname);

	socket.on('nudgeleft', function(data) {
		console.log('Received nudge left');
		console.log(data);

		$.deck('next');
	});

	socket.on('nudgeright', function(data) {
		console.log('Received nudge right');
		console.log(data);

		$.deck('prev');
	});
}());