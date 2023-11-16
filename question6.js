//write a script that takes a user's grade as input and outputs whether they passed or failed(assuming passing grade is 60 or above).
var readlinesync = require('readline-sync');
let grade = parseInt(readlinesync.question('Enter your grade:-'));
if(grade>=60){
console.log("you have passed");
}
else{
    console.log("you have failed");
}

