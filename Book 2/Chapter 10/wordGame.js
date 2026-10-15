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
    let exclamation = "<span class='replacement'>" + document.getElementById('exclamation').value + '</span>';
    let pastVerb2 = "<span class='replacement'>" + document.getElementById('pastVerb2').value + '</span>';
    let adjDance = "<span class='replacement'>" + document.getElementById('adjDance').value + '</span>';
    let animal = "<span class='replacement'>" + document.getElementById('animal').value + '</span>';
    let city = "<span class='replacement'>" + document.getElementById('city').value + '</span>';
    let verb = "<span class='replacement'>" + document.getElementById('verb').value + '</span>';

    // Build the story using the user inputs, concatenating each part
    // The += operator is used to append (add) new strings to the existing 'theStory' string
    // Instead of rewriting the entire string each time, += lets us build the story piece by piece

    let theStory = "<h1>Douglas's Dance Party</h1> ";  // Start with a heading
    theStory += 'One ' + adj1 + ' day, ';              // Add the opening line with the adjective
    theStory += 'Douglas was ' + verbING;              // Append the verb ending in -ing
    theStory += ' in his ' + roomInHouse;              // Append the room in the house
    theStory += ', reading a book about ' + color + ' ' + nounPlural + '.<br></br>';  // Add a colorful plural noun
    theStory += ' As he ' + pastVerb + ' his ' + beverage + ', ';                     // Describe an action with a drink
    theStory += 'he heard ' + musicType + ' music ';                                  // Describe the music he heard
    theStory += 'playing in the ' + diffRoom + '.<br></br> ';                         // Indicate where the music is coming from
    theStory += exclamation + '! he exclaimed, ';                                     // Add an exclamation
    theStory += 'as he ' + pastVerb2 + ' down the stairs to join the ';               // Describe movement
    theStory += adjDance + ' party.<br></br>';                                        // Describe the party
    theStory += 'Douglas danced the ' + animal + ' Dance, ';                          // Add a quirky dance move
    theStory += 'the ' + city + ' Twist, ';                                           // Add a city-themed dance
    theStory += 'and took the prize for dancing the best Electric ' + verb + '.';     // Finish the story

    // Display the assembled story inside the "story" <div>
    storyDiv.innerHTML = theStory;
}
