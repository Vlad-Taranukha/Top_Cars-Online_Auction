import clearContentBlock from "../clearContentBlock";
import setTimerFormat from "../timerFormat";
import addLot from "./addLot";
import setInputEqualWidth from "./setInputEqualWidth";
import createLot from "./createLot";
import showHideLotInfo from "./showHideLotInfo";


function initAddPage() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.add_lot_wrapper').css('display', 'block');
    let allUsers = JSON.parse(localStorage.getItem('users'));
    let cUser = allUsers[sessionStorage.getItem('userIndex')];
    $('.user_info').html("");
    $('.user_info').append("<p>Hello, <span>"+cUser.firstName+" "+cUser.lastName+"</span></p>");









    $.getJSON('json_data/add_lot_list.json', {}, function (data) {

        $('.add_lot_lotList_items').empty();

        for (let i = 0; i < 2; i++){

            let saleDate = data[i].saleDate.split("T");
            let saleDateDate = saleDate[0].split('-');
            let saleDateTime = saleDate[1].split(':');
            let date = new Date(saleDateDate[0], saleDateDate[1]-1, saleDateDate[2], saleDateTime[0], saleDateTime[1]);
            let dateInSeconds = date.getTime();
            data[i].timeLeft = dateInSeconds - Date.now();
            data[i].timeLeft /= 1000;

            function lotTimer(date){
                setInterval(function () {
                    if (date <= 0){
                        $('.timeLeftTimer').eq(i).html("Auction finished...");
                    }else{
                        --date;
                        let res = setTimerFormat(date);
                        let resStr = res[0]+"d. "+res[1]+"h. "+res[2]+"m. "+res[3]+"s";
                        $('.timeLeftTimer').eq(i).html(resStr);
                    }

                }, 1000);
            }




            $('.add_lot_lotList_items').append(
                "" +
                "<div class='add_lot_lotList_item'>" +
                    "<div class='add_lot_lotList_item_details'>" +
                        "<h3>"+data[i].name+" "+data[i].model+" <span>"+data[i].year+"</span></h3>" +
                        "<div class='add_lot_lotList_item_details_inner_wrapper'>" +
                            "<div class='add_lot_lotList_item_details_img'>" +
                                "<img src='"+data[i].imageSrc+"' alt=''>" +
                            "</div>" +
                            "<div class='add_lot_lotList_item_details_show_car_info'>" +
                                "<p>Show car info</p>" +
                            "</div>" +
                            "<div class='add_lot_lotList_item_details_info'>" +
                                "<div class='add_lot_lotList_item_detailed_info'>" +
                                    "<div class='add_lot_lotList_item_detailed_info_column_1'>" +
                                        "<div>" +
                                            "<p class='mileage'></p>" +
                                            "<p>"+data[i].mileage+" km</p>" +
                                        "</div>" +
                                    "<div>" +
                                        "<p class='car_type'></p>" +
                                        "<p>"+data[i].carType+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='cylinders'></p>" +
                                        "<p>"+data[i].cylinder+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='vin'></p>" +
                                        "<p>"+data[i].vin+"</p>" +
                                    "</div>" +
                                "</div>" +
                                "<div class='add_lot_lotList_item_detailed_info_column_2'>" +
                                    "<div>" +
                                        "<p class='damage'></p>" +
                                        "<p>"+data[i].damage+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='fuel'></p>" +
                                        "<p>"+data[i].fuel+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='drive'></p>" +
                                        "<p>"+data[i].drive+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='color'></p>" +
                                        "<p>"+data[i].color+"</p>" +
                                    "</div>" +
                                "</div>" +
                                "<div class='add_lot_lotList_item_detailed_info_column_3'>" +
                                    "<div>" +
                                        "<p class='location'></p>" +
                                        "<p>"+data[i].location+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='gearbox'></p>" +
                                        "<p>"+data[i].gearbox+"</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='engine'></p>" +
                                        "<p>"+data[i].engineCapacity+"L</p>" +
                                    "</div>" +
                                    "<div>" +
                                        "<p class='engine_power'></p>" +
                                        "<p>"+data[i].power+"HP</p>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='add_lot_lotList_item_details_hide_car_info'>" +
                            "<p>Hide car info</p>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='add_lot_lotList_item_bid_and_sale_date_info'>" +
                    "<div>" +
                        "<p>Minimal bid </p>" +
                        "<p>"+data[i].minimalBid+"$</p>" +
                    "</div>" +
                    "<div>" +
                        "<p>Sale date</p>" +
                        "<p>"+saleDateDate[2]+"."+saleDateDate[1]+"."+saleDateDate[0]+" "+saleDateTime.join(':')+"</p>" +
                    "</div>" +
                    "<div class='timer_wrapper'>" +
                        "<p>Time left</p>" +
                        "<p class='timeLeftTimer'>"+lotTimer(data[i].timeLeft)+"</p>"+
                    "</div>" +
                    "<div>" +
                        "<p>Fixed price</p>" +
                        "<p>"+data[i].fixedPrice+"$</p>" +
                    "</div>" +
                "</div>" +
                "<div class='add_lot_lotList_item_edit_delete'>" +
                    "<p><a href='#'>Edit lot</a></p>" +
                    "<p><a href='#'>Delete lot</a></p>" +
                "</div>" +
            "</div>"
            );
            $('.timer_wrapper').eq(i).css({'opacity':0, 'display':'flex'});
            $('.timer_wrapper').eq(i).animate({opacity:1},10000);
        }

        showHideLotInfo();
    });

    addLot();
    setInputEqualWidth();
    createLot();


}

export default initAddPage;