import clearContentBlock from "../clearContentBlock";
import Lot from "../addLot/Lot";
import fullFillContent from "./fullfillContent";
import clearAllIntervals from "./clearAllIntervals";
import getPagination from "./pagination";
import sortLots from "./sorting";
import wrapSpans from "./wrapSpans";
import initFilters from "./filtrationInit";
import backToTopBtn from "./backToTop";


function initAllPage() {
    $(window).scrollTop($('.cars').offset().top);

    initFilters();



    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.all_cars_wrapper').css('display', 'block');


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

        $('.cars h3').empty().prepend(allLots.length+" cars are on sale now!");

        $('.cars_list').empty();
        clearAllIntervals();

        if (data.length < 10){
            for (let i = 0; i < data.length; i++){
                fullFillContent(allLots[i]);
            }
        }else{
            for (let i = 0; i < 10; i++){
                fullFillContent(allLots[i]);
            }
        }

        let numberOfPages = Math.ceil(data.length / 10);

        getPagination(numberOfPages);

        $('.cars_bottom_pagination').click(function (event) {

            $(window).scrollTop($('.cars').offset().top);
            let nowPage = $('.active').html();
            $('.cars_bottom_pagination ul li a').removeClass('active');
            if (event.target.innerHTML != "Next" && event.target.innerHTML != "Last" && event.target.innerHTML != "Previous" && event.target.innerHTML != "First") {
                $(event.target).addClass('active');
            }
            if (event.target.tagName != 'A') {return;}
            else {



                if (event.target.innerText == 1 || event.target.innerText == "First"){
                    $('#page_1').addClass('active');
                    for (let i = 0; i < 10; i++){
                        fullFillContent(allLots[i]);
                    }
                    wrapSpans();

                }else if (event.target.innerText == numberOfPages || event.target.innerText == "Last") {
                    $('#page_'+numberOfPages).addClass('active');
                    let from = numberOfPages - 1 + "0";
                    for (let i = from; i < data.length; i++) {
                        fullFillContent(allLots[i]);
                    }
                    wrapSpans();

                }else if(event.target.innerText == "Next"){
                    if (nowPage == 1){
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationPrevious').length == 0){
                            $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationPrevious'>Previous</a></li>");
                        }
                    }
                    if (nowPage == 2){
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationFirst').length == 0){
                            $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationFirst'>First</a></li>");
                        }
                    }
                    let from = +nowPage + "0";
                    let to = +nowPage + "9";

                    if ((+nowPage+1) == numberOfPages){


                        to = data.length;
                        for (let i = from; i < to; i++) {
                            fullFillContent(allLots[i]);
                        }
                    }else{
                        for (let i = from; i <= to; i++) {
                            fullFillContent(allLots[i]);
                        }
                    }

                    nowPage = +nowPage + 1;
                    let nextL = "#page_"+nowPage;
                    $(nextL).addClass('active');
                    if ($(nextL).html() == numberOfPages-1){
                        $('#bottomPaginationLast').remove();
                    }
                    if ($(nextL).html() == numberOfPages){
                        $('#bottomPaginationNext').remove();
                        return;
                    }
                    wrapSpans();

                }else if(event.target.innerText == "Previous"){
                    nowPage = +nowPage - 1;
                    let prevL = "#page_"+nowPage;
                    $(prevL).addClass('active');

                    if (+nowPage == 1){
                        for (let i = 0; i < 10; i++) {
                            fullFillContent(allLots[i]);
                        }
                    }else{
                        let from = +nowPage-1+"0";
                        let to = +nowPage-1+"9";
                        for (let i = from; i <= to; i++) {
                            fullFillContent(allLots[i]);
                        }
                    }

                    if ($(prevL).html() == 2){
                        $('#bottomPaginationFirst').remove();
                    }
                    if ($(prevL).html() == 1){
                        $('#bottomPaginationPrevious').remove();
                        return;
                    }
                    if ($(prevL).html() == numberOfPages-1){
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                        }
                    }
                    if ($(prevL).html() == numberOfPages-2){
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                        }
                    }
                    wrapSpans();

                }else{

                    let from = +event.target.innerText-1 + "0";
                    let to = +event.target.innerText-1 + "9";
                    for (let i = from; i <= to; i++) {
                        fullFillContent(allLots[i]);
                    }
                    wrapSpans();

                }
            }
        });

        $('#sort_cars_select').change(function () {
            sortLots();
        });

        wrapSpans();
    });

    backToTopBtn();





















}

export default initAllPage;