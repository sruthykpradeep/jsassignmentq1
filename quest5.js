//Write a program to find the number of even numbers in an array.
//a)The program should accept an array and display the number of even numbers contained in that array.

var readlinesync = require('readline-sync');
let size = parseInt(readlinesync.question('Enter the size of an array:'));
let array=[];
    for(let i=0;i<size;i++){
array[i]=parseInt(readlinesync.question('Enter the values of array:'));
}
console.log("the array is",array);
let even=0;
for(i=0;i<=size;i++){
    if(array[i]%2===0){
        even ++ ;
    }
}
console.log("Number of even numbers in the given array is :",even);
