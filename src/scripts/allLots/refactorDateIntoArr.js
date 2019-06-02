function refactorDateIntoArr(str){
    str = str.split("T");
    str[0] = str[0].split("-");
    str[1] = str[1].split(":");
    return str;
}

export default refactorDateIntoArr;