console.log("-----With a function------")

// Define a function named drawCats that takes a parameter 'howManyTimes'
var drawCats = function (howManyTimes) {

    // Loop from 0 up to howManyTimes (not including howManyTimes)
    for (var i = 0; i < howManyTimes; i++) {
        // Print the current number and a cat face
        console.log(i + " =^.^=");
    }
};

// Call the function drawCats to print 10 cat faces
drawCats(10);

console.log("-------------------------------------------------------------------------")
console.log("----Without a Function------")

// Without a function
// Loop from 8 to 11 (But excluding 11)
for (var i = 8; i < 11; i++) {
    // Print the current number and a cat face
    console.log(i + " =^.^=");
};

