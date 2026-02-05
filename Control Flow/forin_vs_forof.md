# JavaScript Loops: for...in vs for...of

In JavaScript, both `for...in` and `for...of` are loop constructs used to iterate over data, but they serve different purposes and work on different types of data structures.

## Quick Summary

| Feature | `for...in` | `for...of` |
| :--- | :--- | :--- |
| **Iterates over** | **Keys** (Property Names) | **Values** |
| **Best for** | Objects `{}` | Iterables (Arrays `[]`, Strings, Maps, Sets) |
| **Prototype Chain** | Iterates over inherited enumerable properties | Ignores properties, uses the iterator |
| **Order** | Not guaranteed | Respects the order of the iterable |

---

## 1. The `for...in` Loop

The `for...in` loop iterates over the **enumerable properties (keys)** of an object. It basically says, "Give me the content of the `key`."

### Syntax
```javascript
for (const key in object) {
    // code block to be executed
}
```

### Example: Object
```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

for (const key in person) {
    console.log(key, person[key]);
}

// Output:
// name Alice
// age 25
// city Wonderland
```

### ⚠️ Why avoid `for...in` for Arrays?
While it *can* work on arrays (since arrays are objects), it is discouraged because:
1.  It iterates over **keys** (indices) as strings, not numbers.
2.  It iterates over **inherited** user-defined properties if they exist on `Array.prototype`.
3.  The order of iteration is implementation-dependent and not guaranteed.

---

## 2. The `for...of` Loop

The `for...of` loop comes from ES6 and iterates over the **values** of an **iterable** object (like Arrays, Strings, Maps, Sets). It basically says, "Give me the actual `value`."

### Syntax
```javascript
for (const value of iterable) {
    // code block to be executed
}
```

### Example: Array
```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

// Output:
// red
// green
// blue
```

### Example: String
```javascript
const str = "Hello";

for (const char of str) {
    console.log(char);
}
// Output: H, e, l, l, o
```

### ⚠️ Does it work on Objects?
No. **Plain objects are not iterable** by default. Using `for...of` on a plain object will throw a `TypeError`.

```javascript
const obj = { a: 1, b: 2 };

// for (const val of obj) {} // ❌ TypeError: obj is not iterable
```

**Solution for Objects:**
Use `Object.keys()`, `Object.values()`, or `Object.entries()` to convert object data into an array first.

```javascript
for (const val of Object.values(obj)) {
    console.log(val); // 1, 2
}
```
