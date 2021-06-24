ymaps.ready(function () {
    var myMap = new ymaps.Map('map_contact', {
            center: [41.368733, 69.267323],
            zoom: 18,
            controls: []
        }, {
            // searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([41.368733, 69.267323], {
            // hintContent: 'Собственный значок метки',
            // balloonContent: '<h1>school</h1>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://image.flaticon.com/icons/svg/143/143960.svg',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -38]
        })
    myMap.geoObjects
        .add(myPlacemark)
        // .add(myPlacemarkWithContent)
        ;
});