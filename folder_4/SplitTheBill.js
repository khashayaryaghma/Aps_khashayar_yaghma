// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

function splitTheBill(obj) {
  let y = {};
  let arr = Object.values(obj);
  let avArr = arr.reduce((a, b) => a + b) / arr.length;
  for (let key in obj) {
    y[key] = obj[key] - avArr;
    y[key] = parseFloat(y[key].toFixed(2));
  }
  return y;
}

//////////////test////////////////////

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
console.log(splitTheBill({ A: 40, B: 25, X: 10 }));