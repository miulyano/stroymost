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
  $("#contacts-form-tel").mask("+7(999) 999-99-99");
  $("#calculator-tel").mask("+7(999) 999-99-99");
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

$(".contacts-form").submit(function () {
  $(".alert-success").addClass('el_flex-active');
  $("body").addClass('body-hidden');
  return true;
});

$(".calculator__form").submit(function () {
  $(".alert-success").addClass('el_flex-active');
  $("body").addClass('body-hidden');
  return true;
});

//закрытие алерта
$(".alert-success__block_close-button").click(function () {
  $(".alert-success").removeClass('el_flex-active');
  $('.aerial-photography__form_input').removeClass('required');
  $('.contacts-form__item').removeClass('required');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
  if ($(".contacts-form__item").val() !== ('')) {
    $(".contacts-form__item").val('')
  }
});

$(".alert-success__overlay").click(function () {
  $(".alert-success").removeClass('el_flex-active');
  $('.aerial-photography__form_input').removeClass('required');
  $('.contacts-form__item').removeClass('required');
  $("body").removeClass('body-hidden');
  if ($(".aerial-photography__form_input").val() !== ('')) {
    $(".aerial-photography__form_input").val('')
  }
  if ($(".contacts-form__item").val() !== ('')) {
    $(".contacts-form__item").val('')
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

$(function() {
  $(".price__button").click(function() {
    $(".modal-form").addClass('el_flex-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".services-item__button").click(function() {
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

$(function() {
  $("#certificates-6").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-1").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-7").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-2").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-8").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-3").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $("#certificates-9").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-4").addClass('el_flex-active');
    $("body").addClass('body-hidden');
  })
});

$(function() {
  $(".customers-page__block_gratitudes-item").click(function(e) {
    e.preventDefault();
    $("#modal__gratitudes-1").addClass('el_flex-active');
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
    $("#modal__gratitudes-1").removeClass('el_flex-active');
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
    $("#modal__gratitudes-1").removeClass('el_flex-active');
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
    $("#modal__gratitudes-1").removeClass('el_flex-active');
    $(".modal-form").removeClass('el_flex-active');
    $('.modal-form__block_active').removeClass('required');
    $('.aerial-photography__form_input').removeClass('required');
    $('.contacts-form__item').removeClass('required');
    $(".alert-success").removeClass('el_flex-active');
    $('.contacts-form__item').removeClass('required');
    if ($(".aerial-photography__form_input").val() !== ('')) {
      $(".aerial-photography__form_input").val('')
    }
    if ($(".contacts-form__item").val() !== ('')) {
      $(".contacts-form__item").val('')
    }
    $("body").removeClass('body-hidden');
  }
});

//aside-bar
$(function() {
  $(".aside-menu__list_item").click(function(e) {
    //e.preventDefault();
    if($(this).find(".aside-menu__sublist").hasClass('el-active')) {
      $(this).find(".aside-menu__sublist").removeClass('el-active').removeAttr( 'style' ).css('display', 'none');
    } else {
      $(this).find(".aside-menu__sublist").addClass('el-active').removeAttr( 'style' ).css('display', 'block');
    }
  })
});

//file-input
( function( $, window, document, undefined )
{
  $( '.inputfile' ).each( function()
  {
    var $input	 = $( this ),
      $label	 = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( '.upload-title' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
      .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
      .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
})( jQuery, window, document );


// Custom file drop extension
$.fn.extend({
  filedrop: function (options) {
    var defaults = {
      callback: null
    };
    options = $.extend(defaults, options);
    return this.each(function () {
      var files = [];
      var $this = $(this);

      // Stop default browser actions
      $this.bind('dragover dragleave', function (event) {
        event.stopPropagation();
        event.preventDefault()
      });

      // Catch drop event
      $this.bind('drop', function (event) {
        // Stop default browser actions
        event.stopPropagation();
        event.preventDefault();

        // Get all files that are dropped
        files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files;

        // Convert uploaded file to data URL and pass trought callback
        if (options.callback) {
          for (i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (event) {
              options.callback(event.target.result)
            };
            reader.readAsDataURL(files[0])
          }
        }
        return false
      })
    })
  }
});

// Event listener filedropper
$('#dropZone').filedrop({
  callback: function (fileEncryptedData) {
    console.log(fileEncryptedData);
  }
});

//выделение цветом зоны #dropZone
$(document).ready(function($) {
  $('#dropZone').on({
    dragenter: function() {
      $(this).addClass('dropzone-active');
    },
    dragleave: function() {
      $(this).removeClass('dropzone-active');
    }
  });
});

//смещение тултипа с клиентами
$(function() {
  $(".customers__block_item").hover(function() {
    console.log(($(this).find(".customers__tooltip").offset()).left);
    if(($(this).find(".customers__tooltip").offset()).left > ($(window).width() - $(this).find(".customers__tooltip").outerWidth())) {
      $(this).find(".customers__tooltip").addClass('right-offset');
    } else {
      $(this).find(".customers__tooltip").removeClass('right-offset');
    }
  })
});