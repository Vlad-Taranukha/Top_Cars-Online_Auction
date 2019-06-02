import Lot from "./Lot";

function createLot(){
    $.getJSON('json_data/makes.json', {}, function (data) {
        data.sort();
        $('#new_lot_form_car_maker').empty().append("<option value='' selected></option>");
        $('#new_lot_form_car_maker').css({
            'max-height':'100%',
            'overflow':'scroll'
        });
        for (let i = 0; i < data.length; i++){
            $('#new_lot_form_car_maker').append("<option value='"+data[i]+"'>"+data[i]+"</option>")
        }
    })
    $('#new_lot_form_car_maker').change(function () {
        if ($(this).val() != ""){
            $("#new_lot_make").html($(this).val());
            $('#new_lot_model').html("---");
            $('#new_lot_form_car_model').prop('disabled', false);

            $.getJSON('json_data/models.json', {}, function (data) {
                let carNameLowerCase = $('#new_lot_form_car_maker').val().toLowerCase();
                let models = data[carNameLowerCase].toUpperCase();
                models = models.split(', ');
                models.sort();
                $('#new_lot_form_car_model').empty().append("<option value='' selected></option>");
                for (let i = 0; i < models.length; i++){
                    $('#new_lot_form_car_model').append("<option value='"+models[i]+"'>"+models[i]+"</option>");
                }
            });
        }
        else{
            $('#new_lot_make').html("---");
            $('#new_lot_model').html("---");
            $('#new_lot_form_car_model').empty();
            $('#new_lot_form_car_model').prop('disabled', true);

        }

    });

    $('#new_lot_form_car_model').change(function () {
        if ($(this).val() != ""){
            $('#new_lot_model').html($(this).val());
        }else{
            $('#new_lot_model').html("---");
        }
    });

    $('#new_lot_form_car_year').empty().append("<option value='' selected></option>");
    let date = new Date();
    for (let i = 1975; i <= date.getFullYear(); i++){
        $('#new_lot_form_car_year').append("<option value='"+i+"'>"+i+"</option>");
    }

    $('#new_lot_form_car_year').change(function () {
        if ($(this).val() != ""){
            $('#new_lot_year').html($(this).val());
        }else{
            $('#new_lot_year').html("---");
        }
    });


    $('#new_lot_form_car_mileage').keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
        }
    });
    $('#new_lot_form_car_mileage').change(function () {
        if ($(this).val() != 0){
            $('.mileage').siblings('p').html(Math.abs($(this).val())+ " km.");
        }else if ($(this).val() == ""){
            $('.mileage').siblings('p').html("---");
        }else if ($(this).val() == 0) {
            $('.mileage').siblings('p').html("new car");
        }
    });

    let damage_types = [
        "Normal Wear",
        "Front End",
        "Back End",
        "Side",
        "Roof",
        "All Over",
        "Burn",
        "Mechanical",
        "Hail",
        "Scratches",
        "Rollover",
        "undercarriage",
        "vandalism",
        "water/flood"
    ];
    damage_types.sort();
    $('#new_lot_form_car_damage').empty().append("<option value='' selected></option>");
    for (let i = 0; i < damage_types.length; i++){
        $('#new_lot_form_car_damage').append("<option value='"+damage_types[i]+"'>"+damage_types[i]+"</option>")
    }
    
    $('#new_lot_form_car_damage').change(function () {
        if ($(this).val() != ""){
            $('.damage').siblings('p').html($(this).val());
        }else{
            $('.damage').siblings('p').html("---");
        }

    });

    let cities = ["Vinnytsia", "Kyiv", "Odessa", "Dnipro", "Kharkiv", "Lviv", "Ivano-Frankivsk"];
    cities.sort();
    $('#new_lot_form_car_location').empty().append("<option value='' selected></option>");
    for (let i = 0; i < cities.length; i++){
        $('#new_lot_form_car_location').append("<option value='"+cities[i]+"'>"+cities[i]+"</option>");
    }
    $('#new_lot_form_car_location').change(function () {
        if ($(this).val() == ""){
            $('.location').siblings('p').html("---");
        }else{
            $('.location').siblings('p').html($(this).val());
        }
    });

    let carTypes = ["Sedan", "SUV", "2d Coupe", "4d Coupe", "Hatchback", "Cabrio/Roadster", "Pick-Up", "Estate Car", "Van/Minibus"];
    carTypes = carTypes.sort();
    $('#new_lot_form_car_type').empty().append("<option value='' selected></option>");
    for (let i = 0; i < carTypes.length; i++){
        $('#new_lot_form_car_type').append("<option value='"+carTypes[i]+"'>"+carTypes[i]+"</option>");
    }
    $('#new_lot_form_car_type').change(function () {
        if ($(this).val() == ""){
            $('.car_type').siblings('p').html("---");
        }else{
            $('.car_type').siblings('p').html($(this).val());
        }
    });

    let fuelTypes = ["Petrol", "Diesel", "Electric", "LPG", "Combined (petrol/LPG)", "Hybrid (petrol/electric)"];
    fuelTypes = fuelTypes.sort();
    $('#new_lot_form_car_fuel').empty().append("<option value='' selected></option>");
    for (let i = 0; i < fuelTypes.length; i++){
        $('#new_lot_form_car_fuel').append("<option value='"+fuelTypes[i]+"'>"+fuelTypes[i]+"</option>");
    }
    $('#new_lot_form_car_fuel').change(function () {
        if ($(this).val() == ""){
            $('.fuel').siblings('p').html("---");
        }else{
            $('.fuel').siblings('p').html($(this).val());
        }
    });

    let transmissionType = ['Manual', 'Automatic'];
    transmissionType = transmissionType.sort();
    $('#new_lot_form_car_transmission').empty().append("<option value='' selected></option>");
    for (let i = 0; i < transmissionType.length; i++){
        $('#new_lot_form_car_transmission').append("<option value='"+transmissionType[i]+"'>"+transmissionType[i]+"</option>");
    }
    $('#new_lot_form_car_transmission').change(function () {
        if ($(this).val() == ""){
            $('.gearbox').siblings('p').html("---");
        }else{
            $('.gearbox').siblings('p').html($(this).val());
        }
    });

    let cylinderCount = [3, 4, 5, 6, 8, 10, 12, 16];
    cylinderCount = cylinderCount.sort(function (a, b) {
        return a-b;
    });
    $('#new_lot_form_car_cylinder').empty().append("<option value='' selected></option>");
    for (let i = 0; i < cylinderCount.length; i++){
        $('#new_lot_form_car_cylinder').append("<option value='"+cylinderCount[i]+"'>"+cylinderCount[i]+"</option>");
    }
    $('#new_lot_form_car_cylinder').change(function () {
        if ($(this).val() == ""){
            $('.cylinders').siblings('p').html("---");
        }else{
            $('.cylinders').siblings('p').html($(this).val());
        }
    });

    let drive = ["FWD", "RWD", "AWD", "4WD/FWD", "4WD/RWD"];
    drive = drive.sort();
    $('#new_lot_form_car_drive').empty().append("<option value='' selected></option>");
    for (let i = 0; i < drive.length; i++){
        $('#new_lot_form_car_drive').append("<option value='"+drive[i]+"'>"+drive[i]+"</option>");
    }
    $('#new_lot_form_car_drive').change(function () {
        if ($(this).val() == ""){
            $('.drive').siblings('p').html("---");
        }else{
            $('.drive').siblings('p').html($(this).val());
        }
    });

    $('#new_lot_form_car_engine').empty().append("<option value='' selected></option>");
    for (let i = 1.0; i <= 8.0; i+=0.1){
        $('#new_lot_form_car_engine').append("<option value='"+i.toFixed(1)+"'>"+i.toFixed(1)+"</option>");
    }
    $('#new_lot_form_car_engine').change(function () {
        if ($(this).val() != ""){
            $('.engine').siblings('p').html($(this).val()+"L");
        }else{
            $('.engine').siblings('p').html("---");
        }
    });



    $('#new_lot_form_car_vin').keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
        }
    });
    $('#new_lot_form_car_vin').change(function () {


        if ($(this).val().length == 8){
            $('.vin').siblings('p').html($(this).val());
        }else{
            $('.vin').siblings('p').html("---");
        }
    });



    $('#new_lot_form_car_color').keypress(function (event) {
        if (event.keyCode < 65 || (event.keyCode> 90 && event.keyCode < 97) || event.keyCode>122){
            event.preventDefault();
        }
    });
    $('#new_lot_form_car_color').change(function () {

        if ($(this).val() != ""){
            $('.color').siblings('p').html($(this).val());
        }else{
            $('.color').siblings('p').html("---");
        }
    });


    $('#new_lot_form_car_power').keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode> 57){
            event.preventDefault();
        }
    });
    $('#new_lot_form_car_power').change(function () {

        if ($(this).val() != ""){
            $('.engine_power').siblings('p').html($(this).val()+"HP");
        }else{
            $('.engine_power').siblings('p').html("---");
        }
    });


    $('#new_lot_form_car_min_bid').keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode> 57){
            event.preventDefault();
        }
    });
    $('#new_lot_form_car_min_bid').change(function () {
        if ($(this).val() != ""){
            $('#minimal_bid_span').html($(this).val()+" $");
        }else{
            $('#minimal_bid_span').siblings('p').html("---");
        }
    });
    let month = date.getMonth() + 1;
    month = (month < 10) ? "0"+month : month;
    let day = (date.getDate() < 10) ? "0"+date.getDate() : date.getDate();
    let hours = (date.getHours() < 10) ? "0"+date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? "0"+date.getMinutes() : date.getMinutes();
    $('#new_lot_form_car_sale_date').attr("value", date.getFullYear()+"-"+month+"-"+day+"T"+hours+":"+minutes);

    $('#new_lot_form_car_sale_date').change(function () {
        if ($(this).val() != ""){
            let saleDate = $(this).val();
            saleDate = saleDate.split("T");
            saleDate[0] = saleDate[0].split("-");
            $('#sale_date_span').html(saleDate[0][2]+"."+saleDate[0][1]+"."+saleDate[0][0]+" "+saleDate[1]);
        }else{
            $('#sale_date_span').siblings('p').html("---");
        }
    });

    $('#new_lot_form_car_fixed_price').keypress(function () {
        if (event.keyCode < 48 || event.keyCode> 57){
            event.preventDefault();
        }
    });

    $('#new_lot_form_car_fixed_price').change(function () {
        if ($(this).val() != ""){
            $('#fixed_price_span').html($(this).val()+" $");
        }else{
            $('#fixed_price_span').html("---");
        }
    });
    
    $('#new_lot_form_car_photo1').change(function () {
        let img = $(this).val().substring($(this).val().lastIndexOf('\\')+1);
        $('.new_lot_demo_img').empty().append("<img src='images/"+img+"' alt='"+img+"'>");
    });





    $('#new_lot_form').submit(function (event) {
        event.preventDefault();
        let lot = new Lot(
            $('#new_lot_form_car_maker').val(),
            $('#new_lot_form_car_model').val(),
            $('#new_lot_form_car_year').val(),
            $('#new_lot_form_car_mileage').val(),
            $('#new_lot_form_car_damage').val(),
            $('#new_lot_form_car_location').val(),
            $('#new_lot_form_car_type').val(),
            $('#new_lot_form_car_fuel').val(),
            $('#new_lot_form_car_transmission').val(),
            $('#new_lot_form_car_cylinder').val(),
            $('#new_lot_form_car_drive').val(),
            $('#new_lot_form_car_engine').val(),
            $('#new_lot_form_car_vin').val(),
            $('#new_lot_form_car_color').val(),
            $('#new_lot_form_car_power').val(),
            $('#new_lot_form_car_min_bid').val(),
            $('#new_lot_form_car_sale_date').val(),
            $('#new_lot_form_car_fixed_price').val(),
            $('.new_lot_demo_img img').attr('src')
        );

        lot.saleDate = lot.saleDate.split("T");
        lot.saleDate[0] = lot.saleDate[0].split("-");
        lot.saleDate[1] = lot.saleDate[1].split(":");

        let timeToEnd = new Date(
            lot.saleDate[0][0],
            lot.saleDate[0][1]-1,
            lot.saleDate[0][2],
            lot.saleDate[1][0],
            lot.saleDate[1][1]
        );
        timeToEnd = timeToEnd.getTime();
        lot.timeLeft = (timeToEnd - Date.now())/1000;


        //console.log(lot);

        $('.add_lot_lotList_items').append(
            "" +
            "<div class='add_lot_lotList_item'>" +
            "<div class='add_lot_lotList_item_details'>" +
            "<h3>"+lot.name+" "+lot.model+" <span>"+lot.year+"</span></h3>" +
            "<div class='add_lot_lotList_item_details_inner_wrapper'>" +
            "<div class='add_lot_lotList_item_details_img'>" +
            "<img src='"+lot.imageSrc+"' alt=''>" +
            "</div>" +
            "<div class='add_lot_lotList_item_details_show_car_info'>" +
            "<p>Show car info</p>" +
            "</div>" +
            "<div class='add_lot_lotList_item_details_info'>" +
            "<div class='add_lot_lotList_item_detailed_info'>" +
            "<div class='add_lot_lotList_item_detailed_info_column_1'>" +
            "<div>" +
            "<p class='mileage'></p>" +
            "<p>"+lot.mileage+" km</p>" +
            "</div>" +
            "<div>" +
            "<p class='car_type'></p>" +
            "<p>"+lot.carType+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='cylinders'></p>" +
            "<p>"+lot.cylinder+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='vin'></p>" +
            "<p>"+lot.vin+"</p>" +
            "</div>" +
            "</div>" +
            "<div class='add_lot_lotList_item_detailed_info_column_2'>" +
            "<div>" +
            "<p class='damage'></p>" +
            "<p>"+lot.damage+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='fuel'></p>" +
            "<p>"+lot.fuel+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='drive'></p>" +
            "<p>"+lot.drive+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='color'></p>" +
            "<p>"+lot.color+"</p>" +
            "</div>" +
            "</div>" +
            "<div class='add_lot_lotList_item_detailed_info_column_3'>" +
            "<div>" +
            "<p class='location'></p>" +
            "<p>"+lot.location+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='gearbox'></p>" +
            "<p>"+lot.gearbox+"</p>" +
            "</div>" +
            "<div>" +
            "<p class='engine'></p>" +
            "<p>"+lot.engineCapacity+"L</p>" +
            "</div>" +
            "<div>" +
            "<p class='engine_power'></p>" +
            "<p>"+lot.power+"HP</p>" +
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
            "<p>"+lot.minimalBid+"$</p>" +
            "</div>" +
            "<div>" +
            "<p>Sale date</p>" +
            "<p>"+
                lot.saleDate[0][2]+"."+
                lot.saleDate[0][1]+"."+
                lot.saleDate[0][0]+" "+
                lot.saleDate[1][0]+":"+
                lot.saleDate[1][1]+
            "</p>" +
            "</div>" +
            "<div class='timer_wrapper_'"+lot.vin+">" +
            "<p>Time left</p>" +
            "<p class='timeLeftTimer' id='add_lot_"+lot.vin+"'></p>"+
            "</div>" +
            "<div>" +
            "<p>Fixed price</p>" +
            "<p>"+lot.fixedPrice+"$</p>" +
            "</div>" +
            "</div>" +
            "<div class='add_lot_lotList_item_edit_delete'>" +
            "<p><a href='#'>Edit lot</a></p>" +
            "<p><a href='#'>Delete lot</a></p>" +
            "</div>" +
            "</div>"
        );

        setInterval(function () {
            lot.lotTimer();
        }, 1000);
        $(".timer_wrapper_"+lot.vin+"").css({'opacity':0, 'display':'flex'});
        $(".timer_wrapper_"+lot.vin+"").animate({opacity:1},10000);


    });









}

export default createLot;