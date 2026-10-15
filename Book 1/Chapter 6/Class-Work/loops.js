console.log("---------------WHILE LOOP-------")
var sheepCounted = 0;         // Start counting from 0
while (sheepCounted < 10) {  // Continue while sheepCounted is less than 10
    console.log("I have counted " + sheepCounted + " sheep!");  // Print the current count
    sheepCounted++;           // Increase the count by 1
}
console.log("Zzzzzzzzzzz", '\n');  // Print a message when done counting

console.log("---------------FOR LOOP-------")
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {  // Start counting from 0, repeat until 10
    console.log("I have counted " + sheepCounted + " sheep!");  // Print the current count of sheep
} 
console.log("Zzzzzzzzzzz", '\n');                                     // Print the message 

console.log("---------------FOR LOOP WITH ARRAY-------")
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];  // A list of animals

for (var i = 0; i < animals.length; i++) {                            // Loop through each animal in the list
    console.log("This zoo contains a " + animals[i] + ".", '\n');           // Print the current animal
}

console.log("--------------DO WHILE LOOP-------")
let number = 1;  // Start with number 1

do {
    console.log(number); // Print the current number
    number++;            // Add 1 to the number
} while (number <= 5);   // Keep going while number is 5 or less

