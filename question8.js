//Write a script that takes a user's age and checks if they are a child (0-12),teenager(13-19),adult(20-59),or senior(60 and above).
var readlinesync = require('readline-sync');
let age = parseInt(readlinesync.question('Enter your age:-'));
 if(age>=0 && age<=12){
    console.log("You are a child");
}
else if (age>=13 && age<=19){
    console.log("You are a teenager");
}
else if (age>=20 && age<=59){
    console.log("You are an adult");
}
else if(age>=60) {
    console.log("You are a senior citizen");
}
else{
   console.log("Invalid age");    
}
