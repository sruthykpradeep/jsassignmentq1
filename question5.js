//Create a program that asks the user for their age and determines if they are eligible to vote(considering a voting age of 18)
var readlinesync = require('readline-sync');
let age = parseInt(readlinesync.question('Enter your age:-'));
if(age>=18){
    console.log('Yes,You are elegible to vote')

}
else{
    console.log('No,You are not elegible to vote');
}



