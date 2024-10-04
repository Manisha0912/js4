function GenOtp(){
    let num = Math.floor(Math.random() * 1000000);
    if (num.toString().length == 6) {
        return num;
    }
}




console.log(otp());
console.log(GenOtp())
let todayDate = new Date()
let hours = todayDate.getHours()
function times(hours) {
    if (hours > 12) {
        return hours - 12;
    } else {
        return hours;
    }
}
console.log(times(hours));


//  create a function to generate the otp of 6 digits

function otp() {
    let num = Math.floor(Math.random() * 1000000);
    if (num.toString().length == 6) {
        return num;
    }
}
console.log(otp());


//  based on the number create a function to return day of the week

let today = new Date()
let day = today.getDay()
console.log(day);
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}