// Get the "replaceButton" element from the HTML page
let replaceButton = document.getElementById("replaceButton");

// Attach an event listener to the button, so when it's clicked, the replaceIt() function is called
replaceButton.addEventListener('click', replaceIt);

// Define the function that will be executed when the button is clicked
function replaceIt() {
    // Get the <div> element where the story will be displayed
    let storyDiv = document.getElementById("story");

    // Retrieve and format the user's input from form fields with <span> styling
    let adj1 = "<span class='replacement'>" + document.getElementById('adj1').value + '</span>';
    let verbING = "<span class='replacement'>" + document.getElementById('verbIng').value + '</span>';
    let roomInHouse = "<span class='replacement'>" + document.getElementById('roomInHouse').value + '</span>';
    let color = "<span class='replacement'>" + document.getElementById('color').value + '</span>';
    let nounPlural = "<span class='replacement'>" + document.getElementById('nounPlural').value + '</span>';
    let pastVerb = "<span class='replacement'>" + document.getElementById('pastVerb').value + '</span>';
    let beverage = "<span class='replacement'>" + document.getElementById('beverage').value + '</span>';
    let musicType = "<span class='replacement'>" + document.getElementById('musicType').value + '</span>';
    let diffRoom = "<span class='replacement'>" + document.getElementById('diffRoom').value + '</span>';
    
    // Build the story using the user inputs, concatenating each part
    // The += operator is used to append (add) new strings to the existing 'theStory' string
    // Instead of rewriting the entire string each time, += lets us build the story piece by piece

    let theStory = "<h1>Sweets</h1> ";  // Start with a heading
    theStory += 'One ' + adj1 + ' day, ';              // Add the opening line with the adjective
    theStory += 'I was ' + verbING + ' sweets';              // Append the verb ending in -ing
    theStory += ' in my ' + roomInHouse;              // Append the room in the house
    theStory += ',and i was reading a book about ' + color + ' ' + nounPlural + '.<br></br>';  // Add a colorful plural noun
    theStory += ' As I ' + pastVerb + ' and drinking ' + beverage + ', ';                     // Describe an action with a drink
    theStory += 'I heard ' + musicType + ' music ';                                  // Describe the music he heard
    theStory += 'playing in the ' + diffRoom + '.<br></br> ';                         // Indicate where the music is coming from
    
    // Display the assembled story inside the "story" <div>
    storyDiv.innerHTML = theStory;
}
