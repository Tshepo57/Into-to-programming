function pickRandomWord(words) {
   var randomIndex = Math.floor(Math.random() * words.length);
   return words[randomIndex];
}

var generateRandomInsult = function () {
   // Array of body parts to be insulted
   var randomBodyParts = ["Face", "Nose", "Hair"];

   // Array of adjectives to describe the insult
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];

   // Array of random nouns to add humor to the insult
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   // Join all the random strings into a sentence:
   var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

   // Return the final insult string
   return randomString;
};

// Call the function to generate and return a random insult
console.log(generateRandomInsult());

