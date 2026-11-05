// =====================================================================
// Project 1 - Guessing Game
// Code College - Intro to Programming
// =====================================================================
//
// What the brief asks for:
//   1. An if statement: show "Correct Guess!" or "Sorry, incorrect Guess!"
//   2. Combine the prompt line and the parseInt line into ONE line
//   3. A while loop that only stops when the guess is correct
//   4. While the guess is wrong, say "Incorrect, too low" or "Incorrect, too high"
//   5. Make the secret number random
//
// How the game works:
//   - The player clicks the Play button.
//   - The computer picks a secret number from 1 to 20.
//   - The player keeps guessing until they get it right.
//   - After each wrong guess, the game says whether it was too low or too high.
// =====================================================================


// playGame is a FUNCTION: a named block of code we can run whenever we want.
// It runs every time the Play button is clicked (see the last line of this file).
function playGame() {

    // ----- Step 5: make the secret number random -----
    // Math.random()        gives a decimal from 0 up to (but not including) 1, e.g. 0.42
    // Math.random() * 20   stretches that to 0 up to 19.99...,                e.g. 8.4
    // Math.floor(...)      rounds DOWN to a whole number from 0 to 19,        e.g. 8
    // + 1                  moves the range up to 1 to 20,                     e.g. 9
    var secret = Math.floor(Math.random() * 20) + 1;

    // ----- Step 2: prompt and parseInt in ONE line -----
    // prompt() shows a pop-up box and gives back whatever the player typed, as TEXT (a string).
    // parseInt() turns that text into a whole NUMBER, so "7" becomes 7.
    // We need a number, because the string "7" and the number 7 are not equal with ===.
    // Putting prompt() INSIDE parseInt() does both jobs in one line.
    var guess = parseInt(prompt("Please guess the secret number (1-20)"));

    // Count how many guesses the player has made (they've just made the first one)
    var numberOfGuesses = 1;

    // ----- Step 3: keep looping WHILE the guess is NOT correct -----
    // !== means "is not equal to". The code inside the { } repeats over and over
    // until guess equals secret. Then the loop stops.
    while (guess !== secret) {

        // isNaN means "is Not a Number". If the player typed letters, typed nothing,
        // or clicked Cancel, parseInt can't make a number and gives NaN instead.
        if (isNaN(guess)) {
            // confirm() shows OK and Cancel buttons, and gives back true (OK) or false (Cancel)
            var keepPlaying = confirm("That wasn't a number. Do you want to keep playing?");

            // ! means "not", so this part runs when the player clicked Cancel (keepPlaying is false)
            if (!keepPlaying) {
                // Write a message on the page, inside <p id="result">
                document.getElementById("result").innerHTML = "Game stopped. The number was " + secret + ".";
                return; // return leaves the function straight away, which ends the game
            }

        // ----- Steps 1 and 4: the guess is wrong, so say too low or too high -----
        } else if (guess < secret) {
            // < means "less than": the guess is smaller than the secret number
            alert("Sorry, incorrect Guess! Incorrect, too low");
        } else {
            // It's a number, it's not correct, and it's not too low... so it must be too high
            alert("Sorry, incorrect Guess! Incorrect, too high");
        }

        // Ask for another guess (still prompt + parseInt in one line).
        // The loop then goes back to the top and checks guess !== secret again.
        guess = parseInt(prompt("Guess again (1-20)"));

        // ++ adds 1 to the count
        numberOfGuesses++;
    }

    // ----- Step 1: the correct guess -----
    // We only get here once the while loop has stopped,
    // and it only stops when guess === secret. So the guess must be correct.
    alert("Correct Guess!");

    // Also show the result on the page. The + sign joins text and numbers together.
    document.getElementById("result").innerHTML =
        "Correct Guess! The number was " + secret + ". You got it in " + numberOfGuesses + " guesses.";
}


// Find the Play button by its id and LISTEN for a click on it.
// Every time the button is clicked, the playGame function runs and a new game starts.
document.getElementById("playButton").addEventListener("click", playGame);
