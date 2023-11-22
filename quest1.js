//Write a js program to console the multiplication table of a number.
var readlinesync = require('readline-sync');
let number= parseInt(readlinesync.question("multiplication table of the number :"));
for(let i=1;i<=10;i++){
    console.log(number,"*",i,"=",number*i)
}