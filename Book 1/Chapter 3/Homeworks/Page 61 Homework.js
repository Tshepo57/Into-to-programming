// Challenge #1: New Insults

// creating 3 variables with arrays of words
var bodyChoices = ["ear", "chin", "forehead"];
var describingWords = ["weird", "dusty", "lumpy"];
var objectChoices = ["potato", "shoe", "banana", "spoon", "donkey"];

// picking a random word from the bodyChoices array
var chosenBody = bodyChoices[Math.floor(Math.random() * 3)];

// picking a random word from the describingWords array
var chosenDescription = describingWords[Math.floor(Math.random() * 3)];

// picking a random word from the objectChoices array
var chosenObject = objectChoices[Math.floor(Math.random() * 5)];

// joining them into a sentence
var firstInsult = "Your " + chosenBody + " is like a " + chosenDescription + " " + chosenObject;

console.log(firstInsult);


// Challenge #2: More Sophisticated Insults

// creating arrays for body parts, adjectives, animals, and animal body parts
var humanParts = ["elbow", "knee", "tooth"];
var insultWords = ["messy", "clumsy", "greasy"];
var creatureNames = ["goat", "duck", "llama", "frog"];
var creatureParts = ["tail", "beak", "leg", "tongue"];

// picking a random human body part
var selectedHumanPart = humanParts[Math.floor(Math.random() * 3)];

// picking a random adjective
var selectedInsultWord = insultWords[Math.floor(Math.random() * 3)];

// picking a random animal
var selectedCreature = creatureNames[Math.floor(Math.random() * 4)];

// picking a random animal body part
var selectedCreaturePart = creatureParts[Math.floor(Math.random() * 4)];

// joining them into a more detailed insult sentence
var fancyInsult = "Your " + selectedHumanPart + " is more " + selectedInsultWord + " than a " + selectedCreature + "'s " + selectedCreaturePart;

console.log(fancyInsult);


// Challenge #3: Use + or join?

// Version 1: Making the insult with +
var plusInsult = "Your " + selectedHumanPart + " is more " + selectedInsultWord + " than a " + selectedCreature + "'s " + selectedCreaturePart;

console.log(plusInsult);


// Version 2: Making the insult with join

// creating an array with all the parts of the sentence
var joinInsultParts = ["Your", selectedHumanPart, "is more", selectedInsultWord, "than a", selectedCreature + "'s", selectedCreaturePart];

// joining the array into one sentence with spaces between each part
var joinedInsult = joinInsultParts.join(" ");

console.log(joinedInsult);

// I prefer using + because it is easier to understand as a beginner.
// The join method is useful too, but + feels simpler for short sentences.


// Challenge #4: Joining Numbers

// creating an array of numbers
var countingNumbers = [3, 2, 1];

// joining the numbers with words between them
var biggerSentence = countingNumbers.join(" is bigger than ");

console.log(biggerSentence);