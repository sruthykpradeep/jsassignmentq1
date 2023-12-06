// Define a function named sumofSquares that takesa parameter n and calculates the sum ofthe squares of numbersfrom 1 to n using a loop.

var readlinesync = require('readline-sync');
let number = readlinesync.question('Enter the number(n)=');
let square;
let sum= 0;
function sumofSquares(){
    for(i=1;i<=number;i++){
        square=i**2
        sum+=square
    }
    console.log("The sum of squares of the numbers =",sum);
}
sumofSquares();