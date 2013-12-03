(function() {
	var tally;

	var socket = io.connect(window.location.hostname);
	/*socket.on('receivedTweets', function (data) {
		console.log('Received tweets are:');
		console.log(data);

		$('.tweets').html('<ul></ul>');

		for (var i = 0; i < data.length; i++) {
			$('.tweets ul').append('<li>'+data[i].text+'</li>');
		}
	});*/

	socket.on('nudgeleft', function (data) {
		console.log('Received nudge left');
		console.log(data);

		$.deck('next');
	});

	socket.on('nudgeright', function (data) {
		console.log('Received nudge right');
		console.log(data);

		$.deck('prev');
	});

	$('#lighton, #lightoff, #redon, #redoff, #orangeon, #orangeoff, #blueon, #blueoff').on('click', function() {
		var action = $(this).attr('id');
		$.ajax({
			type: 'GET',
			url: '/'+action,
			success: function(data) {
			},
			error: function(xhr, type) {
				alert('Error... ' + type);
			}
		});
	});
}());