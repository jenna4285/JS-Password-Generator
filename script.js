// Assignment Code
var generateBtn = document.querySelector("#generate");

// JG - Button id = "generate"
// prompt("How many characters in this password?")
function lengthPrompt (){
  var passwordLength =prompt("Confirm Password Length Between 8-128 Characters.");
    if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)) {
      alert("Please enter value between 8 and 128");
      lengthPrompt ();
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
  }
    return optionsObj;
}

function generatePassword () {
 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] ;
 var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
 
  var length = lengthPrompt (); 
  var options = optionsPrompt ();
  var finalArray = [];

  console.log(length);
  console.log(options);
  console.log(numbers.length);
  console.log(specialCharacters.length)
  
  if (characterUppercase=true){
    finalArray = [].concat(finalArray, Uppercase)
    console.log(finalArray.length);
  };
  if (characterLowercase=true){
    finalArray = [].concat(finalArray, lowercase);
    console.log(finalArray.length);
  };
  if (includeNumbers=true){
    finalArray = [].concat(finalArray, numbers);
    console.log(finalArray.length);
  }
  if (specialCharacters=true){
    finalArray = [].concat(finalArray,specialCharacters);
    console.log(finalArray.length);
  }

  console.log(finalArray)

  var i;
  function password() {
    for (i = 0; i < length; i++) {
      finalArray(Math.floor(math.random() * finalArray.length));
    }

    // create a for loop & use value in length
    // inside loop = math.random() finalArray.length
    // put returned random value in password
    return password;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
