//Prompting the user if they want a password
var start = confirm("Do you want to generate a password?")



//Prompts for user to input what they want for 
var lower = confirm("Do you want to use lower case letters in your password?")
var upper = confirm("Do you want to use upper case letters in your password?")
var number = confirm("Do you want to use numbers in your password?")
var symb = confirm("Do you want to use symbols in your password?")
var length = prompt("How many characters would you like between 8 and 128?")

var passwordlength = Number(length)

console.log(passwordlength)

//Conditions to use the functions

var passwordfunctions = {
//Functions for generating random characters
lowerCase: function randomLowCase() {
 return String.fromCharCode(Math.floor(Math.random()*26)+97);
},

upperCase: function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);   
},

numbers: function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);   
},

symbols: function randomSymbol() {
    const symbol = ["!", "@", "#", "$", "%", "^", "&", "<", ">", "{", "}", "/", "?", "=", "+", "-", "_"]
    return symbol[Math.floor(Math.random()* symbol.length)];
    
}}
//Console Logs to check functions

console.log(passwordfunctions.lowerCase())

console.log("---------------------")

console.log(passwordfunctions.upperCase())

console.log("---------------------")

console.log(passwordfunctions.numbers())

console.log("---------------------")

console.log(passwordfunctions.symbols())









// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
 