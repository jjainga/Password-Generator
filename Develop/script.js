

//Functions for generating random characters
function randomLowCase() {
 return String.fromCharCode(Math.floor(Math.random()*26)+97);
 
}

function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
    
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
    
}

function randomSymbol() {
    const symbol = ["!", "@", "#", "$", "%", "^", "&", "<", ">", "{", "}", "/", "?", "=", "+", "-", "_"]
    return symbol[Math.floor(Math.random()* symbol.length)];
    
}

//Console Logs to check functions

console.log(randomLowCase())

console.log("---------------------")

console.log(randomUpperCase())

console.log("---------------------")

console.log(randomNumber())

console.log("---------------------")

console.log(randomSymbol())









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
 