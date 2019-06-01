function setInputEqualWidth() {

    $('#new_lot_form div p select').width($('#new_lot_form input[type="text"]:first').width());
    $('#new_lot_form input[type="datetime-local"]').css({
        'width':$('#new_lot_form input[type="text"]:first').outerWidth()+'px',
        'box-sizing':'border-box'
    });
}

export default setInputEqualWidth;

