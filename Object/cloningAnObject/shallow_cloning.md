# Shallow Cloning in JavaScript

## What is a Shallow Clone?
A **shallow clone** creates a new object and copies the **values** of the top-level properties from the original object. 

However, if the original object contains nested objects (properties that reference other objects), the **reference** to those nested objects is copied, not the value. This means the nested objects are **shared** between the original and the clone.

## Methods for Shallow Cloning

### 1. Spread Operator (`...`) - Modern
The most common way to shallow clone in modern JavaScript.

```javascript
const original = {
    name: 'Alice',
    address: { // Nested object
        city: 'Wonderland'
    }
};

const clone = { ...original };

clone.name = 'Bob'; // Changes clone only
clone.address.city = 'Paris'; // CHANGES BOTH original and clone!

console.log(original.name); // 'Alice'
console.log(original.address.city); // 'Paris' (Shared reference)
```

### 2. `Object.assign()`
The older standard method.

```javascript
const clone = Object.assign({}, original);
```

### 3. `for...in` Loop
Manually iterating keys.

```javascript
const clone = {};
for (let key in original) {
    clone[key] = original[key];
}
```

## When to use?
Use shallow cloning when your object is "flat" (no nested objects) or when you specifically want to share state for nested properties.
