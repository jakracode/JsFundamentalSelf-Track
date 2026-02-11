# Mapping an Array in JavaScript

The `map()` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.

## Key Concepts

- **Immutability**: It does not mutate the original array; it returns a new one.
- **Transformation**: It is used to transform elements (e.g., number to string, object to specific property).
- **Length**: The new array will always have the same length as the original array.

## Syntax

```javascript
const newArray = array.map((currentValue, index, array) => {
  // Return element for newArray
});
```

- **currentValue**: The current element being processed in the array.
- **index** (Optional): The index of the current element.
- **array** (Optional): The array `map` was called upon.

## Examples

### 1. Simple Transformation (Mapping Numbers)
Doubling each number in an array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (Unchanged)
```

### 2. Mapping Objects (Common Use Case)
Extracting specific data from an array of objects.

```javascript
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

// Create an array of just the product names
const productNames = products.map(product => product.name);

console.log(productNames); // Output: ['Laptop', 'Phone', 'Tablet']
```

### 3. Mapping to Objects
Taking an array of primitives and turning them into objects.

```javascript
const ids = [1, 2, 3];
const items = ids.map(id => ({ id: id, value: `Item ${id}` }));

console.log(items);
/* Output:
[
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' }
]
*/
```

### 4. Chaining with `filter`
You can chain `map()` with other array methods like `filter()`.

```javascript
const numbers = [1, -1, 2, 3];

// First filter positive numbers, then map specifically to objects
const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }));

console.log(items); // Output: [{ value: 1 }, { value: 2 }, { value: 3 }]
```

## Difference from `forEach`

- `forEach()`: Iterates over the array and executes a function. It returns `undefined` and is used for side effects (like logging or saving to a database).
- `map()`: Iterates over the array and **returns a new array**. It is used for transforming data.
