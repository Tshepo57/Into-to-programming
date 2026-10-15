document.getElementById("lefteye").style.backgroundColor = "yellow";
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

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 57) {
            clearInterval(id);
        }
    }
}

var rightLeg = document.getElementById("rightleg");
var leftLeg = document.getElementById("leftleg");

rightLeg.addEventListener("click", dancingLegs);
leftLeg.addEventListener("click", dancingLegs);

function dancingLegs(e) {
    var rightPos = 0;
    var leftPos = 0;
    var id = setInterval(frame, 50);

    function frame() {
        rightLeg.style.transform = "rotate(" + rightPos + "deg)";
        leftLeg.style.transform = "rotate(" + (-leftPos) + "deg)";
        rightPos += 5;
        leftPos += 5;

        if (rightPos === 30) {
            rightPos = -30;
            leftPos = -30;
        }
        if (rightPos === 0) {
            clearInterval(id);
        }
    }
}

var head = document.getElementById("head");
head.addEventListener("click", spinHead);

function spinHead(e) {
    e.stopPropagation();
    var robotPart = document.getElementById("head");
    var rotation = 0;
    var id = setInterval(frame, 10);
    
    function frame() {
        robotPart.style.transform = "rotate(" + rotation + "deg)";
        rotation += 5;
        if (rotation === 360) {
            clearInterval(id);
        }
    }
}