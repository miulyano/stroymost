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


$(".aerial-photography__form").submit(function () {
  $(".alert-success").addClass('el-active');
  $("body").addClass('body-hidden');
  return true;
});

$(".alert-success__block_close-button").click(function () {
  $(".alert-success").removeClass('el-active');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
});

$(".alert-success__overlay").click(function () {
  $(".alert-success").removeClass('el-active');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
});