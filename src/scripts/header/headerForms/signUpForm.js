function getSignUpForm() {

    $('.close_sign_up_form_img').click(()=>$('.sign_up_form_wrapper').slideUp(1000));

    
    if (sessionStorage.getItem('userEmail') != undefined){
        $('#sign_up_btn, #register_btn').css('display', 'none');
        $('#account_btn, #log_out_btn').css('display', 'inline-block');
    }else {
        $('#sign_up_btn, #register_btn').css('display', 'inline-block');
        $('#account_btn, #log_out_btn').css('display', 'none');
    }

    $('#sign_up_btn').click(function (event) {

        event.preventDefault();
        $('.sign_up_form_wrapper').slideDown(1000);

        $('.sign_up_form').css({
            'margin-left' : $(window).width()/2 - $('.sign_up_form').width()/2+'px',
            'margin-top' : $(window).height()/2 - $('.sign_up_form').height()/2+'px'
        });

        console.log(JSON.parse(localStorage.getItem('users')));
        let currentUsers = JSON.parse(localStorage.getItem('users'));
        let existingUsersMails = [];
        let existingUsersPasswords = [];
        for (let i = 0; i <currentUsers.length; i++){
            existingUsersMails.push(currentUsers[i].eMail);
            existingUsersPasswords.push(currentUsers[i].password);
        }


        $('#sign_up_form').submit(function (event) {
            event.preventDefault();

            if(existingUsersMails.indexOf($('#sign_up_email').val()) != -1){
                if (existingUsersPasswords[existingUsersMails.indexOf($('#sign_up_email').val())] == $('#sign_up_pswd').val()+"salt"){
                    console.log("Hello, "+ currentUsers[existingUsersMails.indexOf($('#sign_up_email').val())].firstName + " " + currentUsers[existingUsersMails.indexOf($('#sign_up_email').val())].lastName)
                    $('#sign_up_btn, #register_btn').css('display', 'none');
                    $('#account_btn, #log_out_btn').css('display', 'inline-block');
                    $('.sign_up_form_wrapper').css('display', 'none');
                    sessionStorage.setItem('userEmail', $('#sign_up_email').val());
                    sessionStorage.setItem('userIndex', existingUsersMails.indexOf($('#sign_up_email').val()));
                }else{
                    $('.invalid_msg').fadeIn(1000, function () {
                        setTimeout(function () {
                            $('.invalid_msg').fadeOut(1000);
                        }, 1000);
                    });
                }
            }
            else{
                $('.invalid_msg').fadeIn(1000, function () {
                    setTimeout(function () {
                        $('.invalid_msg').fadeOut(1000);
                    }, 1000);
                });
            }

            $(this)[0].reset();
        });

    });
}

export default getSignUpForm;