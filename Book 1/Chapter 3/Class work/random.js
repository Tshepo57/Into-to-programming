//generating a random number between 0 and 1
console.log("Random number:", Math.random());

//multiplying by 15
console.log("Random number by 15:", Math.random() * 15);

//Math.floor rounds down to the nearst whole number
console.log("Whole number:", Math.floor(2.517646170470503))

//math.random and math.floor
console.log("Math.floor and Math.random:", Math.floor(Math.random() * 7));

console.log('\n', "-------------------Generating a random Array------------------------")
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
console.log("random word:", randomWords[randomIndex]);


console.log('\n', "-------------Random Insult Generator------------------")

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "dog"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array: 
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);
