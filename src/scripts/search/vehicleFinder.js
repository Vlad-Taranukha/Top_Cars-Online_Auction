import Lot from "../addLot/Lot";
import clearAllIntervals from "../allLots/clearAllIntervals";
import wrapSpans from "../allLots/wrapSpans";
import fullFillContent from "../allLots/fullfillContent";

function getCarsFromVehicleFinderForm() {
    
    $('#vehicle_finder_form').submit(function (event) {
        event.preventDefault();
        location.hash = "#search";

        let searchFields = [];

        $('#vehicle_finder_form input[type="number"], #vehicle_finder_form select').each(function (index, elem) {
            let elemId = $(elem).attr('id');
            let elemVal = $(elem).val();
            searchFields.push([elemId, elemVal]);
        });


        function compareValues(a, b) {
            if (+b < +a){
                let from = a;
                let to = b;
                b = from;
                a = to;
            }
            return [+a, +b];
        }

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
            for (let i = 0; i < allLots.length; i++){
                let conditions = [];
                for (let j = 0; j < searchFields.length; j++){
                    if (searchFields[j][1] == ""){
                        conditions.push(true);
                    }else{
                        if (searchFields[j][0] == 'make_select'){
                            if (searchFields[j][1] == allLots[i].name){
                                conditions.push(true);
                            }else{
                                conditions.push(false);
                            }
                        }
                        if (searchFields[j][0] == 'model_select'){
                            if (searchFields[j][1] == allLots[i].model){
                                conditions.push(true);
                            }else{
                                conditions.push(false);
                            }
                        }
                        if (searchFields[j][0] == 'year_from'){
                            if ($('#year_to').val() == ""){
                                if (searchFields[j][1] <= allLots[i].year){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#year_to').val() != ""){
                                let years = compareValues($('#year_from').val(), $('#year_to').val());
                                $('#year_from').val(years[0]);
                                $('#year_to').val(years[1]);
                                if ($('#year_from').val() <= allLots[i].year && $('#year_to').val() >= allLots[i].year){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }
                        if (searchFields[j][0] == 'year_to'){
                            if ($('#year_from').val() == ""){
                                if (searchFields[j][1] >= allLots[i].year){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#year_from').val() != ""){
                                let years = compareValues($('#year_from').val(), $('#year_to').val());
                                $('#year_from').val(years[0]);
                                $('#year_to').val(years[1]);
                                if ($('#year_from').val() <= allLots[i].year && $('#year_to').val() >= allLots[i].year){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }

                        if (searchFields[j][0] == 'price_from'){
                            if ($('#price_to').val() == ""){
                                if (searchFields[j][1] <= +allLots[i].fixedPrice){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#price_to').val() != ""){
                                let prices = compareValues(+$('#price_from').val(), +$('#price_to').val());
                                $('#price_from').val(prices[0]);
                                $('#price_to').val(prices[1]);
                                if ($('#price_from').val() <= +allLots[i].fixedPrice && $('#price_to').val() >= +allLots[i].fixedPrice){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }
                        if (searchFields[j][0] == 'price_to'){
                            if ($('#price_from').val() == ""){
                                if (searchFields[j][1] >= +allLots[i].fixedPrice){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#price_from').val() != ""){
                                let prices = compareValues(+$('#price_from').val(), +$('#price_to').val());
                                $('#price_from').val(prices[0]);
                                $('#price_to').val(prices[1]);
                                if ($('#price_to').val() >= +allLots[i].fixedPrice && $('#price_from').val() <= +allLots[i].fixedPrice){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }
                        if (searchFields[j][0] == 'mileage_from'){
                            if ($('#mileage_to').val() == ""){
                                if (searchFields[j][1] <= +allLots[i].mileage){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#milege_to').val() != ""){
                                let mileages = compareValues(+$('#mileage_from').val(), +$('#mileage_to').val());
                                $('#mileage_from').val(mileages[0]);
                                $('#mileage_to').val(mileages[1]);
                                if ($('#mileage_from').val() <= +allLots[i].mileage && $('#mileage_to').val() >= +allLots[i].mileage){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }
                        if (searchFields[j][0] == 'mileage_to'){
                            if ($('#mileage_from').val() == ""){
                                if (searchFields[j][1] >= +allLots[i].mileage){
                                    conditions.push(true);
                                }else{
                                    conditions.push(false);
                                }
                            }else if($('#mileage_from').val() != ""){
                                let mileages = compareValues(+$('#mileage_from').val(), +$('#mileage_to').val());
                                $('#mileage_from').val(mileages[0]);
                                $('#mileage_to').val(mileages[1]);
                                if ($('#mileage_to').val() >= +allLots[i].mileage && $('#mileage_from').val() <= +allLots[i].mileage){
                                    conditions.push(true);
                                } else {
                                    conditions.push(false);
                                }
                            }
                        }
                    }
                }
                if (conditions.indexOf(false) == (-1)){
                    searchedItems.push(allLots[i]);
                }

            }


            let resPhrase = "";
            for (let i = 0; i < searchFields.length; i++){
                if (searchFields[i][0] == 'make_select'){
                    resPhrase+=searchFields[i][1].toUpperCase();
                }else if(searchFields[i][0] == 'model_select'){
                    resPhrase+=" "+searchFields[i][1].toUpperCase();
                }else if (searchFields[i][0] == 'mileage_from'){
                    if (searchFields[i][1] != ""){
                        if ($('#mileage_to').val() == ""){
                            resPhrase+=" Mileage: from "+searchFields[i][1]+"km.";
                        }else{
                            resPhrase+=" Mileage: from "+searchFields[i][1]+" to "+$('#mileage_to').val()+"km.";
                        }
                    }else{

                    }

                }else if (searchFields[i][0] == 'price_from'){
                    if (searchFields[i][1] != ""){
                        if ($('#price_to').val() == ""){
                            resPhrase+=" Price: from "+searchFields[i][1]+"$";
                        }else{
                            resPhrase+=" Price: from "+searchFields[i][1]+" to "+$('#price_to').val()+"$";
                        }
                    }else{

                    }

                }else if (searchFields[i][0] == 'year_from'){
                    if (searchFields[i][1] != ""){
                        if ($('#year_to').val() == ""){
                            resPhrase+=" Year: from "+searchFields[i][1];
                        }else{
                            resPhrase+=" Year: from "+searchFields[i][1]+" to "+$('#year_to').val();
                        }
                    }else{

                    }

                }else if (searchFields[i][0] == 'mileage_to'){
                    if (searchFields[i][1] != ""){
                        if ($('#mileage_from').val() == ""){
                            resPhrase+=" Mileage: to "+searchFields[i][1]+"km.";
                        }
                    }
                }else if (searchFields[i][0] == 'price_to'){
                    if (searchFields[i][1] != ""){
                        if ($('#price_from').val() == ""){
                            resPhrase+=" Price: to "+searchFields[i][1]+"$";
                        }
                    }
                }else if (searchFields[i][0] == 'year_to'){
                    if (searchFields[i][1] != ""){
                        if ($('#year_from').val() == ""){
                            resPhrase+=" Year: to "+searchFields[i][1];
                        }
                    }
                }
            }
            $('#search_result_phrase').html(resPhrase);


            if (searchedItems.length == 1){
                $('.search_page_results_count p').html('lot found').prepend("<span id='number_of_lots_found'></span>");
                $('#number_of_lots_found').html(searchedItems.length);
            } else{
                $('.search_page_results_count p').html('lots found').prepend("<span id='number_of_lots_found'></span>");
                $('#number_of_lots_found').html(searchedItems.length);
            }

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
        






    });

}

export default getCarsFromVehicleFinderForm;