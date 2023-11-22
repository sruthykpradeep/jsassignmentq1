//Find the square of each number in an array=[1,3,9,12,15,18,21] using loop.
var readlinesync = require('readline-sync');
let numbers = [1,3,9,12,15,18,21];
for(let i=0;i<=6;i++){
    console.log("square of ",numbers[i],"=",numbers[i]**2);
}