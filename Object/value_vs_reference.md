# Value vs Reference Types in JavaScript

In JavaScript, data types are divided into two categories: **Primitives (Value Types)** and **Objects (Reference Types)**. Understanding the difference is crucial for managing state and avoiding bugs.

## 1. Primitives (Value Types)

Primitives are simple data types. They are stored directly in the variable's location in memory.

**Types:** Number, String, Boolean, Symbol, undefined, null.

### Key Characteristics:
- **Independent:** When you assign a primitive to another variable, the value is **copied**.
- **Immutable:** The value itself cannot be changed (though the variable can be reassigned).

```javascript
let x = 10;
let y = x; // y is a distinct copy of x

x = 20;

console.log(x); // 20
console.log(y); // 10 (y is not affected by changes to x)
```

## 2. Objects (Reference Types)

Objects are complex data types. The variable determines the **address (reference)** of the object in memory, not the object itself.

**Types:** Object, Array, Function.

### Key Characteristics:
- **Shared Reference:** When you assign an object to another variable, the **reference (address)** is copied, not the object itself. Both variables point to the same object in memory.
- **Mutable:** Changes made through one variable are visible through the other.

```javascript
let a = { value: 10 };
let b = a; // b points to the same object as a

a.value = 20;

console.log(a.value); // 20
console.log(b.value); // 20 (b sees the change because it's the same object)
```

## Summary Table

| Feature | Primitives (Value Types) | Reference Types (Objects) |
| :--- | :--- | :--- |
| **Storage** | Stored on the **Stack** | Stored on the **Heap** |
| **Assignment** | Value is copied | Reference (pointer) is copied |
| **Comparison** | Compared by value (`10 === 10` is true) | Compared by reference (`{} === {}` is false) |
| **Examples** | Number, String, Boolean | Object, Array, Function |

## Common Pitfalls

### Equality Check
Two different objects with the same content are **not existing** equal because their references are different.

```javascript
let obj1 = { name: 'Rezio' };
let obj2 = { name: 'Rezio' };

console.log(obj1 === obj2); // false (different memory addresses)
```

### Passing to Functions
- **Primitives** are passed by value (function gets a copy).
- **Objects** are passed by reference (function can modify the original object).

```javascript
function increase(obj) {
    obj.value++;
}

let numberObj = { value: 10 };
increase(numberObj);
console.log(numberObj.value); // 11
```
