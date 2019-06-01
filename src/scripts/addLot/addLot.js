

function addLot() {
    $('.add_lot_new_lot>p>a').click(function (event) {
        event.preventDefault();
        $('#new_lot_form_car_maker').focus();
    });
}

export default addLot;