$(document).ready(function {
  jQuery.getJSON('https://api.dvcoders.com/kernels', function(data) {
    var kernels = data.result;

    var newHTML;
    kernels.forEach( function (result) {
      newHTML = '<li class="col-md-4">' +
          '<img src="' + result.imageUrl + '">' +
          '<h1>' + result.profile.fullName + '</h1>' +
          '<p>' + result.bio + '</p>' +
        '</li>';
      jQuery('.team ul').append(newHtml);
    });
  });
});
