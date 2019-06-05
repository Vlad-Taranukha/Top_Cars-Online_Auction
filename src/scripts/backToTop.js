function backToTopBtn() {
    $('.to_top').click(function (event) {
        event.preventDefault();
        let top = $('.cars').offset().top;
        $('body, html').animate({scrollTop : top}, 1500);
    });
}

export default backToTopBtn;