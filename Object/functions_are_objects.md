# JavaScript: Functions are Objects!

In JavaScript, functions are **First-Class Citizens**. This essentially means that functions are just a special type of **Object** (specifically, they are instances of the `Function` constructor).

Because they are objects, they can do everything a normal object (like `{ name: 'Alice' }`) can do, plus they can be invoked (called).

## 1. Proof that Functions are Objects

You can add properties and methods to a function, just like you would with a plain object.

```javascript
function sayHello() {
    console.log("Hello!");
}

// Adding a property property to the function
sayHello.language = "English";

console.log(sayHello.language); // Output: English
```

## 2. Standard Properties

Since functions are objects, they come with built-in properties.

*   **`name`**: The name of the function.
*   **`length`**: The number of parameters the function expects.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add.name);   // Output: "add"
console.log(add.length); // Output: 2 (because it takes 'a' and 'b')
```

## 3. Functions as Data

Because functions are values (objects), you can assign them to variables, store them in arrays, or pass them around.

```javascript
// Assigning to a variable
const myFunc = function() { console.log("I am a function expression"); };

// Storing in an object
const tools = {
    run: myFunc,
    stop: function() { console.log("Stopping..."); }
};

tools.run(); // Output: I am a function expression
```

## 4. Passing Functions (Callbacks)

This is a superpower of JavaScript. Since a function is just an object, you can pass it as an argument to another function.

```javascript
function greet(callback) {
    console.log("Preparing to greet...");
    callback(); // Executing the passed function object
}

function sayHi() {
    console.log("Hi there!");
}

greet(sayHi);

// Output:
// Preparing to greet...
// Hi there!
```

## Summary
*   Functions are deeply just **objects**.
*   They can have properties (`myFunc.id = 1`).
*   They have built-in methods (`.call()`, `.apply()`, `.bind()`) and properties (`.name`, `.length`).
*   They can be assigned to variables, passed as arguments, and returned from other functions.
