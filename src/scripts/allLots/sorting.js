import Lot from "../addLot/Lot";
import fullFillContent from "./fullfillContent";
import wrapSpans from "./wrapSpans";

function sortLots(){
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

        function sortAllCarsList(arr, propertyName, ascDesc = false) {

            arr.sort(function (a, b) {
                return Number(a[propertyName]) - Number(b[propertyName]);
            });

            if (ascDesc){
                arr.reverse();
            }

            $('.cars_list').empty();
            $('.cars_bottom_pagination').css('display', 'none');
            let counter = 0;
            if (arr.length < 10){
                for (let i = 0; i < arr.length; i++){
                    fullFillContent(arr[i]);
                    wrapSpans();
                }
            }else{
                for (let i = 0; i < 10; i++){
                    counter++;
                    fullFillContent(arr[i]);
                    wrapSpans();
                }
                $('.cars_list').append("<div class='showMore'>Show more</div>");
                $('.showMore').click(function () {
                    let showInfoEl = $(this).detach();
                    let iter = counter;
                    if ((arr.length - iter) < 10){
                        for (let i = iter; i < arr.length; i++){
                            fullFillContent(arr[i]);
                        }
                        wrapSpans();
                    }else{
                        for (let i = iter; i < iter+10; i++){
                            counter++;
                            fullFillContent(arr[i]);
                        }
                        $(showInfoEl).appendTo('.cars_list');
                        wrapSpans();
                    }
                });
            }

        }

        if ($('#sort_cars_select').val() == 1){

            sortAllCarsList(allLots, "fixedPrice", false);

        }else if ($('#sort_cars_select').val() == 2){

            sortAllCarsList(allLots, "fixedPrice", true);

        }else if($('#sort_cars_select').val() == 3){

            sortAllCarsList(allLots, "mileage", false);

        }else if($('#sort_cars_select').val() == 4){

            sortAllCarsList(allLots, "mileage", true);

        }else if($('#sort_cars_select').val() == 5){

            sortAllCarsList(allLots, "year", true);

        }else if($('#sort_cars_select').val() == 6){

            sortAllCarsList(allLots, "year", false);

        }
    });


}

export default sortLots;