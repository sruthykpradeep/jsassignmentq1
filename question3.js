// Write a program that takes two numbers as input and calculates their product.
var readlinesync = require('readline-sync');
let firstnumber = parseInt(readlinesync.question('Enter the first number:-'));
let secondnumber = parseInt(readlinesync.question('Enter the second number:-'));
let result = firstnumber * secondnumber;
console.log("product of two numbers=",result);
