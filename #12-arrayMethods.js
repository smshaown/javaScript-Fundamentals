//Create Some Arrays
const numbers = [10, 22, 50, 60, 25, 100, 8];

const numbers2 = new Array(10, 22, 50, 60, 25, 100, 8);

const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

//Get array Length
val = numbers.length;

// Check if is array
val = Array.isArray(mixed);

//Get Single Value
val = numbers[4];
val = fruits[2];


//Find Index of Value in array
val = numbers.indexOf(8);

//MUTATING ARRAYS

// Add on to end
numbers.push(77);
numbers.push(88);

//Add on to front 
numbers.unshift(120);
numbers.unshift(1);

// Take off From End


// Take off From Front



console.log(numbers);
console.log(val)