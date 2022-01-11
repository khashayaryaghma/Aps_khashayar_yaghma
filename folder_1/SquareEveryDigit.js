// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  num = num.toString();//convert to string
  num = num.split("");//separate each character and create an array
  num = num.map((number) => {//Iteration the array
      number = parseInt(number);
      number = number ** 2;
      return number;
    }).join("");//join element of array and give a string
  num = parseInt(num);//convert to int
  return num;
}

///////////test/////////////

console.log(squareDigits(12345));
console.log(squareDigits(222333));