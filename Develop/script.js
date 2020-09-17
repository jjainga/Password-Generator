//Variables to link javascript functions with id's
var generatebtn = document.querySelector("#generate");
var randomPassword = document.querySelector("#password");

//Click generate to start running the code
generatebtn.addEventListener("click", writePassword = function() {
//Prompting the user if they want a password
var start = confirm("Do you want to generate a password?")
//Prompts for user to input what they want for 
var lower = confirm("Do you want to use lower case letters in your password?")
var upper = confirm("Do you want to use upper case letters in your password?")
var number = confirm("Do you want to use numbers in your password?")
var symb = confirm("Do you want to use symbols in your password?")
var length = prompt("How many characters would you like between 8 and 128?")
//making length an integer
var passwordLength = parseInt(length)
console.log(passwordLength)

//Validating password criteria
if (lower === false &&
    upper === false && 
    number === false && 
    symb === false ||
    passwordLength < 8 ||
    passwordLength > 128) {
        alert("Please select at least one criteria and make sure the password length is between 8 and 128 characters to generate your password.")
    }
else {
//Functions for generating random characters
var lowerCase = function randomLowCase() {
        return String.fromCharCode(Math.floor(Math.random()*26)+97);
   }
var upperCase = function randomUpperCase() {
       return String.fromCharCode(Math.floor(Math.random()*26)+65);   
   }
var numbers = function randomNumber() {
       return String.fromCharCode(Math.floor(Math.random()*10)+48);   
   }    
var symbols = function randomSymbol() {
       const symbol = ["!", "@", "#", "$", "%", "^", "&", "<", ">", "{", "}", "/", "?", "=", "+", "-", "_"]
       return symbol[Math.floor(Math.random()* symbol.length)];
   }
var randomCharacters = [];
//For loop to pull random charater from the passwordfunciton Array
for (var i=0; i < passwordLength; i++) {
//Array containing functions to generate random characters, function only pushed to array if the user selected true for confirm
    var passwordFunctions = [];
    if (lower === true) {
    passwordFunctions.push(lowerCase());
    }
    if (upper === true) {
    passwordFunctions.push(upperCase());
    }
    if (number === true) {
    passwordFunctions.push(numbers());
    }
    if (symb === true) {
    passwordFunctions.push(symbols());
    }
    //Check if Array catches functions
    console.log(passwordFunctions);
    var letter = passwordFunctions[Math.floor(Math.random()*passwordFunctions.length)];
    console.log(letter);
    randomCharacters.push(letter);
}
//checking if finalpassword recieved values
console.log(randomCharacters);

//Making final password
var finalpassword = randomCharacters.join("");
console.log(finalpassword);
//Putting finalpassword into the input
randomPassword.textContent = finalpassword;
}})

// console.log("---------------------")
// //Variable to pull a character out of the Array
// var passwordCharacter = passwordFunctions[0];
// console.log(passwordCharacter)


// //Console Logs to check functions
// console.log("---------------------")
// console.log(lowerCase())

// console.log("---------------------")

// console.log(upperCase())

// console.log("---------------------")

// console.log(numbers())

// console.log("---------------------")

// console.log(symbols())