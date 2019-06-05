function getGalleryFunctions() {
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
}

export default getGalleryFunctions;