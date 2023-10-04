function filter(arr, fn) {
    // create an empty array to store the filtered elements
    let result = [];
    // loop through each element in the original array
    for (let i = 0; i < arr.length; i++) {
      // check if the element satisfies the filtering function
      let condition = fn(arr[i], i);
      // if the condition is truthy, push the element to the result array
      if (condition) {
        result.push(arr[i]);
      }
    }
    // return the result array
    return result;
  }
  // define a sample array and a filtering function
  let arr = [0,10,20,30];
  let fn = function greaterThan10(n) { return n > 10; };
  
  // call the filter function and print the output
  let output = filter(arr, fn);
  console.log(output); // [20,30]