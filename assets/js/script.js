// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "\'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var generatePassword = function() {

  var numChar = window.prompt("How many characters?\nChoose between 8 to 128 characters:");

  if (!numChar) {
  return;
  }
  if (numChar >= 8 && numChar <= 128) {
  window.alert("You chose " + numChar + " characters");
  } else if (numChar < 8 || numChar > 128) {
  window.alert("Please choose a number between 8 and 128");
  generatePassword()
  } 

  var smallLetters = window.confirm("Would you like to include lowercase letters? \nClick OK for Yes \nClick Cancel for No");

  if (smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes");
  } else if (!smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No");
  }

  
}

