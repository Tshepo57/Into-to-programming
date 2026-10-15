console.log("---PROMPT------")
var name = prompt("What's your name?");  // Ask the user to enter their name
console.log("Hello " + name, '\n');            // Greet the user with their name

console.log("---Confirm Function----")
var likesCats = confirm("Do you like cats?");  // Ask the user with OK/Cancel

if (likesCats) {                               // If the user clicked OK (true)
    console.log("You're a cool cat!");        // Print this message
} else {                                      // If the user clicked Cancel (false)
    console.log("Yeah, that's fine. You're still cool!");  // Print this message
}

console.log("----Alert------")
alert("JavaScript is awesome!");