function howItWorksSlider() {
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

}

export default howItWorksSlider;