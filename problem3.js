/** 2704. To Be Or Not To Be */

function expect(val) {
  return {
    toBe: function (other) {
      if (val === other) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (other) {
      if (val !== other) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Example usage:
try {
  expect(5).toBe(5); // This will not throw an error
  expect(5).notToBe(3); // This will not throw an error
  expect(5).toBe(3); // This will throw an error
} catch (error) {
  console.error(error.message); // Handle the error
}
