import Lot from "../addLot/Lot";
import fullFillContent from "../allLots/fullfillContent";
import wrapSpans from "../allLots/wrapSpans";
import clearAllIntervals from "../allLots/clearAllIntervals";

function headerSearchformResults() {
    $('#header_search_form').submit(function (event) {
        event.preventDefault();
        location.hash = '#search';


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
            let searchedItems = [];
            let searchStr = $('#header_search_form_input').val().toLowerCase();
            //console.log(searchStr);
            searchStr = searchStr.split(' ');
            if (searchStr.length == 1){
                for (let i = 0; i < allLots.length; i++){
                    if (searchStr[0] == allLots[i].name.toLowerCase() ||
                        searchStr[0] == allLots[i].model.toLowerCase()){
                        searchedItems.push(allLots[i]);
                    }
                }
            }else if(searchStr.length == 2){
                for (let i = 0; i < allLots.length; i++){
                    if (searchStr[0] == allLots[i].name.toLowerCase() && searchStr[1] == allLots[i].model.toLowerCase() ||
                        searchStr[0] == allLots[i].model.toLowerCase() && searchStr[1] == allLots[i].name.toLowerCase()){
                        searchedItems.push(allLots[i]);
                    }
                }

            }

            if ($('#header_search_form_input').val() == ""){
                $('#search_result_phrase').html("---");
            }else {
                $('#search_result_phrase').html($('#header_search_form_input').val());
            }

            if (searchedItems.length == 1){
                $('.search_page_results_count p').html('lot found').prepend("<span id='number_of_lots_found'></span>");
                $('#number_of_lots_found').html(searchedItems.length);
            } else{
                $('.search_page_results_count p').html('lots found').prepend("<span id='number_of_lots_found'></span>");
                $('#number_of_lots_found').html(searchedItems.length);
            }

            //console.log(searchedItems);


            $('.cars_list').empty();
            clearAllIntervals();


            let counter = 0;
            if (searchedItems.length <= 10){
                for (let i = 0; i < searchedItems.length; i++){
                    fullFillContent(searchedItems[i]);
                    wrapSpans();
                }
            }else{
                for (let i = 0; i < 10; i++){
                    counter++;
                    fullFillContent(searchedItems[i]);
                    wrapSpans();
                }
                $('.cars_list').append("<div class='showMore'>Show more</div>");
                $('.showMore').click(function () {
                    let showInfoEl = $(this).detach();
                    let iter = counter;
                    if ((searchedItems.length - iter) < 10){
                        for (let i = iter; i < searchedItems.length; i++){
                            fullFillContent(searchedItems[i]);
                        }
                        wrapSpans();
                    }else{
                        for (let i = iter; i < iter+10; i++){
                            counter++;
                            fullFillContent(searchedItems[i]);
                        }
                        $(showInfoEl).appendTo('.cars_list');
                        wrapSpans();
                    }
                });
            }
        });

        $(this).children('input[type="text"]').focus(function () {
            $(this).val('');
        });
    });


}

export default headerSearchformResults;