import dayNightSwitcher from "./scripts/dayNightSwitcher";
import getHeaderSlider from "./scripts/header/headerSlider";
import initIndexPage from "./scripts/index/initIndexPage";
import getHeader from "./scripts/header/getHeader";
import initAddPage from "./scripts/addLot/initAddPage";
import initAllPage from "./scripts/allLots/initAllPage";
import initSinglePage from "./scripts/single/initSinglepage";
import initSearchPage from "./scripts/search/initSearchPage";
import initContacts from "./scripts/contacts/initContacts";


dayNightSwitcher();
getHeaderSlider();



$(function(){

    getHeader();

    if (location.hash == "" || location.hash == "#index"){
        initIndexPage();
    }else if(location.hash == "#all"){
        initAllPage();
    }else if(/^#car\d{8}$/.test(location.hash)){
        initSinglePage();
    }else if (location.hash == "#add") {
        initAddPage();
    }else if (location.hash == "#search"){
        initSearchPage();
    }else if(location.hash == "#contacts"){
        initContacts();
    }


    $(window).on('hashchange', function (event) {
        if (location.hash == '#index'){
            initIndexPage();
        }else if (location.hash == "#all"){
            initAllPage();
        }else if (/^#car\d{8}$/.test(location.hash)){
            $(window).scrollTop($('main').offset().top);
            initSinglePage();
        }else if (location.hash == "#add"){
            initAddPage();
        }else if (location.hash == "#search"){
            initSearchPage();
        }else if(location.hash == "#contacts"){
            initContacts();
        }
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


        let menu_item = $('' +
            'header .header_logo_menu_search_block .menu_and_search_block .main_menu>ul li a, ' +
            'header .main_menu2 .main_menu>ul li a');
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

});