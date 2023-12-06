//Create a function expression called "printNumbers" that takes a parameter "lastNumber" and prints numbers from 1 to 'n' using a loop.

var readlinesync = require('readline-sync');
let number = readlinesync.question('Enter the lastnumber(n):');
function printNumber(){
    for(i=1;i<=number;i++){
        console.log(i);
    }
}
printNumber();