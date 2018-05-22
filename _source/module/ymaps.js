//Яндекс Карты через API
ymaps.ready(init);
var myMainMap,
  myMobileMap,
  myPlacemark;

function init(){
  myMainMap = new ymaps.Map("main-cart", {
    center: [55.76, 37.62],
    zoom: 14
  });
  myMobileMap = new ymaps.Map("mobile-cart", {
    center: [55.76, 37.64],
    zoom: 14
  });
  myPlacemark = new ymaps.Placemark([55.76, 37.64], {
    hintContent: 'Мостовые строительные технологии',
    balloonContent: 'г. Москва, ул. Чекистов 28'
  });
  myMobilePlacemark = new ymaps.Placemark([55.76, 37.64], {
    hintContent: 'Мостовые строительные технологии',
    balloonContent: 'г. Москва, ул. Чекистов 28'
  });
  myMainMap.behaviors.disable('scrollZoom');
  myMobileMap.behaviors.disable('scrollZoom');
  myMainMap.geoObjects.add(myPlacemark);
  myMobileMap.geoObjects.add(myMobilePlacemark);
}