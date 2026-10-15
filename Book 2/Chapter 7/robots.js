document.getElementById("lefteye").style.backgroundColor = "yellow";
document.getElementById("head").style.transform = "rotate(10deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "10px black solid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "20px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px black solid";
document.getElementById("lefteye").style.border = "4px black dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#ffbb00ff";
// Change the text color.
document.getElementById("body").style.color = "#c5144fff";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "20px pink solid";

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 5) {
            clearInterval(id);
        }
    }
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 5) {
            clearInterval(id);
        }
    }
}