/** Leetcode prn.2620 */

function createCounter(n) {
  return function () {
    return n++;
  };
}
const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
