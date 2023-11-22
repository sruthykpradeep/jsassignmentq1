//Write a program to find the sum of all the odd numbers for a given limit.
//a)program should accept an input as limit from the user and display the sum of all odd numbers within that limit.
//for example if the input limit is 10 then the result is 1+3+5+7+9=25

var readlinesync = require('readline-sync');
let limit = parseInt(readlinesync.question("Enter the limit:"));
let sum=0;
for(let i=1;i<limit;i++){
    if(i % 2 !==0){
        sum += i;
    }
}
console.log("sum of all odd numbers till",limit,"is",sum);

