/** leetcode2667. Create Hello World Function */
function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

const c = createHelloWorld();
console.log(c());
