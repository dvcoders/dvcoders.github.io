$(document).ready(function {
  jQuery.getJSON('https://api.dvcoders.com/kernels', function(data) {
    var users = data.result;
  
    for (i = 0; i < users.length; i++) {
      var newHtml = '<li class="col-md-4">' +
          '<img src="' + users[i].image_link + '">' +
          '<h1>' + users[i].user.fullName + '</h1>' +
          '<p>' + users[i].bio + '</p>' +
        '</li>';
    
      $('.team ul').append(newHtml);
    }
  });
});
