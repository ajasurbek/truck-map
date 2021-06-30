var control;
var multiRoutePromise;
var suggestView;
var suggestView2;
var routeFrom = document.getElementById('origin-input').value;
var routeTo = document.getElementById('destination-input').value;

function mygeolocs(evene) {
    var length = $(".ymaps-2-1-75-route-pin__text").length;
    var textloc = $(".ymaps-2-1-75-route-pin__text").text();
    if (!length === 0) {
        $('#origin-input').val(textloc);
    }
}

function updateOrigins() {
    var a = $(".ymaps-2-1-75-route-pin__text").first();
    var b = $(".ymaps-2-1-75-route-pin__text").last();
    if (!a.length === 0) {
        $('#origin-input').val(a.text());
    }
    if (!b.length === 0) {
        $('#destination-input').val(b.text());
    }
}

function mygeoloc(event) {
    control.routePanel.geolocate('from');
    control.state.set('expanded', true);
    setTimeout(mygeolocs, 2000);
}

function debounce(f, ms) {
    let timer = null;
    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
}

function changedOrig() {

    setTimeout(function () {
        routeFrom = document.getElementById('origin-input').value;
        routeTo = document.getElementById('destination-input').value;
        if (routeFrom === "" || routeTo === "") {
            return false;
        }
        control.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            from: ' ' + routeFrom,
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            // Адрес или координаты пункта назначения.
            to: '.' + routeTo
        });

        // Создаем на основе существующей модели мультимаршрут.
        multiRoutePromise.then(function (multiRoute) {
            // Подписка на событие обновления мультимаршрута.
            multiRoute.model.events.add('requestsuccess', function () {
                var activeRoute = multiRoute.getActiveRoute();
                var length = multiRoute.getActiveRoute().properties.get("distance").text
                document.getElementById("distance-text-uz").innerText = "Umumiy masofa: " + length;
                document.getElementById("distance-text-ru").innerText = "дистанция: " + length;
                var myGeocoder = ymaps.geocode(control.routePanel.state.get("from"));
                res = myGeocoder.then(
                    function (result) {
                        var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                        $('#fromlat').attr('value', coordinates[0]);
                        $('#fromlng').attr('value', coordinates[1]);
                    }
                );
                var myGeocoder = ymaps.geocode(control.routePanel.state.get("to"));
                res2 = myGeocoder.then(
                    function (result) {
                        var coordinates2 = result.geoObjects.get(0).geometry.getCoordinates();
                        $('#tolat').attr('value', coordinates2[0]);
                        $('#tolng').attr('value', coordinates2[1]);
                    }
                );
                updateOrigins();
            });
        }, function (err) {
            // console.log(err);
        });

        var myGeocoder = ymaps.geocode(routeFrom);
        res = myGeocoder.then(
            function (result) {
                var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                $('#fromlat').attr('value', coordinates[0]);
                $('#fromlng').attr('value', coordinates[1]);
                return coordinates[0];
            }
        );


        var myGeocoder = ymaps.geocode(routeTo);
        res2 = myGeocoder.then(
            function (result) {
                var coordinates2 = result.geoObjects.get(0).geometry.getCoordinates();
                $('#tolat').attr('value', coordinates2[0]);
                $('#tolng').attr('value', coordinates2[1]);
                return coordinates2;
            },
            function (err) {
                //alert('Ошибка');
            }
        );
        updateOrigins();
    }, 200);

}

var changed = debounce(changedOrig, 300);

function onAjaxSuccess(data) {
    var all = JSON.parse(data);
    var lol = 0;
    $(".checkk").each(function () {
        if ($(this).is(':checked')) {
            lol += parseInt($(this).attr('data-price'));
        }
    });
    $('.nummm p').text(Number(all.summary_cost) + lol);
}


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [41.31257, 69.279050],
        zoom: 11,
        // Добавим панель маршрутизации.
        controls: ['routePanelControl', 'zoomControl']
    });
   

   

    $(".ymaps-2-1-75-controls__toolbar").attr('style', 'display:none');
    $(".ymaps-2-1-75-controls__bottom").attr('style', 'display:none');


    control = myMap.controls.get('routePanelControl');
    multiRoutePromise = control.routePanel.getRouteAsync();
    myMap.behaviors.disable('scrollZoom');
    control.options.set({
        autofocus: false
    });

    var suggestView = new ymaps.SuggestView('origin-input', {
        provider: {
            suggest: (function (request, options) {
                return ymaps.suggest("Uzbekistan" + ", " + request);
            })
        }
    });

    var suggestView2 = new ymaps.SuggestView('destination-input', {
        provider: {
            suggest: (function (request, options) {
                return ymaps.suggest("Uzbekistan" + ", " + request);
            })
        }
    });
    
});

