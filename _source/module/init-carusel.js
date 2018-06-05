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
    1200: {
      items: 3
    }
  }
});

//Карусель сертификатов
$('.certificates-carusel').owlCarousel({
  loop: true,
  margin: 0,
  responsive: {
    0: {
      items: 1.1,
      dots: true,
      nav: false
    },
    321: {
      items: 1.2,
      dots: true,
      nav: false
    },
    430: {
      items: 1.4,
      dots: true,
      nav: false
    },
    500: {
      items: 1.6,
      dots: true,
      nav: false
    },
    575: {
      items: 2,
      dots: true,
      nav: true
    },
    768: {
      items: 2.5,
      dots: false,
      nav: true
    },
    992: {
      items: 3.5,
      dots: false,
      nav: true
    },
    1200: {
      items: 4,
      dots: false,
      nav: true
    }
  }
});

//Карусель клиентов
$('.customers-carusel').owlCarousel({
  center: true,
  loop: true,
  margin: 22,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.6
    },
    321: {
      items: 1.9
    },
    430: {
      items: 2.2
    },
    500: {
      items: 2.5
    },
    570: {
      items: 2.8
    },
    650: {
      items: 3.1
    },
    720: {
      items: 3.5
    },
    830: {
      items: 4.1
    },
    930: {
      items: 4.5
    },
    1030: {
      items: 5
    },
    1130: {
      items: 5.5
    },
    1230: {
      items: 6
    },
    1330: {
      items: 6.5
    },
    1430: {
      items: 7
    },
    1530: {
      items: 7.5
    },
    1630: {
      items: 8
    },
    1730: {
      items: 8.5
    },
    1830: {
      items: 9
    },
  }
});