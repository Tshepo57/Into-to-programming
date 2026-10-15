//Using the (!)Not operator:
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;

//Joining strings together:
var greeting = "Hello";
var myName = "Nick";
greeting + myName;

//Finding the length of the string:
"Helloworld".length;

//Getting a single character:
var myName = "Nick";
myName[1];

//Numbers and operators: 
1234 + 57 * 3 - 31 / 4;

//Post Incrementing: 
var highFives = 0;
++highFives;

//Pre Decrementing:
var highFives = 5;
--highFives; 

//Boolean AND Operator:
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining;  

//OR Operator:
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana;

//Numbers with Boolean:
var height = 65;
var heightRestriction = 60;
height < heightRestriction;  

//Coverting to Upper Case:
"Hello there, how are you doing?".toUpperCase();          
//Coverting to Lower Case:
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

//Equal to:
var mySecretNumber = 5; 
var chicoGuess = 3; 
mySecretNumber === chicoGuess;      

//Double ==
var stringNumber = "5"; 
var actualNumber = 5;
stringNumber == actualNumber; 

//Slice
//Example 1:
"This is a long string".slice(0, 4);

//Example 2:
"Hello, World!".slice(7, 12);