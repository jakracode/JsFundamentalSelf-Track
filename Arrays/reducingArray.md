# Reducing an Array

The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

**Key Concept:** It reduces an array to a single value (e.g., a number, a string, an object, or even a new array).

## Syntax

```javascript
array.reduce((accumulator, currentValue, index, array) => {
    // return new accumulator value
}, initialValue);
```

- **accumulator**: The value resulting from the previous call to the callbackfn. On the first call, `initialValue` if specified, otherwise the value of `array[0]`.
- **currentValue**: The value of the current element.
- **index** (Optional): The index of the current element.
- **array** (Optional): The array `reduce()` was called upon.
- **initialValue** (Optional): A value to which `accumulator` is initialized the first time the callback is called.

## Example 1: Summing Numbers

Without `reduce` (using `for...of`):
```javascript
const numbers = [1, -1, 2, 3];
let sum = 0;

for (let n of numbers)
    sum += n;

console.log(sum); // Output: 5
```

With `reduce`:
```javascript
const numbers = [1, -1, 2, 3];

// a = accumulator
// c = currentValue
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initialValue

console.log(sum); // Output: 5
```

**How it works step-by-step:**
1.  **Iteration 1:** `accumulator` = 0 (initialValue), `currentValue` = 1. Returns 1.
2.  **Iteration 2:** `accumulator` = 1, `currentValue` = -1. Returns 0.
3.  **Iteration 3:** `accumulator` = 0, `currentValue` = 2. Returns 2.
4.  **Iteration 4:** `accumulator` = 2, `currentValue` = 3. Returns 5.

## Example 2: Shortened Syntax

The callback function can be cleaner if it's a single line:

```javascript
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((a, c) => a + c);

console.log(sum); // Output: 5
```
*Note: If `initialValue` is omitted, the first element of the array is used as the initial `accumulator` value and the iteration starts from the second element.*
