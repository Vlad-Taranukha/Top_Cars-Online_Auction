function showHideLotInfo() {

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

}

export default showHideLotInfo;