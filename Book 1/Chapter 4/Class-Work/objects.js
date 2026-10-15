//1.  Defining an Object:
const person = {
    name: 'Lesedi',             // Key-value pair
    age: 30,
    country: 'Canada',
    'favorite color': 'blue',  // Key with a space requires quotes
    isStudent: false
};

//2.  Accessing Object Values:
const name = person.name; 
console.log("Name:", name);

const age = person['age'];
console.log("Age:", age);

//3.  Retrieving All Keys from an Object:
// const keys = Object.keys(person);
// console.log("Keys:", keys);

// //Retrieving All Values from an Object:
// const values = Object.values(person);
// console.log("Values:", values);

// //4.  Adding New Key-Value Pairs:
// // Key with special characters or spaces
// //bracket notation
// person['occupation'] = 'Engineer'; 
// console.log("New key-value pair:", person['occupation']);

// //Dot notation
// person.city = "Blues"
// console.log("City:", person.city)

// //5.  Update the value of 'age'
// person.age = 20;  
// console.log("Person-Age:", person.age);

// //6.  Adding keys with numbers or special characters requires quotes:
// person['1stLanguage'] = 'English';
// console.log("Person-1stLanguage:", person['1stLanguage']); 

// person['email-address'] = 'alice@example.com';
// console.log("Person-Email:", person['email-address']);

// console.log("Person-Object:", person);


