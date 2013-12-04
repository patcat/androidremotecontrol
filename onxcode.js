device.gestures.on('nudgeLeft', function() {
   device.notifications.createNotification('the phone was nudged left').show();
   device.ajax({
		url: 'http://androidremotecontrol.herokuapp.com/nudging',
		type: 'POST',
		dataType: "json",
		data: '{"nudged":"left"}',
		headers: {'Content-Type':'application/json'}
	},
	function onSuccess(body, textStatus, response) {
	  console.info('successfully received http response!');
	},
	function onError(textStatus, response) {
		var error = {};
		error.message = textStatus;
		error.statusCode = response.status;
		console.error('error: ',error);
	});
});

device.gestures.on('nudgeRight', function() {
   device.notifications.createNotification('the phone was nudged right').show();
   device.ajax({
		url: 'http://androidremotecontrol.herokuapp.com/nudging',
		type: 'POST',
		dataType: "json",
		data: '{"nudged":"right"}',
		headers: {'Content-Type':'application/json'}
	},
	function onSuccess(body, textStatus, response) {
		console.info('successfully received http response!');
	},
	function onError(textStatus, response) {
		var error = {};
		error.message = textStatus;
		error.statusCode = response.status;
		console.error('error: ',error);
	});
});

device.gestures.startDetection(900000);

device.screen.on("on", function () { 
	// Start gestures detection for 1 minute
	device.gestures.startDetection(900000);
});