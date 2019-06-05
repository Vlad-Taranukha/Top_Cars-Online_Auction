function getFeaturedCars(){
    $.getJSON('json_data/data.json', {}, function (data) {
        for (let i = 0; i < 3; i++){
            $('.featured_cars').append(
                "<div class='featured_car'>" +
                "<div class='featured_car_img'>" +
                "<a href='#car"+data[i].vin+"'>"+
                "<img src='"+data[i].imageSrc+"' alt=''>"+
                "</a>"+
                "</div>"+
                "<div class='featured_car_info'>" +
                "<h3>" +
                "<a href='#car"+data[i].vin+"'>"+data[i].name+" "+data[i].model+"</a><span>"+data[i].year+"</span>" +
                "</h3>"+
                "<div class='featured_car_detailed_info'>" +
                "<div class='mileage_and_petrol'>" +
                "<div class='mileage'>"+data[i].mileage+" km.</div>" +
                "<div class='petrol'>"+data[i].fuel+"</div>" +
                "</div>"+
                "<div class='location_and_gearbox'>" +
                "<div class='location'>"+data[i].location+"</div>" +
                "<div class='gearbox'>"+data[i].gearbox+"</div>" +
                "</div>"+
                "</div>"+
                "<div class='fixed_price'>" +
                "Fixed Price <span>$ "+data[i].fixedPrice+"</span>" +
                "</div>"+
                "</div>"+
                "</div>"
            );
        }
    });
}

export default getFeaturedCars;