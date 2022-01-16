// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let arr = [];
  let multiple = []; //create two empty array

  for (let i = 1; i <= number; i++) {
    //loop for push entire of number until input parameter
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    //loop for push multiple number of 3 and 5
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }
  const sum = multiple.reduce((sum, num) => sum + num, 0); //sum all of element of multyply array
  return sum;
}

////////////////////test///////////////////

console.log(solution(10));
console.log(solution(14));
console.log(solution(32));
console.log(solution(26));