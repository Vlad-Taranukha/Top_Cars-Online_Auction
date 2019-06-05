function startSimilarVehichesSlider(){
    $('.view_similar_vehicles_list_right_arr').click(function () {

        //console.log($('.view_similar_vehicle_item:first').css('margin-left'));
        $('.view_similar_vehicle_item:first').animate({
            'margin-left' : '+=-260px',
        }, 500, function () {
            let f =$('.view_similar_vehicle_item:first').detach().removeAttr('style');
            $('.view_similar_vehicles_list').append(f);
            $('.view_similar_vehicle_item:first').css('margin-left', "-"+(240-($('.view_similar_vehicles_list').width()-240-40)/2)+"px");
        });
        //$('.view_similar_vehicles_list').append($('.view_similar_vehicle_item:first').detach());

    });

    $('.view_similar_vehicles_list_left_arr').click(function () {
        $('.view_similar_vehicle_item:first').animate({
            'margin-left' : '+=260px'
        }, 500, function () {
            let f =$('.view_similar_vehicle_item:last').detach();
            $('.view_similar_vehicle_item:first').removeAttr('style');
            $('.view_similar_vehicles_list').prepend(f);
            $('.view_similar_vehicle_item:first').css('margin-left', "-"+(240-($('.view_similar_vehicles_list').width()-240-40)/2)+"px");
        });
    });


    if ($(window).width() <= 600){

        $('.view_similar_vehicle_item:first').css('margin-left', '-'+(240-($('.view_similar_vehicles_list').width()-240-40)/2)+"px");

        if ($(window).width() <=350){
            $('.view_similar_vehicles_list_left_arr, .view_similar_vehicles_list_right_arr')
                .css('width', '35px');
        }else{
            $('.view_similar_vehicles_list_left_arr, .view_similar_vehicles_list_right_arr')
                .css('width', ''+($(".view_similar_vehicles_list").width()-240-40)/2+'px');
        }
        $(window).resize(function () {
            $('.view_similar_vehicle_item:first')
                .css('margin-left', '-'+(240-($('.view_similar_vehicles_list').width()-240-40)/2)+"px");

            $('.view_similar_vehicles_list_left_arr, .view_similar_vehicles_list_right_arr')
                .css('width', ''+($(".view_similar_vehicles_list").width()-240-40)/2+'px');
        });

    }
}

export default startSimilarVehichesSlider;