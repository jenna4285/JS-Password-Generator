var myArray = [
    "Apples",
    "Bananas",
    "Pears"
  ];


var myArray2 = [
    "Apples",
    "Bananas",
    "Pears"
  ];

var myArray3 = [
    "6",
    "5",
    "2"
  ];

 
  finalArray = myArray2.concat(myArray3);

  returnLength = 16;

  console.log(finalArray);
  
 var i;

 for (i=0; i < returnLength.length; i++) {
  var passwordElement = finalArray[Math.floor(Math.random()*myArray.length)];
  
  document.body.innerHTML = randomItem;