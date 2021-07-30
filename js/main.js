console.log('saaaaaaaaaaaaaaaaaaaa')


// $(document).ready(function () {


    $('body').on('click', function (event) {
        if (event.target.className == "filterr" || event.target.className == "inside_filter" || event.target.className == "filter_block4" ||
            event.target.className == "filter_calc_block") {
            $('.select_date_block2').slideUp();
        }
    })
    $('body').on('click', function (event) {
        if (
            typeof event.target.className === 'object' ||
            event.target.className === "block_pickapp_info_bottom" ||
            event.target.className === "select_model" ||
            event.target.className === "button_for_pickup" ||
            event.target.className === "arrow_left" ||
            event.target.className === "name_gazel" ||
            event.target.className === "block_select_pickap open_pickup_menu" ||
            event.target.className === "select_timeee active1"
        ) {
        } else {
            $('.block_select_pickap').fadeOut('fast', function () {
                $('.block_pickapp_info').fadeOut();
            });
            $('.filter_block3_left .select_timeee').removeClass('active1');
            $('.slider_pickup').slick('refresh');
            $('.slider_pickup').removeClass('showing')
        }
    })

    $('body').on('click', '.check_box', function () {
        $(this).toggleClass('check_box_show');
        $(this).parent().find('.checkk').click();
    });

    // PRELOADER
    window.onload = function () {
        $('.preloaderr').addClass('remove_preloader');
        $('.slide_one2').css('opacity', '1');
    };

    $('.calme_form form').on('submit', function () {
        $('.call_me').removeClass('open_call_me');
    });

    // TARIFLARDAN birini tanlaganda
    $('body').on('click', '.select_tarif', function () {
        var data = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        document.getElementById("tarif_id").value = data
        $('.pojelaniya .select_timeee2').toggleClass('active1');
        $('.pojelaniya .select_timeee2 .date_time').text(name)
        $('.select_date_block2').slideToggle();
    });

    $('body').on('click', '.select_option', function () {
        toChange();
    });


    // Pick Up SLider Settings

    $('.slider_pickup').slick({

        dots: false,
        infinite: false,
        speed: 1000,
        prevArrow: $('#arrow_left'),
        nextArrow: $('#arrow_right'),
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    if ($(window).width() < 2000) {
        $('.slider_pickup').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            //$('.block_pickapp_info').removeClass('open_pickup_info');
            var namepickapp = $('.slider_pickup .slick-current .name_pickup p').text();
            var tarifpickapp = $('.slider_pickup .slick-current .text_list_for_pic p').text();
            $('.text_name_pickapp span').text(namepickapp);
            $('.info_tarif_pick ul li p').text(tarifpickapp);
        });
    } else {
    }
    // SLIDE BLOCK FOR SET TIME AND DATA

    $('.select_time .select_timeee').click(function () {
        $(this).toggleClass('active1');

        var d = new Date(),
            h = d.getHours(),
            m = d.getMinutes();
        if (h < 10) h = '0' + h;
        if (m < 10) m = '0' + m;
        $('input[type="time"][value="now"]').each(function () {
            $(this).attr({'value': h + ':' + m});
        });
        $('.select_date_block').slideToggle();
        d = new Date();
        var n = d.toLocaleDateString();
        var minute = d.getMinutes();
        var hour = d.getHours();

        $('#datepicker').val(n).datepicker({
            minDate: new Date(),
            dateFormat: 'yyyy-mm-dd'
        });
        $('.timeee').val(minute + '' + hour);
    });
    
   
    $('.select_btn').click(function () {
        var date = $('#datepicker').val();
        var time = $('#tim').val();
        $('.select_date_block').slideUp();
        $('.select_timeee .date_time').text(' Kun ' + date + ' Soat ' + time);
        date = new Date(date);
        date = date.format("yyyy-mm-dd");
        document.getElementById('vaqti').value = date
        $('.hidden_input1').val(date);
        $('.hidden_input2').val(time);
    });

    // **********************************************************************************************************
    // **********************************************************************************************************
    // **********************************************************************************************************
    function toChange() {

        var fromlat = $("#fromlat").val();
        var fromlng = $("#fromlng").val();
        var tolat = $("#tolat").val();
        var tolng = $("#tolng").val();
        var tariffid = $("#selectedtarifid").val();
        if (fromlat != "" && fromlng != "" && tolat != "" && tolng != "" && tariffid != "") {
            // $.get(
            //     "/api/getcost/" + tariffid + "/" + fromlat + '/' + fromlng + '/' + tolat + '/' + tolng + '/',
            //     onAjaxSuccess
            // );
        }
    }

    $('.pojelaniya .select_timeee2').click(function () {
        $('.pojelaniya .select_timeee2').toggleClass('active1');
        $('.select_date_block2').slideToggle();
    });

    // **********************************************************************************************************
    // **********************************************************************************************************
    // **********************************************************************************************************

    $('.filter_info3').click(function (event) {
        // alert('.qwewqe');
        var marshrut = $('.ymaps-2-1-72-route-panel-input__input').val();
        var adress1 = $('.adresss1').val();
        var adress2 = $('.adresss2').val();
        $('.kuda').val(adress1);
        $('.otkuda').val(adress2);
    });


    $('body').click(function (e) {
        if (e.target.className == 'filterr' || e.target.className == 'inside_filter') {
            $('.select_date_block').slideUp();
        }
    });

    $('.filter_block3_left .select_timeee').click(function () {
        $('.filter_block3_left .select_timeee').toggleClass('active1');
        $('.block_select_pickap').fadeToggle();
        $('.slider_pickup').slick('refresh');
        setTimeout(function () {
            $('.slider_pickup').addClass('showing')
        }, 500);
    });
    $('.ymaps-2-1-73-route-panel-input__location').click(function () {
        alert('click');
    });
    //  SLider Pickapp select
    $('.slider_slider_block').click(function () {
        var _this = $(this);
        var tariffid = _this.data('id');
        $('#selectedtarifid').attr('value', tariffid);
        var arr = _this.data('options');
        $('.pojelaniya .select_timeee2 .date_time').text("Tarif turi")
        $('.settings').html('');
        for (var i = 0; i < arr.length; i++) {
            toChange();
            $('.settings').append(`<li class="select_tarif" data-name='` + arr[i].Name + `' data-id='` + arr[i].Id + `'>
             <div class="li_left">
             <p>` + arr[i].Name + `</p>
             <div class="uzs">` + arr[i].Narxi + ` &nbsp;<span>UZS</span></div>
             </div></div> </li>`);
        }


        // *********************************************

        //shartlar uchun
        $('body').on('click', '.checkk', function () {
            var _this = $(this);
            _this.parent().find('.extra_input').val(_this.data('id'));
        });

        var data = $(this).attr('data-id');
        var pojelaniya = $('.settings li');

        $('.pojelaniya').css('display', 'block');


        // *******************************************************
        // *******************************************************

        // transport tanlanganda tarif turini block qiladigan function
        $(".settings li").each(function () {
            if (data != $(this).attr('data-id')) {
                $(this).css('display', 'flex');
            } else {
                $(this).css('display', 'flex');
            }

        });


        // *******************************************************
        // *******************************************************

        var gazelname = $(this).find('.name_pickup p').text();
        var gazelid = $(this).attr('data-id');

        $('.select_timeee .name_gazel').text(gazelname);

        $('.block_select_pickap').fadeOut('fast', function () {
            $('.block_pickapp_info').fadeOut();
        });

        $('.filter_block3_left .select_timeee').removeClass('active1');

        $('.hidden_input3').val(gazelname);

        $('.slider_pickup').slick('refresh');

        $('.slider_pickup').removeClass('showing')

    });

    // Perevozka textarea Settings

    $('.perevozka').click(function (event) {
        $('.info_send_object').addClass('opan_perevozka');
    });


    $('#callmeMain').click(function () {
        $('.call_me').addClass('open_call_me');
        $('body').addClass('hiddenn')
    });


    // *************** PICK APP INFO SETTINGS  *************** //


    $('.slider_slider_block').hover(function () {
        $('.block_pickapp_info').fadeIn();
    });

    $('.slick-arrow').click(function () {
        
        var namepickapp = $(this).parent().find('.name_pickup p').text();
        var infotarif = $(this).parent().find('.text_list_for_pic p').text();
        
        //$('.text_name_pickapp span').text(namepickapp);
        $('.info_tarif_pick ul li p').text(infotarif);
    }, function () {
        //$('.block_pickapp_info').removeClass('open_pickup_info');
    });

    $('.overlay').click(function (event) {
        $('.info_send_object').removeClass('opan_perevozka');
    });

    $('.sending_block button').click(function (event) {
        var textarea = $('.sending_block textarea').val();
        $('.hidden_input4').val(textarea);
        //$('.perevozka a').text(textarea);
        $('.info_send_object').removeClass('opan_perevozka');
    });

    // Slider Phone
    $('.slide_one').slick({
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider_blue_circle, .slider_text_info'
    });


    $('.slider_blue_circle').slick({
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slide_one, .slider_text_info'
    });

    $('.slider_text_info').slick({
        infinite: false,
        arrows: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slide_one, .slider_blue_circle',
        prevArrow: $('#left'),
        nextArrow: $('#right')
    });


    // Hambureger
    // Look for .hamburger
    // var hamburger = document.querySelector(".hamburger");
    // // On click
    // hamburger.addEventListener("click", function () {
    //     // Toggle class "is-active"
    //     hamburger.classList.toggle("is-active");
    //     // Do something else, like open/close menu
    // });


    $('.hamburger').click(function () {
        $('.nav_menuu').toggleClass('open_menu')
    });


    //  FOR PAGE voditeli
    $('.slide_one2').slick({
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider_blue_circle2, .slider_text_info2'
    });


    $('.slider_blue_circle2').slick({

        infinite: false,

        arrows: false,

        dots: false,

        slidesToShow: 1,

        slidesToScroll: 1,

        asNavFor: '.slide_one2, .slider_text_info2'

    });


    $('.slider_text_info2').slick({

        infinite: false,

        arrows: true,

        dots: false,

        fade: true,

        slidesToShow: 1,

        slidesToScroll: 1,

        asNavFor: '.slide_one2, .slider_blue_circle2',

        prevArrow: $('#left2'),

        nextArrow: $('#right2')

    });


    // ************* TABS SETTINGS ********************


    $('.infomartion_tabs_links ul li').click(function () {

        var tab_id = $(this).attr('data-tab');

        $(this).addClass('active_tabs')

        $('.infomartion_tabs_links ul li').removeClass('active_tabs');

        $(this).addClass('active_tabs')

        $('.infomartion_tabs_links ul li').removeClass('current');

        $('.tab-content').removeClass('current');


        $(this).addClass('current');

        $("#" + tab_id).addClass('current');

    })

    // *******************************************************************


    $('#focus_input').focus();

    $('.btn_close_callme, .overlay2').click(function () {

        $('.call_me').removeClass('open_call_me')

        $('body').removeClass('hiddenn')
        $('.ymaps-2-1-73-search__suggest.ymaps-2-1-73-search__suggest').removeClass('autoname')
        $('.call_me2').removeClass('call_me2_show');

    })

    $('.overlay22').click(function (event) {
        $('.call_me2').removeClass('call_me2_show');
    });


    function myfunction() {

        $('.ymaps-2-1-73-route-pin__label:eq(1) > .ymaps-2-1-73-route-pin__label-b').trigger("click");

    }


    setInterval(function () {

        myfunction();


    }, 100);


    $('#map').on('mousemove', function () {

        // afterLoadMap2();

    });

    $('#map').on('mouseleave', function () {
    });

    // $("#card").hover(function () {
    //   $("#rasm").attr('src', './images/shield2.svg');
    // }, function () {
    //   $("#rasm").attr('src', './images/shield1.svg');
    // })
    // $("#card1").hover(function () {
    //   $("#rasm1").attr('src', './images/Vector2.svg');
    // }, function () {
    //   $("#rasm1").attr('src', './images/Vector1.svg');
    // })
    // $("#card2").hover(function () {
    //   $("#rasm2").attr('src', './images/salary2.svg');
    // }, function () {
    //   $("#rasm2").attr('src', './images/salary1.svg');
    // })
    // $("#card3").hover(function () {
    //   $("#rasm3").attr('src', './images/web-search-engine2.svg');
    // }, function () {
    //   $("#rasm3").attr('src', './images/web-search-engine1.svg');
    // })
    // $("#card4").hover(function () {
    //   $("#rasm4").attr('src', './images/shield2.svg');
    // }, function () {
    //   $("#rasm4").attr('src', './images/shield1.svg');
    // })
    // $("#card5").hover(function () {
    //   $("#rasm5").attr('src', './images/planning2.svg');
    // }, function () {
    //   $("#rasm5").attr('src', './images/planning1.svg');
    // });

    $(".link1").click(function () {
        $("html,body").animate({
            scrollTop: $(".header").offset().top
        }, 1000)
    });

    $(".link2").click(function () {
        $("html,body").animate({
            scrollTop: $(".about").offset().top
        }, 1000)
    });
    $(".link3").click(function () {
        $("html,body").animate({
            scrollTop: $(".solutionsForBuss").offset().top
        }, 1000)
    });
    $(".link4").click(function () {
        $("html,body").animate({
            scrollTop: $(".service").offset().top
        }, 1000)
    });
    $(".link5").click(function () {
        $("html,body").animate({
            scrollTop: $(".whyWe").offset().top
        }, 1000)
    });
    $(".link6").click(function () {
        $("html,body").animate({
            scrollTop: $(".portfolio").offset().top
        }, 1000)
    });
    $(".link7").click(function () {
        $("html,body").animate({
            scrollTop: $(".projects").offset().top
        }, 1000)
    });
    $(".link8").click(function () {
        $("html,body").animate({
            scrollTop: $(".contact").offset().top
        }, 1000)
    });


    $("div[class^='solution_card']").hover(function () {
        let content = $("." + this.id);
        switch (this.id) {
            case 'scard_first':
                $(".leftScrollBtn").css("margin-top", "30px");
                $(".scard_content > div").hide();
                content.show();
                break;
            case 'scard_second':
                $(".leftScrollBtn").css("margin-top", "155px");
                $(".scard_content > div").hide();
                content.show();
                break;
            case 'scard_third':
                $(".leftScrollBtn").css("margin-top", "280px");
                $(".scard_content > div").hide();
                content.show();
                break;
            case 'scard_fourth':
                $(".leftScrollBtn").css("margin-top", "405px");
                $(".scard_content > div").hide();
                content.show();
                break;
            default:
                ;
        }
    });
// });


$('.brand-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});


$('.select_option').on('change', function () {
    toChange()
});


function trigger() {
    $('.ymaps-2-1-73-route-panel__clear').trigger('click');
}


function file() {
    // Span
    var span = document.getElementsByClassName('upload-path');
    // Button
    var uploader = document.getElementsByName('upload');
    // On change
    for (item in uploader) {
        // Detect changes
        uploader[item].onchange = function () {
            // Echo filename in span
            span[0].innerHTML = this.files[0].name;
        }
    }
}

file();

$('.text_tabs button').click(function (event) {
    var name = $(this).parent().find('span').text();
    $('#tab_name').val(name);
    $('.call_me2').addClass('call_me2_show');


});



// =========================




