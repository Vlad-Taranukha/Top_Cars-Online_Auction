import Lot from "../addLot/Lot";
import fullFillContent from "./fullfillContent";
import wrapSpans from "./wrapSpans";
import clearAllIntervals from "./clearAllIntervals";

function initFilters() {

    $.getJSON('json_data/data.json', {}, function (data) {

        let allLots = [];
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
        let allMakers = [];
        let allYears = [];
        let allLocations = [];
        let allBodyStyles = [];
        let allFueltypes = [];
        let allCylinders = [];
        let allDrives = [];
        let allEngineCapacities = [];
        for (let i = 0; i < allLots.length; i++){
            allMakers.push(allLots[i].name.toLowerCase());
            allYears.push(allLots[i].year);
            allLocations.push(allLots[i].location.toLowerCase());
            allBodyStyles.push(allLots[i].carType.toLowerCase());
            allFueltypes.push(allLots[i].fuel.toLowerCase());
            allCylinders.push(allLots[i].cylinder);
            allDrives.push(allLots[i].drive);
            allEngineCapacities.push(allLots[i].engineCapacity);
        }
        function fullFillFilterSelect(arr, selector, numberSorting = false){
            arr = arr.filter(function (elem, index) {
                return arr.indexOf(elem) == index;
            });

            $(selector).empty().append("<option value='' selected></option>");

            if (numberSorting){
                arr.sort(function (a, b) {
                    return a - b;
                });
                for (let i = 0; i < arr.length; i++){
                    $(selector)
                        .append("<option value='"+arr[i]+"'>"+arr[i]+"</option>");
                }
            }else{
                arr.sort();
                for (let i = 0; i < arr.length; i++){
                    $(selector)
                        .append("<option value='"+arr[i]+"'>"+arr[i][0].toUpperCase()+arr[i].substring(1)+"</option>");
                }
            }



        }
        fullFillFilterSelect(allMakers, "#filter_select_name", false);
        fullFillFilterSelect(allYears, "#filter_select_year", true);
        fullFillFilterSelect(allLocations, "#filter_select_location", false);
        fullFillFilterSelect(allBodyStyles, "#filter_select_carType", false);
        fullFillFilterSelect(allFueltypes, "#filter_select_fuel", false);
        fullFillFilterSelect(allCylinders, "#filter_select_cylinder", true);
        fullFillFilterSelect(allDrives, "#filter_select_drive", false);
        fullFillFilterSelect(allEngineCapacities, "#filter_select_engineCapacity", true);

        $('#filter_select_name').change(function () {
            if ($(this).val() != ""){
                let allModels = [];
                for (let i = 0; i < allLots.length; i++){
                    if (allLots[i].name.toLowerCase() == $(this).val().toLowerCase()){
                        allModels.push(allLots[i].model);
                    }
                }
                $('#filter_select_model').prop('disabled', false);
                fullFillFilterSelect(allModels, "#filter_select_model", false);
            }else if ($(this).val() == "") {
                $('#filter_select_model').empty().prop('disabled', true);
            }
        });

        $('#filter_select_mileageFrom, #filter_select_mileageTo').keypress(function (event) {
            if (event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
            }
        });


        $('#filter_form').submit(function (event) {
            clearAllIntervals();
            let filteredLots = [];
            event.preventDefault();
            let filterCryteries = [];
            $('#filter_form input[type="text"], #filter_form select').each(function (index, elem) {
                if ($(elem).val() != ""){
                    let elemId = $(elem).attr('id').substring($(elem).attr('id').lastIndexOf('_')+1);
                    let elemVal = $(elem).val();
                    let obj = [elemId,elemVal];
                    filterCryteries.push(obj);
                }
            });
            //console.log(filterCryteries);
            if (filterCryteries.length == 1 && filterCryteries[0][0] == "model" && filterCryteries[0][1] === null){
                $(window).scrollTop($('.cars').offset().top);
                $('.cars_list').empty();
                $('.cars_bottom_pagination').css('display', 'none');
                $('.cars_display_settings').css('display', 'none');
                let counter = 0;
                if (allLots.length <= 10){
                    for (let i = 0; i < allLots.length; i++){
                        fullFillContent(allLots[i]);
                        wrapSpans();
                    }
                }else{
                    for (let i = 0; i < 10; i++){
                        counter++;
                        fullFillContent(allLots[i]);
                        wrapSpans();
                    }
                    $('.cars_list').append("<div class='showMore'>Show more</div>");
                    $('.showMore').click(function () {
                        let showInfoEl = $(this).detach();
                        let iter = counter;
                        if ((allLots.length - iter) < 10){
                            for (let i = iter; i < allLots.length; i++){
                                fullFillContent(allLots[i]);
                            }
                            wrapSpans();
                        }else{
                            for (let i = iter; i < iter+10; i++){
                                counter++;
                                fullFillContent(allLots[i]);
                            }
                            $(showInfoEl).appendTo('.cars_list');
                            wrapSpans();
                        }
                    });
                }
                return;
            }

            if (filterCryteries.length > 0){

                for (let i = 0; i < allLots.length; i++){

                    let cases = [];
                    for (let j = 0; j < filterCryteries.length; j++){
                        if (filterCryteries[j][0] == "mileageFrom" || filterCryteries[j][0] == "mileageTo"){
                            continue;
                        }
                        if (filterCryteries[j][1] == allLots[i][filterCryteries[j][0]]){
                            cases.push(true);
                        }else{
                               cases.push(false);
                        }
                    }


                    if ($('#filter_select_mileageFrom').val() != "" && $('#filter_select_mileageTo').val() != ""){
                        if (allLots[i].mileage >= $('#filter_select_mileageFrom').val() && allLots[i].mileage <= $('#filter_select_mileageTo').val()){
                            cases.push(true);
                        }else {
                            cases.push(false);
                        }
                    }else if ($('#filter_select_mileageFrom').val() != "" && $('#filter_select_mileageTo').val() == ""){
                        if(allLots[i].mileage >= $('#filter_select_mileageFrom').val()){
                            cases.push(true);
                        }else if (allLots[i].mileage < $('#filter_select_mileageFrom').val()) {
                            cases.push(false);
                        }
                    }else if ($('#filter_select_mileageTo').val() != "" && $('#filter_select_mileageFrom').val() == ""){
                        if (allLots[i].mileage <= $('#filter_select_mileageTo').val()){
                            cases.push(true);
                        }else {
                            cases.push(false);
                        }
                    }

                    if (cases.indexOf(false) == -1){
                        filteredLots.push(allLots[i]);
                    }



                }

                //console.log(filteredLots);
                $(window).scrollTop($('.cars').offset().top);
                $('.cars_list').empty();
                $('.cars_bottom_pagination').css('display', 'none');
                $('.cars_display_settings').css('display', 'none');
                let counter = 0;
                if (filteredLots.length <= 10){
                    for (let i = 0; i < filteredLots.length; i++){
                        fullFillContent(filteredLots[i]);
                        wrapSpans();
                    }
                }else{
                    for (let i = 0; i < 10; i++){
                        counter++;
                        fullFillContent(filteredLots[i]);
                        wrapSpans();
                    }
                    $('.cars_list').append("<div class='showMore'>Show more</div>");
                    $('.showMore').click(function () {
                        let showInfoEl = $(this).detach();
                        let iter = counter;
                        if ((filteredLots.length - iter) < 10){
                            for (let i = iter; i < filteredLots.length; i++){
                                fullFillContent(filteredLots[i]);
                            }
                            wrapSpans();
                        }else{
                            for (let i = iter; i < iter+10; i++){
                                counter++;
                                fullFillContent(filteredLots[i]);
                            }
                            $(showInfoEl).appendTo('.cars_list');
                            wrapSpans();
                        }
                    });
                }



            }

        });



    });
}

export default initFilters;