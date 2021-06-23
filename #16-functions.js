// Function Declaration

// function greet(){
//     const a = 10;
//     const b = 20;
//     return a + b;
// }

// const res = greet();
// console.log(res)

///
/*
function greet(fname, lname){
    return "Hello, " + fname +" "+ lname;
}

console.log(greet('s m ','shaown'));
console.log(greet('Emon', 'Shek'));

*/

//

function greet(fname = 'shaown', lname = 'emon'){

    return "Hello, "+ fname +" "+ lname;

}
// console.log(greet('s m', 'Shaown'));

///

// Function Expression
const squre = function( x /*x = 45*/){

    return x*x;

};
// console.log(squre(4))

//

// IMMIDATLY INVOKABLE FUNCTION EXPRESSION - IIFEs
/*
(function(){
    console.log("IIFEs Runing....")
})();

//2

(function(name){
    console.log("Hello "+ name);
})('Shaown');

*/


//  Property Method

const todo = {
    add: function(){
        console.log("add todo......")
    },
    edit: function(id){
        console.log("Edit todo for id: : "+ id);
    }
}

todo.add();
todo.edit(2);