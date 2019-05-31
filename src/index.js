import dayNightSwitcher from "./scripts/dayNightSwitcher";
import getHeaderSlider from "./scripts/headerSlider";
import initIndexPage from "./scripts/initIndexPage";
import getHeader from "./scripts/header/getHeader";
import initAddPage from "./scripts/initAddPage";
import initAllPage from "./scripts/initAllPage";
import initSinglePage from "./scripts/initSinglepage";


dayNightSwitcher();
getHeaderSlider();



$(function(){

    getHeader();

    if (location.hash == "" || location.hash == "#index"){
        initIndexPage();
    }else if(location.hash == "#all"){
        initAllPage();
    }else if(location.hash == "#single"){
        initSinglePage();
    }else if (location.hash == "#add") {
        initAddPage();
    }


    $(window).on('hashchange', function (event) {
        if (location.hash == '#index'){
            initIndexPage();
        }else if (location.hash == "#all"){
            initAllPage();
        }else if (location.hash == "#single"){
            initSinglePage();
        }else if (location.hash == "#add"){
            initAddPage();
        }
    });


    let singleCarMainImg = $('.single_car_gallery_main_img>img');
    $('.single_car_gallery_additional_thumbnails img, .single_car_gallery_main_thumbnails img').click(function(){

        if ($(this).css('filter') == "grayscale(0)"){
            return;
        }

        $('.single_car_gallery_additional_thumbnails img, .single_car_gallery_main_thumbnails img').css('filter', 'grayscale(1)');
        $(this).css('filter', 'grayscale(0)');

        let thumbNailSource = $(this).attr('src').split('/');
        thumbNailSource[thumbNailSource.indexOf('thumbnails')] = 'main_images';

        $(singleCarMainImg).fadeOut(0);
        $(singleCarMainImg).attr('src', thumbNailSource.join('/'));
        $(singleCarMainImg).fadeIn(500);

    });

    let scaledCarMainImg = $('.scaled_car_main_img');
    $('.single_car_gallery_main_img>img').hover(
        function(){
            if ($(window).width() < 900) return;
            $(scaledCarMainImg).html(this.outerHTML);
            $('.scaled_car_main_img img').css('transform-origin', 'top left').css('transform', 'scale(2)');
            $(scaledCarMainImg).fadeIn(500);

        },
        function(){
            $(scaledCarMainImg).fadeOut(500);
        }
    );



    $('#new_lot_form select').css('width', $('#new_lot_form input[type="text"]:first').outerWidth()+'px');
    $('#new_lot_form input[type="datetime-local"]').css({
        'width':$('#new_lot_form input[type="text"]:first').outerWidth()+'px',
        'box-sizing':'border-box'
    });

    $('#new_lot_form_car_sale_date').change(function () {
        console.log($(this).val());
    });

    $('#new_lot_form_car_photo1').change(function () {
        console.log(this.name);
    });



        if($(window).width() < 1170){
            $('.main_menu2').append($('.menu_and_search_block>nav').detach());

        }

        let spans = [];
        $('.vehicles_on_sale').find('span').each(function () {
            spans.push($(this).html());
        });

        if ($(window).width() < 390){
            $('.vehicles_on_sale').html('<p>Vehicles on sale </p>');
            for (let i = 0; i < spans.length; i++){
                $('.vehicles_on_sale p').append("<span>"+spans[i]+"</span>");
            }
        }


let menu_item = $('header .header_logo_menu_search_block .menu_and_search_block .main_menu>ul li a, header .main_menu2 .main_menu>ul li a');
            $(menu_item).each(function () {

                if ($(this).siblings('ul').length > 0){

                    $(this).click(function (event) {
                        event.preventDefault();
                        if ($(this).siblings('ul').css('display') == 'none'){
                            $(this).parent('li').siblings('li').find('ul').css('display', 'none');
                            $(this).siblings('ul').slideDown(500);

                        }else if ($(this).siblings('ul').css('display') == 'block'){
                            if ($(this).siblings('ul').find('li').find('ul').css('display') == 'block'){
                                $(this).siblings('ul').find('li').find('ul').css('display', 'none');
                            }
                            $(this).siblings('ul').slideUp(500);
                        }
                    });
                }
            });

            $('.main_menu_toggler').click(function(){
                if ($('.main_menu2').css('display') == 'none'){
                    $('.main_menu2').slideDown(800);
                    $(this).find('img').fadeOut(400);
                    setTimeout(()=>{$(this).find('img').attr('src', 'images/close_menu.png')}, 400);
                    $(this).find('img').fadeIn(400);
                }else{
                    $('.main_menu2').slideUp(800);
                    $(this).find('img').fadeOut(400);
                    setTimeout(()=>{$(this).find('img').attr('src', 'images/menu_btn.png')}, 400);
                    $(this).find('img').fadeIn(400);
                }
            });


            let numberOfHowItWorksSections = $('.how_it_works_sections section').length-1;
            let firstOfHowItWorksSections = $('.how_it_works_sections section:first');
            let howItWorksBubbles = $('.how_it_works_down_bubbles');

            for (let i = 0; i <= numberOfHowItWorksSections; i++){
                $(howItWorksBubbles).append("<p></p>");
            }

            let bubbleActive = 0;
            $(howItWorksBubbles).children().eq(bubbleActive).addClass('active_how_it_works_section');

            $('.how_it_works_right_switcher').click(function () {

                bubbleActive++;
                if (parseInt($(firstOfHowItWorksSections).css('margin-left')) == ("-"+$(firstOfHowItWorksSections).width() * numberOfHowItWorksSections)){

                    $(firstOfHowItWorksSections).animate({
                        'margin-left' : 0
                    }, 400);
                    $(howItWorksBubbles).children('p').removeClass('active_how_it_works_section');
                    $(howItWorksBubbles).children('p').eq(0).addClass('active_how_it_works_section');
                    bubbleActive = 0;
                    return;
                }
                $(firstOfHowItWorksSections).animate({
                    'margin-left' : "+=-100%"
                }, 400);
                $(howItWorksBubbles).children('p').removeClass('active_how_it_works_section');
                $(howItWorksBubbles).children('p').eq(bubbleActive).addClass('active_how_it_works_section');

            });


    $('.how_it_works_left_switcher').click(function () {

        if (parseInt($(firstOfHowItWorksSections).css('margin-left')) == 0){
            $(firstOfHowItWorksSections).animate({
                'margin-left' : "-"+ numberOfHowItWorksSections*100 + "%"
            }, 400);
            bubbleActive = numberOfHowItWorksSections;
            $(howItWorksBubbles).children('p').removeClass('active_how_it_works_section');
            $(howItWorksBubbles).children('p').eq(bubbleActive).addClass('active_how_it_works_section');
            return;
        }
        bubbleActive--;
        $(howItWorksBubbles).children('p').removeClass('active_how_it_works_section');
        $(howItWorksBubbles).children('p').eq(bubbleActive).addClass('active_how_it_works_section');
        $(firstOfHowItWorksSections).animate({
            'margin-left' : "+=100%"
        }, 400);
    });


    $(howItWorksBubbles).children('p:first').addClass('active_how_it_works_section');
    $(howItWorksBubbles).children('p').click(function () {
        bubbleActive = $(this).index();
            $(howItWorksBubbles).children('p').removeClass('active_how_it_works_section');
            $(this).addClass('active_how_it_works_section');
        $(firstOfHowItWorksSections).animate({
            'margin-left' : "-"+bubbleActive*100+"%"
        }, 400);
    });

    $(howItWorksBubbles).css('left', 0.5*$(firstOfHowItWorksSections).width() - 0.5*$(howItWorksBubbles).width() + 50);
    $(window).resize(function () {
        $(howItWorksBubbles).css('left', 0.5*$(firstOfHowItWorksSections).width() - 0.5*$(howItWorksBubbles).width() + 50);
    });


                $('.add_lot_lotList_item_details_show_car_info').click(function () {
                    let currCar = $(this);
                    if ($(this).siblings($('.add_lot_lotList_item_details_info')).eq(1).css('display') == 'none'){

                        $(this).siblings($('.add_lot_lotList_item_details_info')).eq(1).slideDown(1000, function () {
                            $(currCar).css('background-image', 'url("./images/hide_car_info_up_arr.png")');
                            $(currCar).html('<p>Hide car info</p>');
                            $(currCar).siblings('.add_lot_lotList_item_details_hide_car_info').fadeIn();
                        });

                    }else{
                        $(this).siblings($('.add_lot_lotList_item_details_info')).eq(1).slideUp(1000, function () {
                            $(currCar).css('background-image', 'url("./images/show_car_info_down_arr.png")');
                            $(currCar).html('<p>Show car info</p>');
                        });
                        $(this).siblings('.add_lot_lotList_item_details_hide_car_info').fadeOut();
                    }

                });

            $('.add_lot_lotList_item_details_hide_car_info').click(function () {
                $(this).fadeOut();
                $(this).siblings('.add_lot_lotList_item_details_info').slideUp(1000);
                $(this).siblings('.add_lot_lotList_item_details_show_car_info').css('background-image', 'url("./images/show_car_info_down_arr.png")');
                $(this).siblings('.add_lot_lotList_item_details_show_car_info').html('<p>Show car info</p>');
            });



            if ($(window).width() <= 600){
                $('.car_item_info h3').find('span').wrap('<p></p>');
            }

            console.log("privet");

});