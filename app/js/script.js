//Скрипт для формы регистрации
$('.login-reg').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

//Скрипт для слайдера

    $(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + '' + '</span>';
      }
    })
  });

//Скрипт для сертификатов
$(document).ready(function() {
	$('.certificate').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
});

//Бургер меню


var $menu = $("#my-menu").mmenu({
  navbar: {
      title: "<div class='logo-text mmenu-logo'>PENO<span>BOARD</span>"
  },
  navbars: [{
      position: "top",
      content: ["prev", "title"]
  }],

  offCanvas: {
    position: "right"
  },

  extensions: [
    "pagedim-black"
  ]

});
var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
      $icon.addClass( "is-active" );
});
API.bind( "close:finish", function() {
      $icon.removeClass( "is-active" );
});

//Валидация


  function loginValidation() {
    var error = document.getElementsByClassName("login-error");
    var emailValidation = document.getElementById("login-mail").value;
    var passValidation = document.getElementById("login-password").value;
    var i;
    for (i = 0; i < error.length; i++) {
      error[i].style.display = "none";
    }
    if (validator.isEmpty(emailValidation) == true) {
      error[0].style.display = "block";
    }
    else if (validator.isEmail(emailValidation) == false) {
      error[1].style.display = "block";
    }

    if (validator.isEmpty(passValidation) == true) {
      error[2].style.display = "block";
    }

  }


  function regValidation() {
    var error = document.getElementsByClassName("reg-error");
    var emailValidation = document.getElementById("reg-mail").value;
    var passValidation = document.getElementById("reg-password").value;
    var i;
    for (i = 0; i < error.length; i++) {
      error[i].style.display = "none";
    }
    if (validator.isEmpty(emailValidation) == true) {
      error[0].style.display = "block";
    }
    else if (validator.isEmail(emailValidation) == false) {
      error[1].style.display = "block";
    }

    if (validator.isEmpty(passValidation) == true) {
      error[2].style.display = "block";
    }

    else if (validator.isLength(passValidation, {min: 4}) == false) {
      error[3].style.display = "block";
    }

  }

  function searchValidation() {
    var error = document.getElementsByClassName("search-error");
    var searchValidation = document.getElementById("search").value;
    var i;
    for (i = 0; i < error.length; i++) {
      error[i].style.display = "none";
    }
    if (validator.isEmpty(searchValidation) == true) {
      error[0].style.display = "block";
    }
    else if (validator.isLength(searchValidation, {min: 3}) == false) {
      error[1].style.display = "block";
    }

  }
//Гугл карта
var map;

function initMap() {
  var mapCanvas = document.getElementById("googleMap");
  var myCenter = {lat:46.671, lng:32.656};
  var markerCenter = {lat:46.669, lng:32.692};
  var mapOptions= {
    center: myCenter,
    zoom:13,
    disableDefaultUI: true
  };
  var marker=new google.maps.Marker({
    position: markerCenter,
    map: map,
    icon: 'images/map/marker.png'
  });

  map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);
}




//Анимация
$(function(){
  $('#yspeh-animation-wrapper div').inview({
    'viewFactor': 0.3,
  });
});
