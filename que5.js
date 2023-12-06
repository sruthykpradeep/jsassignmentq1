//Implement a function expression named printPattern that takes a parameter rows and prints a pattern of stars in the form of a 
//right-angled triangle.for eg,if the input is 5,the output should be:* ** *** **** *****.

var readlinesync = require('readline-sync');
let rows = readlinesync.question('number of rows=');
function printPattern(){
    for(i=1;i<=rows;i++){
        console.log("*".repeat(i));
    }
}
printPattern();

