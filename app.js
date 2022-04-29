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

let answer;
while (answer !== "yes") {
answer = prompt("Do you like to workout?");
if (answer == "yes") {
console.log("Me too!");
alert("Me too!");
} else {
console.log("Are you sure!");
alert("Are you sure?");
}
}}

function bench(){
    let amount = prompt("How many plates can you bench?");
    for (var i = 0; i < amount; i++) {
        var img = "<img src = '45-plate.png' class='plate' />";
        document.write(img);
    }
}

intro();

// bench();

