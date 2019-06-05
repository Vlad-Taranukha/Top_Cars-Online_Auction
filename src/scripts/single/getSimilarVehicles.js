import Lot from "../addLot/Lot";
import startSimilarVehichesSlider from "./similarVehiclesSlider";
import setSimilarVehiclesHeaderEqualHeight from "./similarVehichesHeaderEqualHeight";

function getSimilarVehicles() {
    let allLots = [];
    $.getJSON('json_data/data.json', {}, function (data) {
        for (let i = 0; i < data.length; i++) {
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

        $('.view_similar_vehicles_list').empty();
        for (let i = 0; i < 4; i++){
            $('.view_similar_vehicles_list').append("" +
                "<div class='view_similar_vehicle_item'>" +
                "<div class='view_similar_vehicle_item_img'>" +
                "<img src='images/bmw-m5.jpg' alt=''>" +
                "</div>" +
                "<div class='view_similar_vehicle_item_info'>" +
                "<h3><a href='#car"+allLots[i].vin+"'>"+allLots[i].name+" "+allLots[i].model+"</a></h3>" +
                "<div class='view_similar_vehicle_item_info_year'>" +
                "<p>Year</p>" +
                "<p>"+allLots[i].year+"</p>" +
                "</div>" +
                "<div class='view_similar_vehicle_item_info_mileage'>" +
                "<p>Mileage</p>" +
                "<p>"+allLots[i].mileage+"km.</p>" +
                "</div>" +
                "<div class='view_similar_vehicle_item_info_price'>" +
                "<p>Price</p>" +
                "<p>"+allLots[i].fixedPrice+"$</p>" +
                "</div>" +
                "<div class='view_similar_vehicle_item_btn'>" +
                "<p><a href='#car"+allLots[i].vin+"'>View Vehicle</a></p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "");
        }

        startSimilarVehichesSlider();
        setSimilarVehiclesHeaderEqualHeight();
    });


}

export default getSimilarVehicles;