// Prompt the user to enter their favorite day of the week and store it in the variable 'myNumber'
var myNumber = prompt("Enter your favorite day of the week!");

// Declare a variable to store the response message
var theResponse;

// Use a switch statement to match the entered day with predefined cases
switch (myNumber) {
    case "Monday":
        // If user enters "Monday", respond with "Ack!"
        theResponse = "Ack!";
        break; 
    case "Tuesday":
        // If user enters "Tuesday", respond with "Taco day!"
        theResponse = "Taco day!";
        break;
    case "Wednesday":
        // If user enters "Wednesday", respond with "Halfway there!"
        theResponse = "Halfway there!";
        break;
    case "Thursday":
        // If user enters "Thursday", respond with "It's the new Friday!"
        theResponse = "It's the new Friday!";
        break;
    case "Friday":
        // If user enters "Friday", respond with "TGIF! Yeah!"
        theResponse = "TGIF! Yeah!";
        break;
    case "Saturday":
        // If user enters "Saturday", respond with "What a day!"
        theResponse = "What a day!";
        break;
    case "Sunday":
        // If user enters "Sunday", respond with "Sunday = Funday!"
        theResponse = "Sunday = Funday!";
        break;
    default:
        // If the input doesn't match any day, provide a default message
        theResponse = "I haven't heard of that one!";
        break;
}

// Display the appropriate response in an alert box
alert(theResponse);
