import getSignUpForm from "./headerForms/signUpForm";
import getRegisterForm from "./headerForms/registerForm";
import logOut from "./headerForms/logOut";
import openAccount from "./headerForms/myAccount";

function getHeader() {
    getSignUpForm();
    getRegisterForm();
    logOut();
    openAccount();
}

export default getHeader;