function openAccount() {
    $('#account_btn').click(function () {
        location.hash = "#add";
        let allUsers = JSON.parse(localStorage.getItem('users'));
        let cUser = allUsers[sessionStorage.getItem('userIndex')];
        $('.user_info').html("");
        $('.user_info').append("<p>Hello, <span>"+cUser.firstName+" "+cUser.lastName+"</span></p>");
    });
}

export default openAccount;