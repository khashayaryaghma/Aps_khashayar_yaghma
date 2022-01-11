// In this little assignment you are given a string of space separated numbers, and 

// have to return the highest and lowest number.



function highAndLow(numbers) {
  numbers = numbers.split(" ");//separate each number to one string in array
  numbers = numbers.map((num) => parseInt(num));//convert each element of array to int
  let max = numbers.reduce((num1, num2) => {//calculate max
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  });
  let min = numbers.reduce((num1, num2) => {//calculate min
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  });
  let maxMin = max + " " + min;
  return maxMin;
}


//////////////test//////////


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));// 42 -9