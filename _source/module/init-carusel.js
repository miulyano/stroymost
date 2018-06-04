//Карусель проектов
$('.projects-carusel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    }
  }
});

//Карусель новостей
$('.news-carusel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

//Карусель сертификатов
$('.certificates-carusel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    720: {
      items: 2
    },
    960: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

//Карусель клиентов
$('.customers-carusel').owlCarousel({
  loop: true,
  margin: 22,
  nav: true,
  dots: false,
  responsive: {
    1000: {
      items: 9
    }
  }
});