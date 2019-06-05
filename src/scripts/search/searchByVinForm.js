import Lot from "../addLot/Lot";
import wrapSpans from "../allLots/wrapSpans";
import fullFillContent from "../allLots/fullfillContent";
import clearAllIntervals from "../allLots/clearAllIntervals";

function getCarByVin() {
    
    $('#search_by_vin_vinValue').keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
        }
    });

    let allLots = [];
    $.getJSON('json_data/data.json', {}, function (data) {
        for (let i = 0; i < data.length; i++){
            let lot = new Lot(
                data[i].name,
                data[i].model,
                data[i].year,
                data[i].mileage,
                data[i].damage,
                data[i].location,
                data[i].carType,
                data[i].fuel,
                data[i].gearbox,
                data[i].cylinder,
                data[i].drive,
                data[i].engineCapacity,
                data[i].vin,
                data[i].color,
                data[i].power,
                data[i].minimalBid,
                data[i].saleDate,
                data[i].fixedPrice,
                data[i].imageSrc,
            );
            allLots.push(lot);
        }
    });
    
    $('#search_by_vin_form').submit(function (event) {
        event.preventDefault();
        location.hash = "#search";
        $('#search_result_phrase').html($('#search_by_vin_vinValue').val());

        let searchResults = [];
        for (let i = 0; i < allLots.length; i++){
            if ($('#search_by_vin_vinValue').val() == allLots[i].vin){
                searchResults.push(allLots[i]);
                break;
            }
        }
        if (searchResults.length != 0){
            $('.search_page_results_count p').html('lot found').prepend("<span id='number_of_lots_found'></span>");
            $('#number_of_lots_found').html(searchResults.length);
            $('.cars_list').empty();
            clearAllIntervals();
            fullFillContent(searchResults[0]);
            wrapSpans();
        }else{
            $('.search_page_results_count p').html('lots found').prepend("<span id='number_of_lots_found'></span>");
            $('#number_of_lots_found').html("0");

        }


    });
}

export default getCarByVin;