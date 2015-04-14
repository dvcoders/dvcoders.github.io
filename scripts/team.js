jQuery.getJSON('api.dvcoders.com/team', function(data) {
	var users = data.result;
	
	for (i = 0; i < data.result.length; i++) {
		var newHtml = '<li class="col-md-4">' +
				'<img src="' + users[i].image_link + '">' +
				'<h1>' + users[i].user.firstname + " " + users[i].user.lastName + '</h1>' +
				'<p>' + users[i].bio + '</p>' +
			'</li>';
		
		$('.team ul').append(newHtml);
	}
});