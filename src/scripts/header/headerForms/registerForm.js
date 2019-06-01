import User from "./User";

function getRegisterForm() {

    $('#register_btn').click(function (event) {
        event.preventDefault();
        $('.register_form_wrapper').slideDown(1000);
        $('.register_form').css({
            'margin-left' : $(window).width()/2 - $('.register_form').width()/2+'px',
            'margin-top' : $(window).height()/2 - $('.register_form').height()/2+'px'
        });

    });

    $('.close_img').click(()=>$('.register_form_wrapper').slideUp(1000));

    let usersArr = [];
    $.getJSON('json_data/users.json', {}, function (data) {

        for (let i = 0; i < data.length; i++){
            usersArr.push(data[i]);
        }
        localStorage.setItem('users', JSON.stringify(usersArr));
    });

    function checkEMail(){
        let eMails = [];
        let users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++){
            eMails.push(users[i].eMail);
        }
        return eMails;
    }

    $('#register_u_password').change(function () {
        if ($(this).val() == ""){
            $('#register_u_repeat_password').val("").removeAttr('style');
            return;

        }
        if ($('#register_u_repeat_password').val() != ""){

            if ($(this).val() == $('#register_u_repeat_password').val()){
                $('#register_u_repeat_password').css('border-color', 'green');
                $('#register_u_repeat_password').css('box-shadow', '0 0 8px 2px #0f0');
                return;
            }
            $('#register_u_repeat_password').css('border-color', 'red');
            $('#register_u_repeat_password').css('box-shadow', '0 0 8px 2px #f00');
        }else return;

    });


        $('#register_u_repeat_password').focus(function () {
            $(this).removeAttr('style');
        });

        $('#register_u_repeat_password').blur(function () {
            if ($(this).val() == ""){
                $(this).removeAttr('style');
                return;
            }
            if ($(this).val() != $('#register_u_password').val()){
                $(this).css('border-color', 'red');
                $(this).css('box-shadow', '0 0 8px 2px #f00');
            }else{
                $(this).css('border-color', 'green');
                $(this).css('box-shadow', '0 0 8px 2px #0f0');
            }
        });


    $('#register_u_email').focus(function () {
        $(this).removeAttr('style');
    });
    
    $('#register_u_email').blur(function () {
        if ($(this).val() == "") {
            $(this).removeAttr('style');
            $('#register_form>input[type="submit"]').prop('disabled', false);
            return;
        }
        let eMails = checkEMail();
        if (eMails.indexOf($(this).val()) != -1){
            $(this).css('border-color', 'red');
            $(this).css('box-shadow', '0 0 8px 2px #f00');
            $('#register_form>input[type="submit"]').prop('disabled', true);
        }else{
            $(this).css('border-color', 'green');
            $(this).css('box-shadow', '0 0 8px 2px #0f0');
            $('#register_form>input[type="submit"]').prop('disabled', false);
        }

    });


    $('#register_form').submit(function (event) {
        event.preventDefault();

        if ($('#register_u_password').val() != $('#register_u_repeat_password').val()) {
            return;
        }

        let user = new User(
            $('#register_u_fname').val(),
            $('#register_u_sname').val(),
            $('#register_u_email').val(),
            $('#register_u_phone').val(),
            $('#register_u_password').val()+"salt"
        );

        let users = JSON.parse(localStorage.getItem('users'));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        //console.log(JSON.parse(localStorage.getItem('users')));
        


        $('.registered_msg').fadeIn(1000, function () {
            setTimeout(function () {
                $('.registered_msg').fadeOut(1000);
            }, 1000);
            $('.register_form_wrapper').fadeOut();
        });



        $('#register_form')[0].reset();
        $('#register_u_email').removeAttr('style');
        $('#register_u_repeat_password').removeAttr('style');

    })

}

export default getRegisterForm;