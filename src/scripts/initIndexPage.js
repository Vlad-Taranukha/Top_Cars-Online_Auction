import getFeaturedCars from "./getFeaturedCars";
import clearContentBlock from "./clearContentBlock";
import getCarByVin from "./search/searchByVinForm";
import getCarsFromVehicleFinderForm from "./search/vehicleFinder";

function initIndexPage() {

    clearContentBlock();
    $('.header_slider').css('display', 'flex');
    $('.featured_cars>div').remove();
    $.getJSON('json_data/data.json', {}, function (data) {

        $('#cars_on_sale').html("");
        for (let i = 0; i < String(data.length).length; i++){
            $('#cars_on_sale').append("<span>"+String(data.length)[i]+"</span>");
        }

        let makes = [];
        for (let i = 0; i < data.length; i++){
            makes.push(data[i].name.toLowerCase());
        }
        let unique_makes = makes.filter(function (elem, index) {
            return makes.indexOf(elem) == index;
        });
        unique_makes.sort();
        $('#make_select')
            .empty()
            .append("<option value='' selected></option>");
        for (let i = 0; i < unique_makes.length; i++){
            $('#make_select').append("<option value='"+unique_makes[i]+"'>"+unique_makes[i][0].toUpperCase()+""+unique_makes[i].substring(1)+"</option>");
        }
    });
    getFeaturedCars();

    $('.main_content_block').css('display', 'flex');
    $('.view_all_cars').css('display', 'block');
    $('.how_it_works').css('display', 'block');
    $('.newsletter').css('display', 'block');

    $(window).on('hashchange', function () {
        $('#make_select')
            .empty()
            .append("<option value='' selected></option>");
        $('#model_select')
            .empty()
            .append("<option value='' selected></option>")
            .prop('disabled', true);
    });

    $('#make_select').change(function () {
        if ($(this).val() == ""){
            $('#model_select').prop('disabled', true);
        }else {
            $('#model_select').prop('disabled', false);
            $.getJSON('./json_data/data.json', {}, function (data) {
                let models = [];
                for (let i = 0; i < data.length; i++){
                    if (data[i].name.toLowerCase() == $('#make_select').val()) {
                        models.push(data[i].model.toLowerCase());
                    }
                }
                let unique_models = models.filter(function (elem, index) {
                    return models.indexOf(elem) == index;
                });
                unique_models.sort();
                $('#model_select')
                    .empty()
                    .append("<option value='' selected></option>");
                for (let i = 0; i < unique_models.length; i++){
                    $('#model_select')
                        .append("<option value='"+unique_models[i]+"'>"+unique_models[i][0].toUpperCase()+""+unique_models[i].substring(1)+"</option>")
                }
            });
        }
    });

    getCarByVin();
    getCarsFromVehicleFinderForm();

}

export default initIndexPage;