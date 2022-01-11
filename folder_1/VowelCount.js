// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++){//use loop for Iteration the string
    if (str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"){
          //if condition is true a unit added to this variable
      vowelsCount++;
    }//I can also use split for this exercise
  }
  return vowelsCount;
}


////////////////test////////////////////////

console.log(getCount("khashayar"));
console.log(getCount("arad"));
console.log(getCount("kian"));
console.log(getCount("maryam"));
console.log(getCount("haniyeh"));
console.log(getCount("zeynab"));
