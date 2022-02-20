// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let j = 0;
  for (let i = 1; i <= num; i++) {
    j += i;
  }
  return j;
};

//////////test////////////

console.log(summation(17));//153
console.log(summation(6));//21
console.log(summation(66));//2211