// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
  let array = arr.filter((el, ind) => {
    if (ind % 2 === 0) {
      return el;
    }
  });
  return array;
}

