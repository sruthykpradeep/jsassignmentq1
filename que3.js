//Create a function expression named printEvenNumbers that takes a parameter n and prints all even numbers from 1 to n using a loop.

var readlinesync = require('readline-sync');
let number = readlinesync.question('Enter a number(n)=');
function printEvenNumbers(){
    for(i=2;i<=number;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
printEvenNumbers();