//1. Creating 3 objects
//2. creating an array of friends using the names of the objects as items
var friends = [
{
    name: "Tshepo",
    age: 50,
    LuckyNumbers: [5, 10, 15, 20]
},
{
    name: "Thabiso",
    age: 27,
    LuckyNumbers: [3, 6, 9, 12]
},
{
    name: "Refilwe",
    age: 18,
    LuckyNumbers: [4, 8, 12, 16]
}
];

//3.accessing objects in the array
console.log("accessing the object on index 0:", friends[0])
console.log("accessing the object on index 0:", friends[1])

//4. Accessing properties in the object
console.log("accessing the luckynumber array from friends2: ", friends[1].LuckyNumbers)

//5. accessing a certain number from friends2
console.log("accessing a certain number from friends2: ", friends[1].LuckyNumbers[2])