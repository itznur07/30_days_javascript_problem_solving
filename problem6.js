
function reduce(nums, fn, init) {
    // create a variable to store the accumulated value
    let result = init;
    // loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
      // apply the reducer function to the accumulated value and the current element
      result = fn(result, nums[i]);
    }
    // return the final value
    return result;
  }
  // define a sample array, a reducer function, and an initial value
  let nums = [1,2,3,4];
  let fn = function sum(accum, curr) { return accum + curr; };
  let init = 0;
  
  // call the reduce function and print the output
  let output = reduce(nums, fn, init);
  console.log(output); // 10