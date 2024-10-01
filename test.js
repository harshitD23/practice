//For importing functions from other files
/*
    const math = require("./math.js");
    console.log("My name is", math.add(2, 3));
    console.log("My name is", math.sub(2, 3));
*/

// If-else loops
/*
    let age  = 10;
    if(age >= 18){
      console.log("Elgible");
    }else{
      console.log("not eligible");
    }
*/

// Taking inputs using prompt
/*
    let name = prompt("Hi");
    console.log(name);
    */

// for-of loop (in order to traverse through every single character of a string)
/*
    let str = "Harshit Dhamecha";
    for(let c of str){
      console.log("i = ", c);
    }
*/

// For-in loop (It is majorly used with JS objects to return keys in the object)
/*
    let student = {
      name: "Harshit Dhamecha",
      age: 21,
      location: "Bangalrore",
      isPass: true,
    }

    for(let key in student){
      console.log("key = ",key, " value = ", student[key]);

    }
*/


// Number guessing game 
/*
    let gamenum = 25;
    let userNum = prompt("Enter your number for the game");
    while(gamenum !== userNum){
      prompt("Try again, you got it wrong this time")
    }

    console.log("FINALLY WON");
*/

// Strings in JS
/*
    let str = "Harshit Dhamecha";
    console.log(str.length);
    console.log(str[1]);
*/

// Template literal (special string) and placeholders
// String interpolation meaning involving the outputs in the string but it will be calculated at runtime

/*
    let obj = {
      item: "pen",
      price: 10,
    } 

// \n gives us new line, \t gives a tab space
    
    let str = `The cost of ${obj.item} is ${obj.price} rupees`;
    console.log(str);
*/

// String methods in JS, creates a new string and does not change the original string
// All JS strings are immutable
let str = "Harshit Dhamecha  "
let str1 = "Hello there "
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(0,4)); // Hars
console.log(str1.concat(str));
console.log(str.replace("H","p")); // (Replaces the first match) First input is to search for the input and the second is the replacement
console.log(str.replaceAll("H","p")); // Replaces all the occurences


// Generating Instagram username

let user = prompt("Enter your full name without spaces");
console.log(`@${user}${user.length}`);
