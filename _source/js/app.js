//открытие поиска
$(function() {
  $(".header-index__company-info_search-active").click(function() {
    var search = $(".header-index__company-info_search-form");
    search.addClass('el-active');
    $(".header-index__company-info_search-input").focus();
  })
});

$(function($){
  $(document).mouseup(function (e){
    var search = $(".header-index__company-info_search-form");
    if (!search.is(e.target)
      && search.has(e.target).length === 0) {
      search.removeClass('el-active');
    }
  });
});

//маска телефона
$(function() {
  $("#aerial-photography__tel").mask("+7(999) 999-99-99");
  $("#modal-tel").mask("+7(999) 999-99-99");
});

//открытие мобильного меню
$(function() {
  $(".menu__button").click(function() {
    $(".menu").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

//закрытие мобильного меню
$(function() {
  $(".menu__button_close").click(function() {
    $(".menu").removeClass('el_flex-active');
    $("body").removeClass('body-hidden');
  })
});

//показ алерта
$(".aerial-photography__form").submit(function () {
  $(".alert-success").addClass('el_flex-active');
  $("body").addClass('body-hidden');
  return true;
});

//закрытие алерта
$(".alert-success__block_close-button").click(function () {
  $(".alert-success").removeClass('el_flex-active');
  $('.aerial-photography__form_input').removeClass('required');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
});

$(".alert-success__overlay").click(function () {
  $(".alert-success").removeClass('el_flex-active');
  $('.aerial-photography__form_input').removeClass('required');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
});

//Открытие модалки
$(function() {
  $("#modal-button").click(function() {
    $(".modal-form").addClass('el_flex-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

//Закрытие модалки
$(function() {
  $(".modal-form__block_close-button").click(function() {
    $(".modal-form").removeClass('el_flex-active');
    $('.modal-form__block_active').removeClass('required');
    $("body").removeClass('body-hidden');
  })
});

$(".modal-form__overlay").click(function () {
  $(".modal-form").removeClass('el_flex-active');
  $('.modal-form__block_active').removeClass('required');
  $("body").removeClass('body-hidden');
});

//валидация формы
$('[type="submit"]').on('click', function () {
  $(this)
    .closest('form')
    .find('[required]')
    .addClass('required');
});

//открытие модалок с сертификатами
$(function() {
  $("#certificates-1").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-1").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-2").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-2").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-3").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-3").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-4").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-4").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-5").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-5").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

//закрытие модалок с сертификатами
$(function() {
  $(".modal__overlay").click(function() {
    $("#modal__certificates-1").removeClass('el_flex-active');
    $("#modal__certificates-2").removeClass('el_flex-active');
    $("#modal__certificates-3").removeClass('el_flex-active');
    $("#modal__certificates-4").removeClass('el_flex-active');
    $("#modal__certificates-5").removeClass('el_flex-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__block_close").click(function() {
    $("#modal__certificates-1").removeClass('el_flex-active');
    $("#modal__certificates-2").removeClass('el_flex-active');
    $("#modal__certificates-3").removeClass('el_flex-active');
    $("#modal__certificates-4").removeClass('el_flex-active');
    $("#modal__certificates-5").removeClass('el_flex-active');
    $("body").removeClass('body-hidden');
  })
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $("#modal__certificates-1").removeClass('el_flex-active');
    $("#modal__certificates-2").removeClass('el_flex-active');
    $("#modal__certificates-3").removeClass('el_flex-active');
    $("#modal__certificates-4").removeClass('el_flex-active');
    $("#modal__certificates-5").removeClass('el_flex-active');
    $(".modal-form").removeClass('el_flex-active');
    $('.modal-form__block_active').removeClass('required');
    $(".alert-success").removeClass('el_flex-active');
    $('.aerial-photography__form_input').removeClass('required');
    if ($(".aerial-photography__form_input").val() !== ('')) {
      $(".aerial-photography__form_input").val('')
    }
    $("body").removeClass('body-hidden');
  }
});