function setTimerFormat(date) {

    let days = (date / 86400);
    days = String(days);
    days = days.substring(0, days.indexOf('.'));

    let secondsWithoutDays = 0;
    if (days == 0){
        secondsWithoutDays = date % 86400;
    }else{
        secondsWithoutDays = date % (86400 * days);
    }

    let hours = secondsWithoutDays / 3600;
    hours = String(hours);
    hours = hours.substring(0, hours.indexOf('.'));

    let secondsWithoutHours = 0;
    if (hours == 0){
        secondsWithoutHours = secondsWithoutDays % 3600;
    }else{
        secondsWithoutHours = secondsWithoutDays % (3600 * hours);
    }

    let minutes = secondsWithoutHours / 60;
    minutes = String(minutes);
    minutes = minutes.substring(0, minutes.indexOf('.'));

    let secondsWithoutMinutes = 0;
    if(minutes == 0){
        secondsWithoutMinutes = secondsWithoutHours % 60 ;
    }else{
        secondsWithoutMinutes = secondsWithoutHours % (60 * minutes);
    }
    secondsWithoutMinutes = String(secondsWithoutMinutes);
    secondsWithoutMinutes = secondsWithoutMinutes.substring(0, secondsWithoutMinutes.indexOf('.'));

    if (days < 10){
        days = "0"+days;
    }
    if (hours < 10){
        hours = "0"+hours;
    }
    if (minutes < 10){
        minutes = "0"+minutes;
    }
    if (secondsWithoutMinutes < 10){
        secondsWithoutMinutes = "0"+secondsWithoutMinutes;
    }




    return [days, hours, minutes, secondsWithoutMinutes];
}

export default setTimerFormat;