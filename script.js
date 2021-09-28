// Assignment code here
var randomNumber = function (min, max) {
  var value = Math.floor (Math.random() * (max - min + 1) + min);
};
var passwordLength = [];
var passwordUpperC = ["Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"];
var passwordLowerC = ["q","w","e","r","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m"];
var passwordSpecialC = ["!","#","$","%","&","(",")","*","+",",","-",".","/",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var passwordNumberC = ["1","2","3","4","5","6","7","8","9","0"];
//var password = {
  //length = "",
  //upper = "QWERTYUIOPLKJHGFDSAZXCVBNM" ,
  //lower = "qwertyuioplkjhgfdsazxcvbnm" ,
  //specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~" ,
  //number = " 1234567890",

//};
//window.prompt("What is the desired length of the password?");
//window.confirm("Include uppercase characters?");
//window.confirm("Include lower case characters?");
//window.confirm("Include special characters?");
//window.confirm("Include numbers?");

var passwordLength = function(){
  if (passwordLength < 8 ){
    window.alert("minimum length 8");
    passwordLength();
  }
  else if(passwordLength > 128 ){
    window.alert("maximum length 128");
    passwordLength();
  }
  else  {
    return passwordLength;
  };  
  passwordUpper();
};

var passwordUpper = function(){
  for (var i= 0; i < passwordLength; i++){
    var upperPrompt= window.confirm("Include uppercase characters?");
    if(upperPrompt) {
    var  passwordUpperC = passwordUpperC[i];
    }
    else {
      passwordLower();
    };
  
      //passwordLower();
    
  }

};

var passwordLower = function() {
  for (var i = 0; i < passwordLength; i++){
  var lowerPrompt = window.confirm("Include lower case characters?");
  if(lowerPrompt){
    // add lowercase
    var passwordLowerC = passwordLowerC[i];
  }
  else {
    passwordSpecial();
  }
}
};

var passwordSpecial = function() {
  for(var i = 0; i < passwordLength; i++){
  var specialPrompt = window.confirm("Include special characters?");
  if (specialPrompt) {
    // add special
    var passwordSpecialC = passwordSpecialC[i];
  }
  else {
    passwordNumber();
  }
}
};

var passwordNumber = function(){
  for (var i = 0; i < passwordLength; i++){
  var numberPrompt = window.confirm("Include numbers?");
  if (numberPrompt) {
    // add number
    var numberPromptC = numberPromptC[i];
  }
  else {
    generatePassword();
  }
}
};



var generatePassword = function() {
  passwordLength();
  passwordUpper();
  passwordLower();
  passwordSpecial();
  passwordNumber();


};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 generatePassword();

 // var choosePassword= window.prompt("Would you like to include UPPERCASE, LOWERCASE, SPECIAL CHARACTER, NUMBER")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
