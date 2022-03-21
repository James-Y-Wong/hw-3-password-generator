// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!?@#$%^&*"

// var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var special = ["!", "\"", "#", "$", "%", "&", "\'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var combo1 = uppercase.concat(lowercase, numeric, special);
var combo2 = uppercase.concat(lowercase, numeric);
var combo3 = uppercase.concat(lowercase, special);
var combo4 = uppercase.concat(lowercase);
var combo5 = uppercase.concat(numeric, special);
var combo6 = uppercase.concat(numeric);
var combo7 = uppercase.concat(special);
var combo8 = lowercase.concat(numeric, special);
var combo9 = lowercase.concat(numeric);
var combo10 = lowercase.concat(special);
var combo11 = numeric.concat(special);

let outputPassword = "";


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

  var bigLetters = window.confirm("Would you like to include uppercase letters? \nClick OK for Yes \nClick Cancel for No");

  if (bigLetters && smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes");
  } else if (bigLetters && !smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes");
  } else if (!bigLetters && smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No");
  } else if (!bigLetters && !smallLetters) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No");
  }

  var numbers = window.confirm("Would you like to include numbers? \nClick OK for Yes \nClick Cancel for No");

  if (bigLetters && smallLetters && numbers) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: Yes");
    } else if (bigLetters && smallLetters && !numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: No");
    } else if (bigLetters && !smallLetters && numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: Yes");
    } else if (bigLetters && !smallLetters && !numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: No");
    } else if (!bigLetters && smallLetters && numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: Yes");
    } else if (!bigLetters && smallLetters && !numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: No");
    } else if (!bigLetters && !smallLetters && numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: Yes");
    } else if (!bigLetters && !smallLetters && !numbers) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: No");
  }

  var specialChar = window.confirm("Would you like to include special characters? \nClick OK for Yes \nClick Cancel for No");

  if (bigLetters && smallLetters && numbers && specialChar) {
    window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: Yes" + "\nspecial: Yes");
    } else if (bigLetters && smallLetters && numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: Yes" + "\nspecial: No"); 
    } else if (bigLetters && smallLetters && !numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: No" + "\nspecial: Yes");
    } else if (bigLetters && smallLetters && !numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: Yes" + "\nnumbers: No" + "\nspecial: No");
    } else if (bigLetters && !smallLetters && numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: Yes" + "\nspecial: Yes");
    } else if (bigLetters && !smallLetters && numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: Yes" + "\nspecial: No");
    } else if (bigLetters && !smallLetters && !numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: No" + "\nspecial: Yes");
    } else if (bigLetters && !smallLetters && !numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: Yes" + "\nnumbers: No" + "\nspecial: No");
    } else if (!bigLetters && smallLetters && numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: Yes" + "\nspecial: Yes");
    } else if (!bigLetters && smallLetters && numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: Yes" + "\nspecial: No");
    } else if (!bigLetters && smallLetters && !numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: No" + "\nspecial: Yes");
    } else if (!bigLetters && smallLetters && !numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: Yes" + "\nuppercase: No" + "\nnumbers: No" + "\nspecial: No");
    } else if (!bigLetters && !smallLetters && numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: Yes" + "\nspecial: Yes");
    } else if (!bigLetters && !smallLetters && numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: Yes" + "\nspecial: No");
    } else if (!bigLetters && !smallLetters && !numbers && specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: No" + "\nspecial: Yes");
    } else if (!bigLetters && !smallLetters && !numbers && !specialChar) {
      window.alert("You chose:" + "\ncharacters: " + numChar + "\nlowercase: No" + "\nuppercase: No" + "\nnumbers: No" + "\nspecial: No");
      window.alert("Please select at least one character type")
      generatePassword()
  }

  if (bigLetters && smallLetters && numbers && specialChar) {
    for (i = 0; i < combo1.length; i++) {
      outputPassword += combo1[Math.floor(Math.random() * numChar)];
      }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && smallLetters && numbers && !specialChar) {
    for (i = 0; i < combo2.length; i++) {
      outputPassword += combo2[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && smallLetters && !numbers && specialChar) {
    for (i = 0; i < combo3.length; i++) {
      outputPassword += combo3[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && smallLetters && !numbers && !specialChar) {
    for (i = 0; i < combo4.length; i++) {
      outputPassword += combo4[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && !smallLetters && numbers && specialChar) {
    for (i = 0; i < combo5.length; i++) {
      outputPassword += combo5[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && !smallLetters && numbers && !specialChar) {
    for (i = 0; i < combo6.length; i++) {
      outputPassword += combo6[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && !smallLetters && !numbers && specialChar) {
    for (i = 0; i < combo7.length; i++) {
      outputPassword += combo7[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (bigLetters && !smallLetters && !numbers && !specialChar) {
    for (i = 0; i < uppercase.length; i++) {
      outputPassword += uppercase[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && smallLetters && numbers && specialChar) {
    for (i = 0; i < combo8.length; i++) {
      outputPassword += combo8[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && smallLetters && numbers && !specialChar) {
    for (i = 0; i < combo9.length; i++) {
      outputPassword += combo9[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && smallLetters && !numbers && specialChar) {
    for (i = 0; i < combo10.length; i++) {
      outputPassword += combo10[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && smallLetters && !numbers && !specialChar) {
    for (i = 0; i < lowercase.length; i++) {
      outputPassword += lowercase[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && !smallLetters && numbers && specialChar) {
    for (i = 0; i < combo11.length; i++) {
      outputPassword += combo11[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && !smallLetters && numbers && !specialChar) {
    for (i = 0; i < numeric.length; i++) {
      outputPassword += numeric[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
  if (!bigLetters && !smallLetters && !numbers && specialChar) {
    for (i = 0; i < special.length; i++) {
      outputPassword += special[Math.floor(Math.random() * numChar)]
    }
    return outputPassword.slice(0, numChar);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);