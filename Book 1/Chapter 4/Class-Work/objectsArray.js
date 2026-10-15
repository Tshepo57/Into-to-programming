//Array of friends:
// Define the Friend Objects
var anna = {
    name: "Anna",
    age: 11,
    luckyNumbers: [2, 4, 8, 16]
};

var dave = {
    name: "Dave",
    age: 5,
    luckyNumbers: [3, 9, 40]
};

var kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1, 2, 3]
};

var Lee = {
    name: "Lee",
    age: 20,
    luckyNumbers: [30, 10, 3]
};

//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [anna, dave, kate, Lee];

// Accessing Objects in the Array:
console.log("Friend-Object:", friends[1]); 

//Accessing Properties within an Object:
console.log("Friend-Age:", friends[2].age); 

// Accessing Nested Arrays within Objects:
console.log("Name:", friends[0].name, "and Lucky-Number", friends[0].luckyNumbers[1]); 