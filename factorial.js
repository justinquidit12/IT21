//console input
const { Console } = require("console");
const readline=require ("readline");

const rl = ealine.createInterface({
 input: process.stdin,
 output: process.stdin
})

function mainMenu(){
console.log ("-------------------------- ");
console.log ("Factorial Application");
console.log ("1. say hello");
console.log ("2. factorial");
console.log ("exit application");
console.log ("_--------------------------");

rl.question("Enter your choice (1-3): " , choice =>{
    

    if (choice === "1"){
        sayHello();
         } else if (choice === "2"){
            computerFactorial();
            } else if (choice === "3"){
              exitProgram();
                } else {
            console.log("Invalid Choice. Please Try Again");
        }

    })
}

  function sayHello(){
    console.log("Hello");
} 

