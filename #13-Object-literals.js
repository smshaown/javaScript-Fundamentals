// const person = {
//     firstName: 's m',
// }

// let val;
// val = person;
// console.log(val)


const person = {
    firstName: 's m',
    lastName: 'shaown',
    age: 21,
    email: 'smshaown26@gmail.com',
    hobbies: ['sport', 'Travel', 'Nashid', 'Alquran'],
    address: {
        city: 'khulna',
        state: 'Rupsa',
        house: {
            houseNo: '32',
            street: '27 Islampur',
            floor: '1st'
        }
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;
val = person;

//Get Specfic Value
val = person.firstName;
val = person['firstName'];

val = person.age;

val = person.email,
val = person['email'],

val = person.hobbies,
val = person.hobbies[0],

val = person.address;
val = person.address.city;
val = person.address.state;
val = person.address.house.floor;

val = person.getBirthYear();


// console.log(val)

const people = [
    {name: 'shaown', age: 21},
    {name: 'Emon', age: 22},
    {name: 'Rakib', age: 22},
    {name: 'Janu', age: 22},
];

for( i = 0; i<people.length; i++){
    console.log(people[i].name)
    console.log(people[i].age)
}