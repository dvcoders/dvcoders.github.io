$(document).ready(function {
  jQuery.getJSON('https://api.dvcoders.com/kernels', function(data) {
    var users = data.result;

    var newHTML;
    users.forEach( function (user, index, array) {
      newHTML += '<li class="col-md-4">' +
          '<img src="' + user.image_link + '">' +
          '<h1>' + user.user.fullName + '</h1>' +
          '<p>' + user.bio + '</p>' +
        '</li>';
    })
  });
});
