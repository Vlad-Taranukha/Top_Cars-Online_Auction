import setTimerFormat from "../timerFormat";

export default class Lot {
    constructor(
        name,
        model,
        year,
        mileage,
        damage,
        location,
        carType,
        fuel,
        gearbox,
        cylinder,
        drive,
        engineCapacity,
        vin,
        color,
        power,
        minimalBid,
        saleDate,
        fixedPrice,
        imageSrc,
        )
    {
        this.name = name;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.damage = damage;
        this.location = location;
        this.carType = carType;
        this. fuel = fuel;
        this.gearbox = gearbox;
        this.cylinder = cylinder;
        this.drive = drive;
        this.engineCapacity = engineCapacity;
        this.vin = vin;
        this.color = color;
        this.power = power;
        this.minimalBid = minimalBid;
        this.saleDate = saleDate;
        this.fixedPrice = fixedPrice;
        this.imageSrc = imageSrc;

        this.timeLeft = 0;
    }


    lotTimer(){
        if (this.timeLeft <= 0){
            $('#add_lot_'+this.vin).html("Auction finished");
            return false;
        }
        this.timeLeft--;
        let resTime = setTimerFormat(this.timeLeft);
        let resTimeStr = resTime[0]+"d. "+resTime[1]+"h. "+resTime[2]+"m. "+resTime[3]+"s";
        $('#add_lot_'+this.vin).html(resTimeStr);
    }

    lotTimerforAllPage(){
        if (this.timeLeft <= 0){
            $('.car_item_timer_'+this.vin).html("Auction finished...");
        }else{
            this.timeLeft--;
            let resTime = setTimerFormat(this.timeLeft);
            let resTimeStr = resTime[0]+"d. "+resTime[1]+"h. "+resTime[2]+"m. "+resTime[3]+"s";
            $('.car_item_timer_'+this.vin).html("Time left: "+resTimeStr);
        }

    }

}