import clearContentBlock from "../clearContentBlock";

function initContacts() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.contacts_page_wrapper').css('display', 'block');

    if (navigator.onLine){
        $('.map_no_internet').css('display', 'none');
        $('.contacts_map iframe').css('display', 'block');

        if($(window).width() <= 480){
            $('.contacts_map iframe').height($('.contacts_map iframe').width() * 0.75);
        }else{
            $('.contacts_map iframe').height($('.contacts_map iframe').width() * 0.5);
        }

        $(window).resize(function () {
            if($(this).width() <= 480){
                $('.contacts_map iframe').height($('.contacts_map iframe').width() * 0.75);
            }else{
                $('.contacts_map iframe').height($('.contacts_map iframe').width() * 0.5);
            }

        });
    }else{
        $('.map_no_internet').css('display', 'block');
        $('.contacts_map iframe').css('display', 'none');
    }




}

export default initContacts;