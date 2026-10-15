// Get a reference to the element with ID "todaysdate" (where the date will be displayed)
var todayDate = document.getElementById("todaysdate");

// Get a reference to the button with ID "whattodo"
var todoButton = document.getElementById("whattodo");

// Add an event listener to the button so that when it is clicked, the displayActivity function runs
todoButton.addEventListener("click", displayActivity);

// Create a new Date object to get the current date and time
var d = new Date();

// Call the function that displays the current date on page load
displayDate();

// Function to display today's date in a readable format
function displayDate() {
    // Set the inner HTML of the todayDate element to the string version of the current date
    todayDate.innerHTML = d.toDateString();
}

// Function to determine and display an activity suggestion based on the current day of the week
function displayActivity() {
    // Get the numeric day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    var dayOfWeek = d.getDay();

    // Declare a variable to hold the suggested activity
    var youShould;

    // Use a switch statement to choose an activity based on the day
    switch (dayOfWeek) {
        case 0: // Sunday
            youShould = "Take it easy. You've earned it.";
            break;
        case 1: // Monday
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2: // Tuesday
            youShould = "Take time to smell the roses!";
            break;
        case 3: // Wednesday
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4: // Thursday
            youShould = "Learn something new today!";
            break;
        case 5: // Friday
            youShould = "Make a list of things you like to do.";
            break;
        case 6: // Saturday
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default: // Just in case something unexpected happens
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    // Display the suggested activity inside the element with ID "thingToDo"
    document.getElementById("thingToDo").innerHTML = youShould;
}