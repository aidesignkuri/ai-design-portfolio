//セッションストレージからフラグを取得:
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

$(window).on('load', function() {
  if (!isFirstLoad) {
    // 初回アクセス: フラグを保存してローディング画面を表示
    sessionStorage.setItem('isFirstLoad', 'true');
    setTimeout(function() {
      $('.loading-screen').addClass('is-hide');
      // 背景とメイン画像を同時に表示
      $('.fv__bgcolor, .fv__img').addClass('is-show');
      // テキストボックスは少し遅れて表示
      setTimeout(function() {
        $('.fv__box').addClass('is-show');
      }, 500);
    }, 1000);
  } else {
    // 2回目以降: ローディング画面を即非表示にしてfvアニメーション開始
    $('.loading-screen').addClass('is-hide');
    $('.fv__bgcolor, .fv__img').addClass('is-show');
    setTimeout(function() {
      $('.fv__box').addClass('is-show');
    }, 500);
  }
});


$(function(){
  $(".header__hover").hover(function() {
    $(this).find(".header__menu-drop").stop(true).slideToggle();
    $(this).find(".header__menu--item-top").toggleClass("active");
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  loopedSlides: 6,
  autoplay: {
    delay:2000,
    disableOnInteraction: false,
  },
  speed: 2000,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 48,
  breakpoints: {
    0: {
      slidesPerView: 1.7,
    },
    700: {
      slidesPerView: 1.8,
    },
    1000: {
      slidesPerView: 'auto',
    },
  }
});

$(function() {
  $(".ham").click(function() {
    $(this).toggleClass("active");
    $(".sp__menu--list").toggleClass("active");
    $("body").toggleClass("noscroll");
  });
  $(".sp__menu--item").click(function() {
    $(".ham").removeClass("active");
    $(".sp__menu--list").removeClass("active");
    $("body").removeClass("noscroll");
  });
});

MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
  onShow: (modal) => {
    // モーダルの中のコンテンツを一番上までスクロールさせる
    const container = modal.querySelector('.modal__container');
    if (container) {
      container.scrollTop = 0;
    }
  }
});

// 画面内の要素を監視する設定
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面内に入ったらクラスを付与
      entry.target.classList.add('is-show');
    }
  });
}, {
  rootMargin: '0px 0px -10% 0px' // 画面の下端から10%入ったところで発火
});
const targets = document.querySelectorAll('.section-title, .section-logo, .fv__box');
targets.forEach((target) => {
  observer.observe(target);
});

$(function () {

  const $submitBtn = $("#js-submit")
  $('#form input,#form textarea').on('input change', function () {
   let check = true;
      $('#form [required]').each(function() {
        if ($(this).attr('type') == 'radio') {
          if($('input[name="radio"]:checked').length == 0) {
            check = false;
          }
        }

        else if ($(this).attr('type') == 'checkbox') {
        if (!$(this).prop('checked')) {
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

$submitBtn.on('click', function (event) {
  if ($(this).prop('disabled')) {
    return false;
  }
  event.preventDefault();
    window.location.href = "/middleex/thanks#contact-sub";
  });

});

$(function(){
  $('a[href^="#"]').click(function(){
    var target = $($(this).attr("href")).offset().top;
    $("html, body").animate({scrollTop: target}, 600);
  });
});
