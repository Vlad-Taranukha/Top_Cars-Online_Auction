function logOut() {
    $('#log_out_btn').click(function () {
        sessionStorage.clear();
        $('#sign_up_btn, #register_btn').css('display', 'inline-block');
        $('#account_btn, #log_out_btn').css('display', 'none');
        location.href = "#index";
    });
}

export default logOut;