# Deep Cloning in JavaScript

## What is a Deep Clone?
A **deep clone** creates a completely independent copy of an object. It recursively copies all nested objects, ensuring that no references are shared between the original and the clone. Changing the clone will **never** affect the original.

## Modern Method: `structuredClone()`
Introduced recently in modern browsers and Node.js, this is the native standard for deep cloning.

### Example
```javascript
const original = {
    name: 'Alice',
    date: new Date(),
    address: {
        city: 'Wonderland'
    }
};

const clone = structuredClone(original);

clone.address.city = 'Paris';

console.log(original.address.city); // 'Wonderland' (Unchanged!)
console.log(clone.address.city);    // 'Paris'
```

### Limitations of `structuredClone`
- **Functions:** It cannot clone functions. It will throw a `DataCloneError` if the object contains a function.
- **Prototypes:** It does not presume the prototype chain (the clone will be a plain object unless the original was a built-in type like Date, Map, Set, etc.).

## Libraries
Before `structuredClone`, developers relied on libraries like **Lodash**.

```javascript
// using Lodash
const clone = _.cloneDeep(original);
```
This is still very popular because it handles edge cases (like functions or complex circular references) very well.
