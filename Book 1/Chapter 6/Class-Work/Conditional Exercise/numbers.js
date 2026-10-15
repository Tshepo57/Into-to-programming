let numbers = 15

if (numbers > 20) {
    console.log("The number is greater than 20")
} else if (numbers > 10) {
    console.log("The number is greater than 10")
} else if (numbers > 5) {
    console.log("The number is greater than 5")
} else {
    console.log("The number is less")
}

console.log("-----Ternary Operator-----")
let number = 14

let result = (number > 10 || number > 20)
    ? "Number is between 10 and 20"
    : "Number is not in the range";

console.log(result);