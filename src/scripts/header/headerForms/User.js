export default class User{
    constructor(firstName, lastName, eMail, phone, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.phone = phone;
        this.password = password;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}