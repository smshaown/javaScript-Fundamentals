const color = 'red';

switch(color){
    case 'blue':
        console.log("Color is Blue");
        break;
    case 'red':
        console.log("Color is Red");
        break;
    case 'black':
        console.log("Color is Black");
        break;
    default:
        console.log("color is not red, blue or black")
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(`Today is ${day}`)