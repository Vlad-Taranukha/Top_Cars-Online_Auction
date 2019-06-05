function getHeaderSlider() {
    $(function(){
        let slides = $('.header_slider div a img');
        let slidesText = $('.header_slider div .slide_info');
        let numberOfSlides = $('.header_slider div a img').length;
        for (let i = 0; i < numberOfSlides; i++){
            $('.slider_bubbles').append('<span></span>');
        }
        slides.each(function () {
            if($(this).width() > $('body').width()){
                $(this).width($('body').width());
                $(this).height(500);
            }
        });
        let slideCounter = 0;
        $('.slide_left').click(function () {
            clearInterval(slideInterval);
            $('.slider_bubbles span').css('background', 'none');
            $('.slider_bubbles span:eq('+(slideCounter-1)+')').css('background', '#264D9A');
            slides.each(function () {
                if (slideCounter == 0){
                    slideCounter = numberOfSlides;
                    $(this).css({
                        'marginLeft': '-' + slideCounter * 100 + '%',
                        'transition': 'margin-left 2s'
                    });
                    slidesText.each(function () {
                        $(this).css({
                            'marginLeft': '-' + slideCounter * 100 + '%',
                            'transition': 'margin-left 2s'
                        });
                    });
                }
                else if (slideCounter == 1) {
                    $(this).css({
                        'marginLeft': 0,
                        'transition': 'margin-left 2s'
                    });
                    slidesText.each(function () {
                        $(this).css({
                            'marginLeft': '0',
                            'transition': 'margin-left 2s'
                        });
                    });
                } else if (slideCounter > 1){
                    $(this).css({
                        'marginLeft': '-' + (slideCounter - 1) * 100 + '%',
                        'transition': 'margin-left 2s'
                    });
                    slidesText.each(function () {
                        $(this).css({
                            'marginLeft': '-' + (slideCounter - 1) * 100 + '%',
                            'transition': 'margin-left 2s'
                        });
                    });

                }

            });
            slideCounter--;
            slideInterval = setInterval(changeSlide, 10000);
        });
        $('.slide_right').click(function(){
            clearInterval(slideInterval);
            $('.slider_bubbles span').css('background', 'none');
            $('.slider_bubbles span:eq('+(slideCounter+1)+')').css('background', '#264D9A');
            slideCounter++;
            slides.each(function () {
                if (slideCounter == numberOfSlides){
                    $(this).css({
                        'marginLeft': '0',
                        'transition': 'margin-left 2s'
                    });
                    slidesText.each(function () {
                        $(this).css({
                            'marginLeft': '0',
                            'transition': 'margin-left 2s'
                        });
                    });
                    slideCounter = 0;
                    $('.slider_bubbles span:eq('+(slideCounter)+')').css('background', '#264D9A');
                }else{
                    $(this).css({
                        'marginLeft': '-' + slideCounter * 100 + '%',
                        'transition': 'margin-left 2s'
                    });
                    slidesText.each(function () {
                        $(this).css({
                            'marginLeft': '-' + slideCounter * 100 + '%',
                            'transition': 'margin-left 2s'
                        });
                    });
                }

            });
            slideInterval = setInterval(changeSlide, 10000);

        });

        $('.slider_bubbles span').each(function (index, element) {
            $(element).click(function () {
                clearInterval(slideInterval);
                $('.slider_bubbles span').css('background', 'none');
                slides.css({
                    'marginLeft': '-'+index*100+'%',
                    'transition': 'margin-left 2s'
                });
                slidesText.each(function () {
                    $(this).css({
                        'marginLeft': '-' + index * 100 + '%',
                        'transition': 'margin-left 2s'
                    });
                });
                $(this).css('background', "#264D9A");
                slideCounter = index;
                slideInterval = setInterval(changeSlide, 10000);
            });

        });

        function changeSlide(){
            $('.slider_bubbles span').css('background', 'none');
            $('.slider_bubbles span:eq('+(slideCounter+1)+')').css('background', '#264D9A');
            slideCounter++;
            if (slideCounter == numberOfSlides){
                slides.css({
                    'marginLeft': '0',
                    'transition': 'margin-left 2s'
                });
                slidesText.each(function () {
                    $(this).css({
                        'marginLeft': '0',
                        'transition': 'margin-left 2s'
                    });
                });
                slideCounter = 0;
                $('.slider_bubbles span:eq('+(slideCounter)+')').css('background', '#264D9A');
            }else{
                slides.css({
                    'marginLeft': '-' + slideCounter * 100 + '%',
                    'transition': 'margin-left 2s'
                });
                slidesText.each(function () {
                    $(this).css({
                        'marginLeft': '-' + slideCounter * 100 + '%',
                        'transition': 'margin-left 2s'
                    });
                });

            }
        }
        let slideInterval = setInterval(changeSlide, 10000);
    });


}

export default getHeaderSlider;