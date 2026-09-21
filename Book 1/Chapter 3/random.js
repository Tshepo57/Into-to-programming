//creating 3 variables (randomParts, randomAdjectives, randomWords) each with their array
var randomParts = ["face", "nose", "hair"];
var randomAdjectives = ["smelly", "boring", "stupid"];
var randomWords = ["fly", "pig", "stick", "monkey", "rat"];

//picking a random word from the randomParts array
var randomPart = randomParts[Math.floor(Math.random() * 3)]

//picking a random word from the randomAdjectives array
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]

//picking a random word from the randomWords array
var randomWord = randomWords[Math.floor(Math.random() * 5)]

//joining them into a sentence
var randomInsult = "Your " + randomPart + " is like a " + randomAdjective + " " + randomWord
console.log(randomInsult);