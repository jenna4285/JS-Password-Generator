// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var password = "";
var passwordText = document.querySelector("#password");
// var length = ""; 
var options = "";
var finalArray = [];


// JG - Button id = "generate"
// prompt("How many characters in this password?")
function lengthPrompt (){
  var passwordLength =prompt("Confirm Password Length Between 8-128 Characters.");
    if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)) {
      alert("Please enter value between 8 and 128");
      //lengthPrompt ();
    } 
    return passwordLength;
} 



function optionsPrompt () {
    var characterUppercase = confirm("Click OK to Include Uppercase Letters."); 
    var characterLowercase = confirm("Click OK to Include Lowercase Letters.");
    var includeNumbers = confirm ("Click OK to Include Numbers.");
    var specialCharacters = confirm ("Click OK to Include Special Characters.");
  
  if (!characterUppercase && !characterLowercase && !includeNumbers && !specialCharacters){
    alert("Please select content.");
    optionsPrompt ();
  } 
    var optionsObj = {
    characterUppercase: characterUppercase,
    characterLowercase: characterLowercase,
    includeNumbers: includeNumbers,
    specialCharacters: specialCharacters,
  };
    return optionsObj;
}

function generatePassword () {
 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] ;

var specialCharacters = ["\\","\.","\+","\*","\?","\[","\^","\]","\$","\(","\)","\{","\}","\=","\!","\<","\>","\|","\:","\-"];
 
  passwordLength = lengthPrompt (); 
  options = optionsPrompt ();
  finalArray = [];

 
  console.log(numbers.length);
  console.log(specialCharacters.length);
  console.log(specialCharacters);
  
  if (options.characterUppercase===true){
    finalArray = [].concat(finalArray, Uppercase);
  }
  if (options.characterLowercase===true){
    finalArray = [].concat(finalArray, lowercase);
  }
  if (options.includeNumbers===true){
    finalArray = [].concat(finalArray, numbers);
  }
  if (options.specialCharacters===true){
    finalArray = finalArray.concat(specialCharacters);
  }

  console.log("Do I see the finalArray? This should be the full list to pull from", finalArray);
  return finalArray;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var finalPassword = '';
  console.log('this should be the generated password', password);
  var passwordText = document.querySelector("#password");
  
  console.log("this is what I type in for length", passwordLength);
  
  for (var i = 0; i < passwordLength; i++) {
  finalPassword += finalArray[Math.floor(Math.random() * finalArray.length)];
                 // finalArray[41] //whatever the element is in that position in the array
    console.log('what is this password in the forloop question mark', finalPassword);
}
  passwordText.textContent = finalPassword;

}

// passwordText.value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
