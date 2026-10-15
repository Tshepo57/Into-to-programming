console.log("-------------------IF STATEMENT--------------------------")
var name = "Lee";  // Declare a variable 'name' and assign it the string value "Nicholas"
console.log("Hello " + name);  // Output a greeting message with the value of 'name' concatenated to the string

if (name.length > 5) {  // Check if the length of the 'name' string is greater than 7 characters
    console.log("Wow, you have a REALLY long name!", '\n');  // If the condition is true, output this message
}

console.log("---------------------------ELSE STATEMENT--------------------------------------")
var name = "Cursh";
console.log("Hello " + name);

if (name.length > 4) {
    console.log("Wow, you have a REALLY long name!");
} else {            // If name is not longer than 7 characters   
    console.log("Your name isn't very long.", '\n');  // Print this message
}

console.log("-------------------ELSE-IF STATEMENT--------------------------")
var lemonChicken = false;      // Lemon chicken is not available
var beefWithBlackBean = false;  // Beef with black bean is available
var sweetAndSourPork = true;  // Sweet and sour pork is available

if (lemonChicken) {                     // If lemon chicken is available
    console.log("Great! I'm having lemon chicken!");  
} else if (beefWithBlackBean) {        // If lemon chicken is not available, check for beef
    console.log("I'm having the beef.");  
} else if (sweetAndSourPork) {         // If neither lemon chicken nor beef is available, check for pork
    console.log("OK, I'll have the pork.");  
} else {                               // If none of the dishes are available
    console.log("Well, I guess I'll have rice then.");  // Print this message
}

