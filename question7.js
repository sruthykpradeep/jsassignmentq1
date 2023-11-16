//Implement a program that checks if a user's entered number is positive,negative, or zero.
var readlinesync = require('readline-sync');
let number = parseInt(readlinesync.question('Enter your number:'));
if (number<0){
    console.log("Negative number");
}
else if(number>0){
    console.log("Positive number");
}
else{
    console.log("zero");

}

