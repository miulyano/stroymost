//Подключение карусели
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  autoplayTimeout:10000,
  autoplayHoverPause:false,
  responsive: {
    0: {
      items: 1
    }
  }
});