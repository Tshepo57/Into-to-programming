// Change the left eye's background color to purple
document.getElementById("lefteye").style.backgroundColor = "purple";

// Round the corners of the mouth
document.getElementById("mouth").style.borderRadius = "4px";

// Put a yellow dotted border around the right eye
document.getElementById("righteye").style.border = "4px yellow dotted";

// Change the left arm's color to magenta
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// Change the text color inside the body to red
document.getElementById("body").style.color = "#FF0000";

// Give Douglas hair by adding a border to the top of the head
document.getElementById("head").style.borderTop = "6px black solid";


// -------------------- RIGHT EYE MOVEMENT --------------------

// Get the right eye element
var rightEye = document.getElementById("righteye");

// When the right eye is clicked, run the moveUpDown function
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    // The element that was clicked
    var robotPart = e.target;

    // Starting position
    var top = 0;

    // Run the frame function every 10 milliseconds
    var id = setInterval(frame, 10);

    function frame() {
        // Move the eye down by increasing the top position
        robotPart.style.top = top + '%';
        top++;

        // Stop the animation when it reaches 20%
        if (top === 20) {
            clearInterval(id);
        }
    }
}


// -------------------- LEFT ARM ROTATION --------------------

// Get the left arm element
var leftArm = document.getElementById("leftarm");

// When the left arm is clicked, run the moveRightLeft function
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    // The element that was clicked
    var robotPart = e.currentTarget;

    // Starting rotation angle
    var angle = 0;

    // Direction of movement (1 = forward, -1 = backward)
    var direction = 1;

    // Run the frame function every 10 milliseconds
    var id = setInterval(frame, 10);

    function frame() {
        // Rotate the arm
        robotPart.style.transform = "rotate(" + -angle + "deg)";
        angle += direction;

        // Reverse direction when max angle is reached
        if (angle === 70) {
            direction = -1;
        }

        // Stop the animation when it returns to the start
        if (angle === 0 && direction === -1) {
            clearInterval(id);
        }
    }
}


// -------------------- HEAD TILT --------------------

// Get the head element
let head = document.getElementById("head");

// When the head is clicked, run the tiltHead function
head.addEventListener("click", tiltHead);

function tiltHead(t) {
    // The element that was clicked is the head itself
    var head = t.currentTarget;
    
    // Direction of rotation
    var direction = 1;

    // Starting rotation angle
    var turn = 0;

    // Run the head1 function every 10 milliseconds
    var id1 = setInterval(head1, 10);

    function head1() {
        // Rotate the head only
        head.style.transform = "rotate(" + turn + "deg)";
        
        turn += direction;

        // Reverse direction at 16 degrees
        if (turn === 16) {
            direction = -1;
        }

        // Stop the animation once it returns to 0 degrees
        if (turn === 0 && direction === -1) {
            clearInterval(id1);
        }
    }
}