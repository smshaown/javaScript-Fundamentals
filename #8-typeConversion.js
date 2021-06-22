let val;

//Number to String
val = String(5);
val = String(5*5);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String 
val = String([1,2,3,4,6])

//toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello')
val = Number([1,2,3,5]);
val = parseInt('100.300');
val = parseFloat('100.20');


// //Output 
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed())


const val1 = 5;
const val2 = 5;
const sum = val1 +  val2;
console.log(sum);
console.log(typeof sum);