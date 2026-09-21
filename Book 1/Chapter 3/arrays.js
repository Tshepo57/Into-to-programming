//1.creating an array called fruits
var fruits = ["orange", "peach", "guava", "apple", "grape"];

//2.indexing - starts counting from 0
console.log("1. what is the item on index 2: ", fruits[2]);
console.log("2. what is the item on index 0: ", fruits[0]);

//3.Editing an existing item
fruits[4] = "banana";
console.log("after updating my array with a new item: ", fruits)

//4.the length of my fruits array
console.log("my Fruits length: ", fruits.length)

//5.using push method to add at the back of the array
fruits.push("strawberry");
console.log("after pushing a new item: ", fruits);

//6.adding to the beggining of the array using unshift
fruits.unshift("lime");
console.log("after adding to the beggining: ", fruits);

//7.adding aywhere in your array using splice method
fruits.splice(2,0,"blueberry");
console.log("after using the splice method: ", fruits);

//9.removing an item from the array
console.log("item that was removed: ", fruits.pop());
console.log("after popping: ", fruits);

//9.mixed data types
var mixedArray = [false, 15, "hello", ["pink", "yellow", "brown"], 8];
console.log("What is the item on index 3: ", mixedArray[3]);
console.log("What is the item on index 3: ", mixedArray[3][1]);

//10.contact -joining 2 arrays together
var newArrays = mixedArray.concat(fruits);
console.log("my new array: ", newArrays);
