import refactorDateIntoArr from "./refactorDateIntoArr";

function fullFillContent(obj) {


        $('.cars_list').append("" +
            "<div class='car_item'>" +
            "<div class='car_item_img'>" +
            "<a href='#car"+obj.vin+"'><img src='"+obj.imageSrc+"' alt=''></a>" +
            "</div>" +
            "<div class='car_item_info'>" +
            "<h3>" +
            "<a href='#car"+obj.vin+"'>"+obj.name+" "+obj.model+"</a>" +
            "<span class='car_item_timer car_item_timer_"+obj.vin+"'>Time left </span>" +
            "<span class='car_item_year'>"+obj.year+"</span>" +
            "</h3>" +
            "<div class='car_item_data_and_bid_info'>" +
            "<div class='car_item_data'>" +
            "<div class='car_item_detailed_info'>" +
            "<div class='car_item_engine_petrol_power'>" +
            "<div class='car_item_engine'>"+obj.engineCapacity+"L</div>" +
            "<div class='car_item_petrol'>"+obj.fuel+"</div>" +
            "<div class='car_item_power'>"+obj.power+" HP</div>" +
            "</div>" +
            "<div class='car_item_mileage_gearbox_drive'>" +
            "<div class='car_item_mileage'>"+obj.mileage+" km.</div>" +
            "<div class='car_item_gearbox'>"+obj.gearbox+"</div>" +
            "<div class='car_item_drive'>"+obj.drive+"</div>" +
            "</div>" +
            "<div class='car_item_location_body_style_damage'>" +
            "<div class='car_item_location'>"+obj.location+"</div>" +
            "<div class='car_item_body_style'>"+obj.carType+"</div>" +
            "<div class='car_item_damage'>"+obj.damage+"</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='car_item_bid_info'>" +
            "<div class='car_item_buy_for_a_fixed_price'>" +
            "<p>Fixed Price <span>$"+obj.fixedPrice+"</span></p>" +
            "<p><a class='car_item_fixed_price_buy_now_btn' href='#car"+obj.vin+"'>Buy Now</a></p>" +
            "</div>" +
            "<div class='car_item_bid_block'>" +
            "<p>Current Bid <span>$"+obj.minimalBid+"</span></p>" +
            "<p><a class='car_item_bid_now_btn' href='#car"+obj.vin+"'>Bid Now</a></p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

        let timeToEndStr = refactorDateIntoArr(obj.saleDate);


        let timeToEnd = new Date(
            timeToEndStr[0][0],
            timeToEndStr[0][1]-1,
            timeToEndStr[0][2],
            timeToEndStr[1][0],
            timeToEndStr[1][1]
        );
        timeToEnd = timeToEnd.getTime();
        obj.timeLeft = (timeToEnd - Date.now())/1000;

        setInterval(function () {
            obj.lotTimerforAllPage();
        }, 1000);


}

export default fullFillContent;