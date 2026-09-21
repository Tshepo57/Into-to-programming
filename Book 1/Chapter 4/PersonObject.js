//1. Creating an object person
const person = {
    name: "Tshepo", 
    surname: "Mulambo",
    Age: 50,
    "fave color": "Blue",
    Country: "South Africa"
};

//2.accessing the values using dot (.) notation and bracket []
//using bracket notation to access the color from the person object
const color = person["fave color"]
console.log("Using bracket notation to access the color:", color)

//using the dot notation to access the country from the person from the person object
const country = person.Country;
console.log("using the dot notation to access the country: ", country)

//3. Accessing only keys
const keys = Object.keys(person);
console.log("All keys: ", keys);

//4. Accessing only values
const values = Object.values(person);
console.log("All values: ", values);

//5. Adding New key-Value using bracket notation
person["occupation"] = "Engineer";
console.log("adding a new key-value to the person object: ", person);

//5.updating surname with a new value
person.surname = "Brown";
console.log("after updating the surname: ", person)
