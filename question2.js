//Create a program that asks the user for two numbers and prints their sum.
var readlinesync = require('readline-sync');
let firstnumber = parseInt(readlinesync.question('Enter the first number:-'));
let secondnumber = parseInt(readlinesync.question('Enter the second number:-'));
let result = firstnumber + secondnumber;
console.log("sum of two numbers=",result);
