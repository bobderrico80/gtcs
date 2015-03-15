$(document).ready(function() {
  var slides = $('.slideshow-container').children();
  var totalSlides = slides.length;
  var current = 0;
  var timerInterval = 5000;

  var timer = setInterval(advanceSlides, timerInterval);

  function advanceSlides() {
    slides.eq(current).fadeOut()
      .removeClass('active')
      .addClass('inactive');
    slides.eq(current + 1 < totalSlides ? current + 1 : 0).fadeIn()
      .removeClass('inactive')
      .addClass('active');
    if (current < totalSlides - 1) {
      current++;
    } else {
      current = 0;
    }
  }
});
