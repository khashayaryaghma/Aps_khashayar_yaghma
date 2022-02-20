// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats are considered UNeven for this kata.

function testEven(n) {
  //Your awesome code here!
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

////////////test///////////

console.log(testEven(5));
console.log(testEven(6));
console.log(testEven(13));
console.log(testEven(72));