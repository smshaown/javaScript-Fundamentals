const firstName = 'William';
const lastName = 'Jhonson';
const age = 26;
const tags = 'Programming,Software,App,website,Games'
const str = 'Hello World'
const mes = 'You are bad'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append 
val = 'Shovon';
val += ' Das';

// val = "Hello, My Name is " + firstName + "ans i'm " + age

// Escaping
val = 'Hello, My name is '+ firstName +'and i\'m ' + age 
val= 'That\'s awesome, i con\'t wait'

//Lenght
val = firstName.length;

//concate()
val = firstName.concat(' *', lastName);

// Case Change 
val = firstName.toLowerCase();
val = lastName.toUpperCase();

//indexOf()
val = firstName.indexOf('W')

// Get Last character
val = firstName.charAt(firstName.length - 1);

// Substring()
val = firstName.substring(0, 4);

// Slice()
val = tags.split(',');


//replace()
val = str.replace('World!', 'There');

// inClude()
val = mes.includes('bad')
console.log(val);