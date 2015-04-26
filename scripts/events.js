$(document).ready(function($) {
  $.ajax({
    url: 'https://api.dvcoders.com/events?start=' + Date.now(),
    method: 'GET',
    success: function(data) {
      var results = data.result;

      var newHtml;
      results.forEach(function(result) {
        newHtml =
          '<div class="cd-timeline-block">' +
          '<div class="cd-timeline-img"></div>' +
          '<div class="cd-timeline-content">' +
          '<h2>' + result.title + '</h2>' +
          '<p>' + result.location + '</p>' +
          '<p>' + result.description + '</p>' +
          '<span class="cd-date">' + formatDate(result.start, result.end) + '</span>' +
          '</div>' +
          '</div>';
        $('#cd-timeline').append(newHtml);
      });

      var timeline_block = $('.cd-timeline-block');

      //hide timeline blocks which are outside the viewport
      timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
      });

      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function() {
        timeline_block.each(function() {
          if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });


      function formatDate(startMillis, endMillis) {
        var formatted;
        var start = new Date(startMillis);
        var end = new Date(endMillis);

        formatted = start.toDateString().substring(4, 10) + " "; // Include only the month and date
        formatted += start.toTimeString().substring(0, 5) + " - "; // Include only the hours:minutes
        if (end.getDate() > start.getDate()) { // If it ends on a different day, include the day
          formatted += end.toDateString().substring(4, 10) + " ";
        }
        formatted += end.toTimeString().substring(0, 5);

        return formatted;
      }
    }
  });
});