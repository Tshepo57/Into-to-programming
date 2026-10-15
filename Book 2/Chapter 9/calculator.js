// Add a click event listener to the "submit" button that triggers the calculateIt function when clicked
document.getElementById("submit").addEventListener("click", calculateIt);

// Function that handles the calculation logic
function calculateIt() {

    // Declare variables for the selected operator and the final result
    var myOperator;
    var returnValue;
    
    // Get values of the two operands from input fields (they come in as strings)
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // Get dropdown elements that let the user choose the data types of the operands
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");

    // Get the selected data types for both operands
    var operand1type = select1.value;
    var operand2type = select2.value;
    
    // Get the list of all radio buttons with the name "operator"
    var radios = document.getElementsByName('operator');
    
    // Convert operand1 to the chosen type (string or number)
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);  // Convert to string
            break;
        case "number":
            operand1 = Number(operand1);  // Convert to number (NaN if not a valid number)
            break;
    }
    
    // Convert operand2 to the chosen type (string or number)
    switch (operand2type) {
        case "string":
            operand2 = String(operand2);  // Convert to string
            break;
        case "number":
            operand2 = Number(operand2);  // Convert to number
            break;
    }

    // Loop through each radio button to find the selected operator
    for (var i = 0, length = radios.length; i < length; i++) {

        // Check if the current radio button is selected
        if (radios[i].checked) {

            // Store the value of the selected operator
            myOperator = radios[i].value;
            
            // Perform a different operation depending on the selected operator
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;  // Addition or string concatenation
                    break;
                case "-":
                    returnValue = operand1 - operand2;  // Subtraction
                    break;
                case "*":
                    returnValue = operand1 * operand2;  // Multiplication
                    break;
                case "/":
                    returnValue = operand1 / operand2;  // Division
                    break;
                case "%":
                    returnValue = operand1 % operand2;  // Modulo (remainder)
                    break;
                case "concat":
                    returnValue = operand1 + "  " + operand2;  // Explicit concatenation
                    myOperator = "+";  // Show "+" as the operator used
                    break;
                case "==":
                    returnValue = operand1 == operand2;  // Loose equality comparison
                    break;
                case "===":
                    returnValue = operand1 === operand2;  // Strict equality comparison
                    break;
                case "!=":
                    returnValue = operand1 != operand2;  // Loose inequality comparison
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;  // Strict inequality comparison
                    break;
                case ">":
                    returnValue = operand1 > operand2;  // Greater than comparison
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;  // Greater than or equal
                    break;
                case "<":
                    returnValue = operand1 < operand2;  // Less than comparison
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;  // Less than or equal
                    break;
            }

            // Stop looping once we've found and processed the selected operator
            break;
        }
    }

    // If operands are strings, wrap them in double quotes for display
    if (typeof(operand1) === "string") {
        operand1 = '"' + operand1 + '"';
    }
    if (typeof(operand2) === "string") {
        operand2 = '"' + operand2 + '"';
    }

    // Display the full operation (e.g., "5" + "3" or 5 + 3)
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;
    
    // Display the result of the operation
    document.getElementById("result").innerHTML = returnValue;
};

// Note: Line 106 uses double quotes inside a string. In JavaScript, strings can be wrapped in single quotes to allow double quotes inside without escaping.
