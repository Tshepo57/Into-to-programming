//Listing 5.5
// Declare variables to hold the list items
var item1;
var item2;
var item3;

// Set up an event listener: when the element with id "changeList" is clicked, call the newList function
document.getElementById("changeList").onclick = newList;

// Function to prompt the user for new list items
function newList() {
    item1 = prompt("Enter a new first thing: ");  // Prompt user for the first item
    item2 = prompt("Enter a new second thing: "); // Prompt user for the second item
    item3 = prompt("Enter a new third thing: ");  // Prompt user for the third item
    updateList(); // Call function to update the list on the page
}

// Function to update the HTML content with the new items
function updateList() {
    document.getElementById("firstThing").innerHTML = item1;   // Set new value for first item
    document.getElementById("secondThing").innerHTML = item2;  // Set new value for second item
    document.getElementById("thirdThing").innerHTML = item3;   // Set new value for third item
}
