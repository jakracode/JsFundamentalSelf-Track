# ONE LINE Cloning (JSON Hack)

## What is it?
The "JSON Hack" or "JSON serialization" method is a quick way to deep clone an object by converting it to a JSON string and then parsing it back into a new object.

```javascript
const original = {
    name: 'Alice',
    details: {
        age: 25
    }
};

const clone = JSON.parse(JSON.stringify(original));
```

## Pros
- **Simple:** No libraries needed.
- **Deep Copy:** It breaks references for nested objects.
- **Fast:** Surprisingly fast for simple data objects.

## Cons (The Gotchas)
This method is not perfect and has significant data loss issues:

1.  **Dates become Strings:** `Date` objects are converted to their string representation. They do not come back as `Date` objects.
2.  **Undefined is lost:** Properties with the value `undefined` are completely removed.
3.  **Functions are lost:** Functions are not valid JSON, so they are removed.
4.  **Symbols are lost:** Symbol keys are ignored.
5.  **Circular References:** If an object references itself, this method throws an Error.

### Example of Data Loss
```javascript
const original = {
    name: 'Alice',
    date: new Date(),         // Becomes a string
    sayHi: function() {},     // REMOVED
    something: undefined      // REMOVED
};

const clone = JSON.parse(JSON.stringify(original));

console.log(clone.date);      // String, not Date object
console.log(clone.sayHi);     // undefined
console.log(clone.something); // undefined
```
