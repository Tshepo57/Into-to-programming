document.write("<strong>-------People Array-------</strong><br>");
var people = ["Teddy", "Cathy", "Bobby", "Paul"];
document.write("1. The people's Array: " + people + "<br><br>");

people[0] = "Georgie";
document.write("2. After changing the value: " + people + "<br>");

// Using valueOf (similar to toString)
document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.write("<br><strong>-------Other People Array-------</strong><br>");
var otherpeople = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
document.write("3. The Other people's Array: " + otherpeople + "<br>");

document.write("<br><strong>-------My People Array-------</strong><br>");
var myPeople = people.concat(otherpeople);
document.write("1. My new combined array: " + myPeople + "<br><br>");

var pp = people.indexOf("Cathy");
document.write("2. Index of Cathy: " + pp + "<br><br>");

var joinedPeople = people.join(" # ");
document.write("3. Joined people with #: " + joinedPeople + "<br><br>");

var lastIndexBobby = people.lastIndexOf("Bobby");
document.write("4. Last index in people Array: " + lastIndexBobby + "<br><br>");

var removedPerson = people.pop();
document.write("5. Removed last person: " + removedPerson + "<br>");
document.write("After pop: " + people + "<br><br>");

people.push("Teddy");
document.write("6. After pushing 'Teddy': " + people + "<br><br>");

people.reverse();
document.write("7. After reversing: " + people + "<br><br>");

var shiftedPerson = people.shift();
document.write("8. Removed at the beginning: " + shiftedPerson + "<br>");
document.write("After shift: " + people + "<br><br>");

people.unshift("Teddy");
document.write("9. After adding to the beginning: " + people + "<br><br>");

var people1 = people.slice(0, 3);
document.write("10. After slice (0 to 3): " + people1 + "<br><br>");

var people2 = people.sort();
document.write("11. After sort: " + people2 + "<br><br>");

people.splice(1, 0, "Cee");
document.write("12. After splice (insert 'Cee' at index 1): " + people + "<br>");