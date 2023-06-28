// Assignment Code
function generatePassword() {
  var lowercaseChars = " abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var length = parseInt(prompt("Enter your password length from 8 t0 128"));
  if(isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128");
    return '';
  }
  var useLowercase = confirm('Include lowercase characters?');
  var useUppercase = confirm('Include uppercase charaters?');
  var useNumeric = confirm('Include numeric characters?');
  var useSpecial = confirm('Inlude special characters?');
  if(!useLowercase && !useUppercase && !useNumeric && !useSpecial){
    alert("Please select atleast one character type");
    return '';
  }

  var characterPool = "";
  if(useLowercase){
    characterPool += lowercaseChars;
  }
  if(useUppercase){
    characterPool += uppercaseChars;
  }
  if(useNumeric){
    characterPool += numericChars;
  }
  if(useSpecial){
    characterPool += specialChars;
  }

  var password = "";
  for ( var i = 0; i < length; i++ ){
    var ramdomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(ramdomIndex);
  }
  return password;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Thank you for Checking  LITO's Password Generator!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

