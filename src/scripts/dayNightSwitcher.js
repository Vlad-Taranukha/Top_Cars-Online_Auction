function dayNightSwitcher() {

    let dayNightFlag;
    let now = new Date();
    let nowTime = now.getHours();
    
    function setNightTheme() {
        $('.leftArrLight, .leftSmallLight, .leftBigLight, .rightBigLight, .rightSmallLight, .rightArrLight').fadeIn(500);
        $('main').addClass('main_night');
        $('.vehicle_finder_form, .search_by_vin_form').removeClass('vehicle_finder_form_day').addClass('vehicle_finder_form_night');
        $('.featured_cars').removeClass('featured_cars_day').addClass('featured_cars_night');
        $('.view_all_cars').removeClass('view_all_cars_day').addClass('view_all_cars_night');
        $('.how_it_works').removeClass('how_it_works_day').addClass('how_it_works_night');
        $('.newsletter').removeClass('newsletter_day').addClass('newsletter_night');
        $('.all_cars_wrapper').removeClass('all_cars_wrapper_day').addClass('all_cars_wrapper_night');
        $('.single_car_wrapper').removeClass('single_car_wrapper_day').addClass('single_car_wrapper_night');
        $('.view_similar_vehicles_wrapper').removeClass('view_similar_vehicles_wrapper_day').addClass('view_similar_vehicles_wrapper_night');
        $('.add_lot_wrapper').removeClass('add_lot_wrapper_day').addClass('add_lot_wrapper_night');
        $('header').removeClass('header_day').addClass('header_night');
        let menuItemLiA = $('' +
            'header .header_logo_menu_search_block .menu_and_search_block .main_menu ul li a,' +
            'header .main_menu2 .main_menu ul li a');
        menuItemLiA.each(function () {
            if ($(this).siblings('ul').length > 0){
                //$(this).siblings('ul').children('li').children('ul').css('left', '-100%');
                $(this).css('background', 'url(images/sub_menu_down_arr_night.png) calc( 100% - 7px ) center no-repeat');
            }
        });
        let menuItemLiA2 = $('' +
            'header .header_logo_menu_search_block .menu_and_search_block .main_menu ul li ul li a,' +
            'header .main_menu2 .main_menu ul li ul li a');
        menuItemLiA2.each(function () {
            if ($(this).siblings('ul').length > 0){
                if ($(window).width() < 900){
                    $(this).css('background', 'url(images/sub_menu_down_arr_night.png) 5px center no-repeat');
                }else{
                    $(this).css('background', 'url(images/sub_menu_left_arr_night.png) 5px center no-repeat');
                }


            }
        });
        $('footer').removeClass('footer_day').addClass('footer_night');
    }
    
    function setDayTheme() {
        $('.leftArrLight, .leftSmallLight, .leftBigLight, .rightBigLight, .rightSmallLight, .rightArrLight').fadeOut(500);
        $('main').removeClass('main_night');
        $('.vehicle_finder_form, .search_by_vin_form').removeClass('vehicle_finder_form_night').addClass('vehicle_finder_form_day');
        $('.featured_cars').removeClass('featured_cars_night').addClass('featured_cars_day');
        $('.view_all_cars').removeClass('view_all_cars_night').addClass('view_all_cars_day');
        $('.how_it_works').removeClass('how_it_works_night').addClass('how_it_works_day');
        $('.newsletter').removeClass('newsletter_night').addClass('newsletter_day');
        $('.all_cars_wrapper').removeClass('all_cars_wrapper_night').addClass('all_cars_wrapper_day');
        $('.single_car_wrapper').removeClass('single_car_wrapper_night').addClass('single_car_wrapper_day');
        $('.view_similar_vehicles_wrapper').removeClass('view_similar_vehicles_wrapper_night').addClass('view_similar_vehicles_wrapper_day');
        $('.add_lot_wrapper').removeClass('add_lot_wrapper_night').addClass('add_lot_wrapper_day');
        $('header').removeClass('header_night').addClass('header_day');
        let menuItemLiA = $('' +
            'header .header_logo_menu_search_block .menu_and_search_block .main_menu ul li a,' +
            'header .main_menu2 .main_menu ul li a');
        menuItemLiA.each(function () {
            if ($(this).siblings('ul').length > 0){
                if ($(window).width() < 1170) {
                    $(this).css('background', 'url(images/sub_menu_down_arr_night.png) calc( 100% - 7px ) center no-repeat');
                }
                else{
                    $(this).css('background', 'url(images/sub_menu_down_arr.png) calc( 100% - 7px ) center no-repeat');
                }

            }
        });
        let menuItemLiA2 = $('' +
            'header .header_logo_menu_search_block .menu_and_search_block .main_menu ul li ul li a,' +
            'header .main_menu2 .main_menu ul li ul li a');
        menuItemLiA2.each(function () {
            if ($(this).siblings('ul').length > 0){
                if ($(window).width() < 900){
                    $(this).css('background', 'url(images/sub_menu_down_arr.png) 5px center no-repeat');
                }else{
                    $(this).css('background', 'url(images/sub_menu_left_arr.png) 5px center no-repeat');
                }


            }
        });
        $('footer').removeClass('footer_night').addClass('footer_day');
    }

    if (nowTime >= 18 || nowTime <= 6) {
        $('.leftArrLight, .leftSmallLight, .leftBigLight, .rightBigLight, .rightSmallLight, .rightArrLight').css('display', 'block');
        dayNightFlag = 1;
        document.getElementsByClassName('flag')[0].style.marginLeft = '21px';
        //document.getElementsByClassName('day_img')[0].setAttribute('src', 'images/sun_night.png');
        //document.getElementsByClassName('night_img')[0].setAttribute('src', 'images/moon_night.png');
        document.getElementsByClassName('switcher')[0].style.background = "#E2E1E1";

        setNightTheme();
    }
    else if (nowTime > 6 || nowTime < 18) {
        dayNightFlag = 0;
        document.getElementsByClassName('flag')[0].style.marginLeft = '0';
        //document.getElementsByClassName('day_img')[0].setAttribute('src', 'images/sun_day.png');
        //document.getElementsByClassName('night_img')[0].setAttribute('src', 'images/moon_day.png');
        document.getElementsByClassName('switcher')[0].style.background = "#F7EA02";

        setDayTheme();

    }

    document.getElementsByClassName('switcher')[0].onclick = function () {
        document.getElementsByClassName('flag')[0].style.transition = 'margin-left 0.5s, margin-right 0.5s';
        document.getElementsByClassName('switcher')[0].style.transition = 'background 0.5s';
        if (dayNightFlag == 0) {
            dayNightFlag = 1;
            document.getElementsByClassName('flag')[0].style.marginLeft = '21px';
            //document.getElementsByClassName('day_img')[0].setAttribute('src', 'images/sun_night.png');
            //document.getElementsByClassName('night_img')[0].setAttribute('src', 'images/moon_night.png');
            document.getElementsByClassName('switcher')[0].style.background = "#E2E1E1";

            setNightTheme();



        }else if (dayNightFlag == 1){
            dayNightFlag = 0;
            document.getElementsByClassName('flag')[0].style.marginLeft = '0';
            //document.getElementsByClassName('day_img')[0].setAttribute('src', 'images/sun_day.png');
            //document.getElementsByClassName('night_img')[0].setAttribute('src', 'images/moon_day.png');
            document.getElementsByClassName('switcher')[0].style.background = "#F7EA02";

            setDayTheme();

        }

    };
}

export default dayNightSwitcher;