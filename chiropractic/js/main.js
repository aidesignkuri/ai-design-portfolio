$(window).on('load', function() {
  $('.progressbar__fill').animate({ width:'100%'}, 500, function(){
  $('.loading').delay(500).fadeOut(800);
  });
});

$(function(){
  $(".fv__ham").click(function() {
    $(this).toggleClass("active");
    $(".fv__ham-menu").toggleClass("active");
  });
  $(".fv__ham-list li").click(function(){
    $(".fv__ham").removeClass("active");
    $(".fv__ham-menu").removeClass("active")
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var target = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop: target}, 600);
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  loopedSlides: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    500: {
      slidesPerView: 'auto',
    },
  }
});

$(function(){
  $(".faq__question").click(function(){
    $(this).find(".faq__arrow").toggleClass("active");
  });
});

$(function () {

  const $submitBtn = $("#js-submit")
  $('#form input,#form textarea').on('input change', function () {
   let check = true;
      $('#form [required]').each(function() {
        if ($(this).attr('type') == 'radio') {
          if($('input[name="entry.704436400"]:checked').length == 0) {
            check = false;
          }
        }
        else {
          if ($(this).val() ==="") {
          check = false;
        }
      }
      });

      if (check === true) {
        $submitBtn.prop('disabled', false);
      } else {
        $submitBtn.prop('disabled', true);
      }
});
});

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd4bnn0i8RuxmJVKcIUjHLq49VdsdoPETpy6hq71W5LMim7Sw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact__submit").css("visibility", "hidden");
         
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
