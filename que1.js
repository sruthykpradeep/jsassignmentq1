//1.Write a JavaScript function named"greetmessage"that takes a parameter "name" and returns a greeting message.
//for eg if the input is "akhil",the fuction should return "hello akhil!".

var readlinesync = require('readline-sync');
let name = readlinesync.question('Enter the name -');
function greetMesssage(){
    return name
}
let id = greetMesssage();
console.log("hello",id);