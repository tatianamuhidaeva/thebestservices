if (document.querySelector('#ground-map-wrap') != null) {
  ymaps.ready(init);
}

function init() {
  // Создание карты.    
  var myMap = new ymaps.Map("ground-map-wrap", {
    center: [67.640644, 53.045751],
    zoom: 13
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject1 = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [67.640644, 53.045751], // координаты точки
    },
    preset: 'islands#blueHomeIcon',
    properties: {
      // clusterCaption: 'Геообъект № '+(i+1),
      balloonContentBody: '<img src="assets/images/static/logo.svg" height="62" width="145"><br/>' +
        'Указано примерное местоположение. <br/>' +
        'Кадастровый номер: 83:00:050702:67. <br/>' +
        'Площадь: 2 053 кв. м.<br/>' +
        'Категория земель: Земли населённых пунктов.<br/>' +
        'Разрешенное использование: под строительство "Торгового комплекса широкого профиля"<br/>' +
        'Кадастровая стоимость: 7 360 140,80 руб<br/>' +
        'Контакты: Кушнир Михаил Андреевич, Управление имущественных и земельных отношений: <a href="tel:2-34-01">2-34-01</a>, <a href="tel:2-34-01">2-13-51</a>, <a href="mailto:mkushnir@ogvnao.ru">mkushnir@ogvnao.ru</a>,<br/>',
    }
  });
  var myGeoObject2 = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [67.640644, 53.025751], // координаты точки
    },
    preset: 'islands#blueHomeIcon',
    properties: {
      // clusterCaption: 'Геообъект № '+(i+1),
      balloonContentBody: '<img src="assets/images/static/logo.svg" height="62" width="145"><br/>' +
        'Указано примерное местоположение. <br/>' +
        'Кадастровый номер: 83:00:050702:67. <br/>' +
        'Площадь: 2 053 кв. м.<br/>' +
        'Категория земель: Земли населённых пунктов.<br/>' +
        'Разрешенное использование: под строительство "Торгового комплекса широкого профиля"<br/>' +
        'Кадастровая стоимость: 7 360 140,80 руб<br/>' +
        'Контакты: Кушнир Михаил Андреевич, Управление имущественных и земельных отношений: <a href="tel:2-34-01">2-34-01</a>, <a href="tel:2-34-01">2-13-51</a>, <a href="mailto:mkushnir@ogvnao.ru">mkushnir@ogvnao.ru</a>,<br/>',
    }
  });

  // Размещение геообъекта на карте.

  myMap.geoObjects.add(myGeoObject1).add(myGeoObject2);

}