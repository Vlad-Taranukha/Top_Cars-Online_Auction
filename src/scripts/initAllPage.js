import clearContentBlock from "./clearContentBlock";

function initAllPage() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.all_cars_wrapper').css('display', 'block');
}

export default initAllPage;