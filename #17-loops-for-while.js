// For Loop

/**
 * i + +
 * i= i + 1;

for(let i = 0; i<10; i++){
    if(i == 2){
        console.log('2 is my Favorite number')
        continue;
    }if(i === 3){
        break;
    }
    console.log(i);
}


for(let i = 0; i< 100; i++){
    console.log(i)
    if(i === 44){
        console.log("ID Match")
        break;
    }
}

 */

//

// While Loop
/*
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}

//Do while Loop
let i = 0;
do{
    console.log(i);
    i++;
}
while(i < 10)

 */

//Loop Through Array

// const cars = ['Toyota', 'Ford', 'Honda', 'BRW'];
    // for(let i = 0; i<cars.length; i++){
    //     console.log(cars[i]);
    // }


// let i = 0;
 
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// }

// cars.forEach(function(car){
//     console.log(car);
// })

// array function
// cars.forEach(car => console.log(car));




// Map

// const users = [
//     {id: 1, name: 'Jhon'},
//     {id: 2, name: 'Murf'},
//     {id: 3, name: 'Rose'},
//     {id: 4, name: 'Jack'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });

// console.log(ids)


//For In Loop

const user = {
    fistName: 'Shaown',
    lastName: 'Sm',
    age: 26
}

for(let x in user){
    console.log(`${x} : ${user[x]}`)
}



