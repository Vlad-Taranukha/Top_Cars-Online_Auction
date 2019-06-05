import clearContentBlock from "../clearContentBlock";

function initSearchPage() {

    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.search_page_wrapper').css('display', 'block');
    
}

export default initSearchPage;