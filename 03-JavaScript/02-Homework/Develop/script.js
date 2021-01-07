// Assignment Code
var generateBtn = document.querySelector("#generate");


num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var confirmLength = "";
var confirmNum 
var confirmSpecialChar 
var confirmUpperCase 
var confirmLowerCase 

// selection how many characters password will have.
function generatePassword(){
confirmLength = prompt('How many characters would you like your password to contain? Choose between 8 and 128.');

  if (!confirmLength) {
    alert('Please enter number of characters!');
  }
  else if(confirmLength <= 7 || confirmLength >= 129) {
    alert('Password length must be between 8-128 characters, Try Again!');
  } 

  // Verifying number of characters in password & confirming selection.
  else{
    alert('Your password will contain ' + (confirmLength) + ' characters!')
    confirmNum = confirm("Will this contain numbers?");
    confirmSpecialChar = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }

  // Picking password combination
  if (!confirmNum  && !confirmSpecialChar  && !confirmUppercase  && !confirmLowercase) {
    alert('Please confirm numbers, special characters, upper & lowercase selection!');
  }
  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === true) {

    selection = num.concat(specialChar, upperAlpha, lowerAlpha);

    alert('Your password will contain number, special characters, upper & lowercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === false) {

    selection = num.concat(specialChar, upperAlpha);
    alert('Your password will contain number, special characters, uppercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === true) {

    selection = num.concat(specialChar, lowerAlpha);
    alert('Your password will contain number & special character & lowercase letter!');
  }

  else if (confirmNum === true && confirmSpecialChar === false && confirmUppercase === true && confirmLowercase === true) {

    selection = num.concat(upperAlpha, lowerAlpha);
    alert('Your password will contain numbers, upper & lowercase letters!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === true) {

    selection = specialChar.concat(upperAlpha, lowerAlpha);
    alert('Your password will contain special character upper & lowercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === false) {

    selection = num.concat(specialChar);
    alert('Your password will contain numbers & special character!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === true) {

    selection = specialChar.concat(lowerAlpha);
    alert('Your password will contain special character & lowercase letters!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === true && confirmLowercase === false) {

    selection = specialChar.concat(upperAlpha);
    alert('Your password will contain special character & uppercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === false && confirmUppercase === false && confirmLowercase === true) {

    selection = num.concat(lowerAlpha);
    alert('Your password will contain numbers & lowercase letters!');
  }

  else if (confirmNum === false && confirmSpecialChar === false && confirmUppercase === true && confirmLowercase === true) {

    selection = upperAlpha.concat(lowerAlpha);
    alert('Your password will contain upper & lowercase letters!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === true) {

    selection = specialChar.concat(lowerAlpha);
    alert('Your password will contain special characters & lowercase letters!');
  }

  else if (confirmNum === true && confirmSpecialChar === false && confirmUppercase === false && confirmLowercase === false) {

    selection = num;
    alert('Your password will contain numbers!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === false) {

    selection = specialChar;
    alert('Your password will contain special characters!');
  }

  else if (confirmNum === false && confirmSpecialChar === false && confirmUppercase === true && confirmLowercase === false) {

    selection = upperAlpha;
    alert('Your password will contain uppercase letters!');
  }

  else if (confirmNum === false && confirmSpecialChar === true && confirmUppercase === false && confirmLowercase === true) {

    selection = lowerAlpha;
    alert('Your password will contain lowercase letters!');
  }

};










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
