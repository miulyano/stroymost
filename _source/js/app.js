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