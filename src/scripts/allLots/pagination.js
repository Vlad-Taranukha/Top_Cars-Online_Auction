import clearAllIntervals from "./clearAllIntervals";

function getPagination(pageCount){
    $('.cars_bottom_pagination ul').empty();
    if (pageCount == 1){
        $('.cars_bottom_pagination ul').append("<li><a href='#' id='page_"+pageCount+"' class='active'>"+pageCount+"</a></li>");
    }else if (pageCount >= 2){
        for (let i = 1; i <= pageCount; i++){
            if (i == 1){
                $('.cars_bottom_pagination ul').append("<li><a href='#' id='page_"+i+"' class='active'>"+i+"</a></li>");
            }else{
                $('.cars_bottom_pagination ul').append("<li><a href='#' id='page_"+i+"'>"+i+"</a></li>");
            }
        }
        if (pageCount >= 2){
            if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
            }
        }
        if (pageCount > 2){
            if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
            }
        }
    }



    $('.cars_bottom_pagination').click(function (event) {

        $('.cars_list').empty();
        clearAllIntervals();
        if (event.target.tagName != 'A') {return;}
        else{
            event.preventDefault();



            if (pageCount == 1){
                return;
            }else if (pageCount >= 2){
                if (pageCount == 2){
                    if (event.target.innerHTML == 1){
                        $('#bottomPaginationPrevious').remove();
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                        }
                    }else if (event.target.innerHTML == 2) {
                        $('#bottomPaginationNext').remove();
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationPrevious').length == 0){
                            $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationPrevious'>Previous</a></li>");
                        }
                    }
                }
                if (pageCount > 2){
                    if (event.target.innerHTML == 1){
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                        }
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                        }
                    }


                    if (event.target.innerHTML >= 2){

                        if (event.target.innerHTML == 2){
                            $('#bottomPaginationFirst').remove();
                            if ($('.cars_bottom_pagination ul li').children('#bottomPaginationPrevious').length == 0){
                                $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationPrevious'>Previous</a></li>");
                            }
                            if (event.target.innerHTML == pageCount-1){
                                $('#bottomPaginationLast').remove();

                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                                }
                            }else{
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                                }
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                                }
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                                }
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                                }

                            }
                        }

                        if (event.target.innerHTML > 2){

                            if ($('.cars_bottom_pagination ul li').children('#bottomPaginationPrevious').length == 0){
                                $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationPrevious'>Previous</a></li>");
                            }
                            if ($('.cars_bottom_pagination ul li').children('#bottomPaginationFirst').length == 0){
                                $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationFirst'>First</a></li>");
                            }


                            if (event.target.innerHTML != pageCount-1){
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                                }
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                                }
                            }

                            if (event.target.innerHTML == pageCount-1){
                                $('#bottomPaginationLast').remove();
                                if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                                    $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                                }

                            }



                        }



                    }

                    if (event.target.innerHTML == 1 || event.target.innerText == "First"){
                        $('#bottomPaginationFirst').remove();
                        $('#bottomPaginationPrevious').remove();

                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationNext').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationNext'>Next</a></li>");
                        }

                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationLast').length == 0){
                            $('.cars_bottom_pagination ul').append("<li><a href='#' id='bottomPaginationLast'>Last</a></li>");
                        }
                    }


                    if (event.target.innerHTML == pageCount || event.target.innerText == "Last"){
                        $('#bottomPaginationNext').remove();
                        $('#bottomPaginationLast').remove();



                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationPrevious').length == 0){
                            $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationPrevious'>Previous</a></li>");
                        }
                        if ($('.cars_bottom_pagination ul li').children('#bottomPaginationFirst').length == 0){
                            $('.cars_bottom_pagination ul').prepend("<li><a href='#' id='bottomPaginationFirst'>First</a></li>");
                        }

                    }
                    
                    if (event.target.innerHTML == "Previous"){
                        //console.log(nowPage);
                    }
                }

            }
        }
    });
}

export default getPagination;