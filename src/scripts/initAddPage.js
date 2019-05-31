import clearContentBlock from "./clearContentBlock";

function initAddPage() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.add_lot_wrapper').css('display', 'block');
    let allUsers = JSON.parse(localStorage.getItem('users'));
    let cUser = allUsers[sessionStorage.getItem('userIndex')];
    $('.user_info').html("");
    $('.user_info').append("<p>Hello, <span>"+cUser.firstName+" "+cUser.lastName+"</span></p>");
}

export default initAddPage;