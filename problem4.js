/** 2635. Apply Transform Over Each Element in Array */

function map(arr, fn) {
  // create an empty array to store the transformed elements
  let result = [];
  // loop through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    // apply the mapping function to the element and its index
    let transformed = fn(arr[i], i);
    // push the transformed element to the result array
    result.push(transformed);
  }
  // return the result array
  return result;
}

// define a sample array and a mapping function
let arr = [1, 2, 3];
let fn = function plusone(n) {
  return n + 1;
};

// call the map function and print the output
let output = map(arr, fn);
console.log(output); // [2,3,4]
