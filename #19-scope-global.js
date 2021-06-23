//   Global Scope

var a = 1;
let b = 2;
const c = 3;



// Function Scope
/*
function test(){
    var a = 1;
    let b = 2;
    const c = 3;
}

test();
*/
// Block Scope
// if(true){
//     var a = 4;
//     var b = 5;
//     const c = 6;
//     console.log('Block scope:'+ a,b,c)
// }

for (let i = 0; i < 10; i++) {
   console.log('Loop:' + a) 
}

console.log('Global Scope:' + a, b, c);