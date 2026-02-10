# Cloning an Object in JavaScript

In JavaScript, objects are reference types. This means that copying an object variable just copies the **reference** (memory address), not the actual object. Modifying the copy also modifies the original.

To create an independent copy of an object, we need to **clone** it.

## 1. Using the Spread Operator (Modern Way)
The easiest way to clone an object in modern JavaScript (ES6+) is using the spread syntax `...`.

```javascript
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Cloning using Spread Operator
const another = { ...circle };

console.log(another); 
```

You can also add or modify properties while cloning:
```javascript
const another = { ...circle, color: 'red' };
```

## 2. Using `Object.assign()` (Old Way)
Before the spread operator, `Object.assign()` was the standard way to copy properties from one or more source objects to a target object.

```javascript
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Target object is {}, source is circle
const another = Object.assign({}, circle);

console.log(another);
```
You can also combine multiple objects or add properties:
```javascript
const another = Object.assign({ color: 'yellow' }, circle);
```

## 3. Using a `for...in` Loop (Manual Way)
This is the oldest method and rarely used now, but it helps understand how cloning works under the hood. We iterate over the object's keys and copy them one by one.

```javascript
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};

for (let key in circle) {
    another[key] = circle[key];
}

console.log(another);
```

## Important Note: Shallow vs Deep Cloning
All the methods above create a **shallow copy**. This means if your object contains other objects (nested objects), the nested objects are still copied by **reference**, not by value.

For deep cloning (independent nested objects), you would need to use:
- `JSON.parse(JSON.stringify(object))` (simple but loses functions/Dates)
- Does not handle methods well.
- Structured Clone `structuredClone(object)` (modern standard).
