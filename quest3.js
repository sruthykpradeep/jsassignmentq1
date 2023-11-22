//3.write a js program to console the grade of a student using if else if,condition mark>90 grade A,condition mark>80 grade B
//condition mark>70 grade C, condition mark>60 grade D, condition mark>=50 grade E,condition mark<50 grade failed.
var readlinesync = require('readline-sync');
let mark = parseInt(readlinesync.question('Enter the marks:'));
if(mark>90){
    console.log("Grade Obtained is A")
}else if(mark>80){
    console.log("Grade Obtained is B");
}
else if(mark>70){
    console.log("Grade Obtained is C");
}
else if(mark>60){
    console.log("Grade Obtained is D")
}
else if(mark>=50){
    console.log("Grade Obtained is E")
}
else if(mark<=50 && mark>=0){
    console.log("Failed");
}
else{
    console.log("ERROR")
}
