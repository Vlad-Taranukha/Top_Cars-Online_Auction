import getSignUpForm from "./headerForms/signUpForm";
import getRegisterForm from "./headerForms/registerForm";
import logOut from "./headerForms/logOut";
import openAccount from "./headerForms/myAccount";
import headerSearchformResults from "../search/headerSearchForm";

function getHeader() {
    getSignUpForm();
    getRegisterForm();
    logOut();
    openAccount();
    headerSearchformResults();
}

export default getHeader;