function wrapSpans() {
    if ($(window).width() <= 600){
        $('.car_item_info h3').find('.car_item_timer').wrap('<p></p>');
    }
}

export default wrapSpans;