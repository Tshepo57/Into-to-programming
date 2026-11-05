// =====================================================================
// Project 2 - Shopping Cart
// Code College - Intro to Programming
// =====================================================================
//
// Started from the teacher's shopStart code. What the brief asks for:
//   1. REMOVE buttons that do the opposite of the Add button
//   2. When removing, quantities must never go below 0
//   3. A Checkout button that adds up the price of everything in the cart
//      and shows the total on the page, using a NEW function
//
// Small fixes made to the starter code:
//   - removed a stray "<" after the Item cell, which broke the table
//   - declared the loop counter with "var i" (it was missing)
//   - the second "Add" column is now the "Remove" column
// =====================================================================


// ----- The shop's data, kept in arrays -----
// An array is a list. Position 0 in EVERY array is about the same snack (Coke),
// position 1 is Kit Kat, and so on. These are called "parallel arrays".
var nums = [1, 2, 3, 4];                               // the number shown in the first column
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];   // the snack names
var prices = [7.5, 9.5, 8.5, 7.5];                     // price of ONE of each snack, in Rand
var quantities = [0, 0, 0, 0];                         // how many of each snack are in the cart (all start at 0)
var totals = [0.0, 0.0, 0.0, 0.0];                     // price x quantity for each snack
var totalOrderAmt = 0;                                 // running total of the whole cart


// ----- Add one of a snack to the cart (from the starter code) -----
// x is the snack's position in the arrays, e.g. 0 = Coke, 1 = Kit Kat
function add_selection(x) {
    quantities[x] = quantities[x] + 1;        // one more of this snack
    totals[x] = prices[x] * quantities[x];    // work out this snack's total again
    totalOrderAmt += prices[x];               // += adds this price to the running total

    display_all();                            // redraw the table so the new numbers show
}


// ----- NEW: remove one of a snack from the cart -----
// This does the opposite of add_selection.
function remove_selection(x) {

    // Only remove if there is at least 1 of this snack in the cart.
    // This stops the quantity from ever going negative (e.g. -1 Cokes).
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1;        // one less of this snack
        totals[x] = prices[x] * quantities[x];    // work out this snack's total again
        totalOrderAmt -= prices[x];               // -= takes this price off the running total
    } else {
        // The quantity is already 0, so there's nothing to remove. Tell the user.
        alert("You don't have any " + items[x] + " in your cart.");
    }

    // The cart has changed, so clear the old checkout total (it's out of date now)
    document.getElementById("total").innerHTML = "";

    display_all();                                // redraw the table
}


// ----- NEW: checkout - add up the cart and show the total -----
// This is the new function the brief asks for. The Checkout button runs it.
function checkout() {
    var orderTotal = 0;   // will hold the total price of the cart
    var itemCount = 0;    // will hold how many snacks are in the cart

    // A for loop goes through every snack: i = 0, 1, 2, 3
    for (var i = 0; i < items.length; i++) {
        orderTotal += totals[i];      // add this snack's total to the order total
        itemCount += quantities[i];   // add this snack's quantity to the item count
    }

    if (itemCount === 0) {
        // Nothing has been added yet
        document.getElementById("total").innerHTML = "Your cart is empty.";
    } else {
        // toFixed(2) always shows 2 decimal places for money, e.g. 24.5 becomes "24.50"
        document.getElementById("total").innerHTML =
            "Total: R" + orderTotal.toFixed(2) + " (" + itemCount + " items)";
    }
}


// ----- Build the table and show it on the page -----
// The table is built as one long piece of HTML text in the variable myTable,
// then put inside <p id="demo"> at the end.
function display_all() {

    // The heading row: <tr> is a table row, <th> is a heading cell
    var myTable = "<table><tr>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";
    myTable += "</tr>";

    // One row for each snack. The loop runs 4 times: i = 0, 1, 2, 3
    for (var i = 0; i < items.length; i++) {
        // <td> is a normal table cell
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>R" + prices[i].toFixed(2) + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>R" + totals[i].toFixed(2) + "</td>";

        // The buttons. onclick='add_selection(0)' means: when clicked, run add_selection for snack 0.
        // The number comes from i, so every row's buttons work on their own snack.
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td></tr>";
    }

    myTable += "</table>";

    // Put the finished table inside <p id="demo"> on the page
    document.getElementById("demo").innerHTML = myTable;
}


// When the page has finished loading, draw the table for the first time
window.onload = function () {
    display_all();
};
