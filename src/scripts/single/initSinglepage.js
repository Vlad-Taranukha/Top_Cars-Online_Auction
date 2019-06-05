import startSimilarVehichesSlider from "./similarVehiclesSlider";
import clearContentBlock from "../clearContentBlock";
import setSimilarVehiclesHeaderEqualHeight from "./similarVehichesHeaderEqualHeight";
import Lot from "../addLot/Lot";
import refactorDateIntoArr from "../allLots/refactorDateIntoArr";
import clearAllIntervals from "../allLots/clearAllIntervals";
import getGalleryFunctions from "./galleryFunctions";
import getSimilarVehicles from "./getSimilarVehicles";

function initSinglePage() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.single_car_wrapper').css('display', 'block');
    $('.view_similar_vehicles_wrapper').css('display', 'block');

    clearAllIntervals();

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

        let currentCar = location.hash.substring(4);


        for (let i = 0; i < allLots.length; i++){
            if (currentCar == allLots[i].vin){
                currentCar = allLots[i];
                break;
            }
        }
        //console.log(currentCar);

        let timeToEndStr = refactorDateIntoArr(currentCar.saleDate);
        let timeToEnd = new Date(
            timeToEndStr[0][0],
            timeToEndStr[0][1]-1,
            timeToEndStr[0][2],
            timeToEndStr[1][0],
            timeToEndStr[1][1]
        );
        timeToEnd = timeToEnd.getTime();
        let dayOfSale = new Date(timeToEnd);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        currentCar.timeLeft = (timeToEnd - Date.now())/1000;

        $('.single_car_wrapper').html("" +
            "<h2>"+currentCar.name+" "+currentCar.model+" "+currentCar.year+"</h2>" +
            "<div class='single_car_inner_wrapper'>" +
                "<div class='single_car_gallery'>" +
                    "<div class='single_car_gallery_main_img_and_main_thumbnails'>" +
                        "<div class='single_car_gallery_main_thumbnails'>" +
                            "<img src='images/cars/1/thumbnails/featured/bmw-m5_f1.jpg' alt=''>" +
                            "<img src='images/cars/1/thumbnails/featured/bmw-m5_f2.jpg' alt=''>" +
                            "<img src='images/cars/1/thumbnails/featured/bmw-m5_f3.jpg' alt=''>" +
                        "</div>" +
                        "<div class='single_car_gallery_main_img'>" +
                            "<img src='"+currentCar.imageSrc+"' alt=''>" +
                            "<div class='scaled_car_main_img'></div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='single_car_gallery_additional_thumbnails'>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn1.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn2.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn3.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn4.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn5.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn6.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn7.jpg' alt=''>" +
                        "<img src='images/cars/1/thumbnails/bmw-m5_tn8.jpg' alt=''>" +
                    "</div>" +
                "</div>" +
                "<div class='single_car_lot_info_and_features_wrapper'>" +
                    "<div class='single_car_lot_info'>" +
                        "<h3>Lot № "+currentCar.vin+"</h3>" +
                        "<div class='single_car_lot_info_mileage'>" +
                            "<p>Mileage</p>" +
                            "<p>"+currentCar.mileage+" km.</p>" +
                        "</div>" +
                        "<div class='single_car_lot_info_damage'>" +
                            "<p>Damage</p>" +
                            "<p>"+currentCar.damage+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_info_vin'>" +
                            "<p>VIN</p>" +
                            "<p>"+currentCar.vin+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_info_location'>" +
                            "<p>Location</p>" +
                            "<p>"+currentCar.location+"</p>" +
                        "</div>" +
                    "</div>" +
                    "<div class='single_car_lot_features'>" +
                        "<h3>Lot Features</h3>" +
                        "<div class='single_car_lot_features_vehicle_type'>" +
                            "<p>Vehicle Type</p>" +
                            "<p>"+currentCar.carType+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_color'>" +
                            "<p>Color</p>" +
                            "<p>"+currentCar.color+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_engine'>" +
                            "<p>Engine</p>" +
                            "<p>"+currentCar.engineCapacity+"L</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_transmission'>" +
                            "<p>Transmission</p>" +
                            "<p>"+currentCar.gearbox+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_drive'>" +
                            "<p>Drive-Train</p>" +
                            "<p>"+currentCar.drive+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_fuel'>" +
                            "<p>Fuel Type</p>" +
                            "<p>"+currentCar.fuel+"</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_power'>" +
                            "<p>Power</p>" +
                            "<p>"+currentCar.power+"HP</p>" +
                        "</div>" +
                        "<div class='single_car_lot_features_cylinder'>" +
                            "<p>Cylinder</p>" +
                            "<p>"+currentCar.cylinder+"</p>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='single_car_bid_and_sale_info_wrapper'>" +
                    "<div class='single_car_bid_info'>" +
                        "<h3>Bid Info</h3>" +
                        "<div class='single_car_bid_status'>" +
                            "<p>Bid Status</p>" +
                            "<p>On submitting</p>" +
                        "</div>" +
                        "<div class='single_car_current_bid'>" +
                            "<p>Current Bid</p>" +
                            "<p id='single_car_curr_bid_val'>"+currentCar.minimalBid+"$</p>" +
                        "</div>" +
                        "<div class='single_car_your_bid'>" +
                            "<p>Your bid</p>" +
                            "<p>$<input type='text' id='place_a_bid_input' maxlength='8'></p>" +
                        "</div>" +
                        "<p>(100$ min increment)</p>" +
                        "<div class='single_car_place_a_bid'>" +
                            "<input type='button' value='Bid Now' id='bidNowBtn'>" +
                        "</div>" +
                    "</div>" +
                    "<div class='single_car_sale_info'>" +
                        "<h3>Sale Info</h3>" +
                        "<div class='single_car_sale_date'>" +
                            "<p>Sale Date</p>" +
                            "<p>"+days[dayOfSale.getDay()]+", "+timeToEndStr[0][2]+" "+months[dayOfSale.getMonth()]+" "+timeToEndStr[0][0]+"<br>"+timeToEndStr[1][0]+":"+timeToEndStr[1][1]+"</p>" +
                        "</div>" +
                        "<div class='single_car_time_left'>" +
                            "<p>Time Left</p>" +
                            "<p class='single_car_time_left_"+currentCar.vin+"'>---</p>" +
                        "</div>" +
                    "</div>" +
                    "<div class='single_car_buy_now'>" +
                        "<h3>Buy Now</h3>" +
                        "<div class='single_car_buy_now_fixed_price'>" +
                            "<p>Fixed Price</p>" +
                            "<p>"+currentCar.fixedPrice+"$</p>" +
                        "</div>" +
                        "<div class='single_car_buy_now_btn'>" +
                            "<input type='button' value='Buy Now'>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "");


        setInterval(function () {
            currentCar.lotTimerForSinglePage();
        }, 1000);

        $('#place_a_bid_input').keypress(function (event) {
            if (event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
            }
        });
        
        $('#bidNowBtn').click(function (event) {
            event.preventDefault();
            let currBidVal = $('#single_car_curr_bid_val').html();
            currBidVal = currBidVal.substring(0, $('#single_car_curr_bid_val').html().length-1);
            let newBid = $('#place_a_bid_input').val();
            //console.log(newBid);
            if (newBid >= Number(currBidVal)+100){
                $('#single_car_curr_bid_val').empty().html(newBid + "$");
                currentCar.placeBid(newBid);
                $('#place_a_bid_input').val('');
            }

            console.log(currentCar);


        });

        getGalleryFunctions();

        
    });

    getSimilarVehicles();


}

export default initSinglePage;