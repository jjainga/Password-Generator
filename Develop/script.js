// //Asignment Code
// var generateBtn = document.querySelector("#generate");

// //Write password to the #password input
// function writepassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = passwaord;
// }

//Prompting the user if they want a password
var start = confirm("Do you want to generate a password?")



//Prompts for user to input what they want for 
var lower = confirm("Do you want to use lower case letters in your password?")
var upper = confirm("Do you want to use upper case letters in your password?")
var number = confirm("Do you want to use numbers in your password?")
var symb = confirm("Do you want to use symbols in your password?")
var length = prompt("How many characters would you like between 8 and 128?")

var passwordLength = Number(length)

//Validation for password criteria
if (lower === false &&
    upper === false && 
    number === false && 
    symb === false) {
        alert("Please select at least one criteria to generate your password.")
    }

//Validation for length of password
if (passwordLength < 8 ||
    passwordLength > 128) {
        alert("Please select a legnth between 8 and 128, thank you.")
    }

console.log(passwordLength)
// Create array for combining all the chosen characters
var passwordHolder =[]
//For loop the amount of times the user put in
for(var i =0; i<passwordLength;i++) {

}

//Array of the methods fromt he object passwordfunctions
var passwordFunc = [passwordFunctions.lowerCase(), passwordFunctions.upperCase(), passwordFunctions.numbers(), passwordFunctions.symbols()]

var passwordFunctions = {
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

//TODO: Add validations to make sure atleast one type of char is selected and alert user if no types are selected

//TODO: After I m done with the prompts a password is  generated


//Console Logs to check functions

console.log(passwordFunctions.lowerCase())

console.log("---------------------")

console.log(passwordFunctions.upperCase())

console.log("---------------------")

console.log(passwordFunctions.numbers())

console.log("---------------------")

console.log(passwordFunctions.symbols())









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
 