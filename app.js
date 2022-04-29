'use strict';

function intro (){
let username = prompt("What is your name?");
console.log('Hello ' + username);
document.write("<p id='username'>" + username + "</p>");

if (username === "Kassie") {
console.log("Hola professor");
} else {
console.log("Hola amigo, bienvenido");
}
let place = prompt("Welcome " + username + "! What's your favorite sport?");
console.log("First sport = " + place);   
    
let secondplace = prompt("Do you like to workout?");
console.log("Workout = " + secondplace);
    
if (secondplace == "yes") {
console.log("Me too!");
alert("Me too!");
} else {
console.log("Wrong answer!");
prompt("Wrong answer! Try again");
}

return username
}

// console.log(intro())
intro()