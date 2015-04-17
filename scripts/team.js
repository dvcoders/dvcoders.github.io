$(document).ready(function {
  jQuery.getJSON('https://api.dvcoders.com/kernels', function(data) {
    var results = data.result;

    var newHTML;
    results.forEach( function (result, index, array) {
      newHTML += '<li class="col-md-4">' +
          '<img src="' + result.image_link + '">' +
          '<h1>' + result.user.fullName + '</h1>' +
          '<p>' + result.bio + '</p>' +
        '</li>';
    });
  });
});
