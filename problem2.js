/** Leetcode.2620 counter */

function createCounter(n) {
  return function () {
    return n++;
  };
}
const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
