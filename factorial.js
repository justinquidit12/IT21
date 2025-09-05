//console input
const { Console } = require("console");
const readline=require ("readline");

const rl = ealine.createInterface({
 input: process.stdin,
 output: process.stdin
})


console.log ("-------------------------- ");
console.log ("Factorial Application");
console.log ("1. say hello");
console.log ("2. factorial");
console.log ("exit application");
console.log ("_--------------------------");

rl.question("Enter your choice (1-3): " , choice =>{
    console.log(choice);

    if (choice === "1"){
         console.log("Hello");
         } else if (choice === "2"){
            console.log("Factorial");
rl.question("please enter a number for factorial" , numStr =>{
    let num = parseInt(numStr);

    if (isNaN(num) || num < 0){
        console.log("please enter a non-negative integer");
    } else {
        let fact = 1;

        for (let i=1; i <= num; i++){
            fact*=i;
    }
    console.log("The Factorial of" + num + " is " + fact);
}
})


         } else if (choice === "3"){
            console.log("existing application");
         } else {
            Console.log("Invalid Choice. Please Try Again");
         }

        })
