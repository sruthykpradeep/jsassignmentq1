//Implement a program that calculates the area of a rectangle using user-provided length and width.
// AREA OF A RECTANGLE = LENGTH * BREADTH
var readlinesync = require('readline-sync');
let length = parseInt(readlinesync.question('Enter the length:-'));
let width = parseInt(readlinesync.question('Enter the width:-'));
let result = length * width;
console.log("Area of the rectangle =",result);