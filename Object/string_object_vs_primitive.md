# String Primitive vs String Object

In JavaScript, there are two ways to deal with strings: as a primitive value or as an object. Understanding the distinction is important for performance and behavior.

## 1. String Primitive

A string primitive is a simple data type. It's just a sequence of characters.

**Creation:**
You create a string primitive using single quotes `'`, double quotes `"`, or backticks `` ` ``.

```javascript
const message = 'This is my first message';

console.log(typeof message); // Output: 'string'
```

## 2. String Object

A string object is a wrapper around the primitive string. It is created using the `new` keyword with the `String` constructor.

**Creation:**
```javascript
const another = new String('This is my second message');

console.log(typeof another); // Output: 'object'
```

## Key Differences

| Feature | String Primitive | String Object |
| :--- | :--- | :--- |
| **Type** | `'string'` | `'object'` |
| **Performance** | Faster/Lightweight | Slower/Heavier |
| **Usage** | Recommended (standard) | Rarely used |
| **Equality** | `===` compares value | `===` compares reference |

### Example of Equality

```javascript
const s1 = "hello";
const s2 = "hello";
console.log(s1 === s2); // true (same value)

const o1 = new String("hello");
const o2 = new String("hello");
console.log(o1 === o2); // false (different objects in memory)
```

## Internal Wrapper (Auto-Boxing)

You might wonder why primitives have properties like `.length` or methods like `.toUpperCase()` if they aren't objects.

When you access a property on a primitive string, JavaScript **automatically wraps** the primitive in a temporary String object, accesses the property, and then discards the object.

```javascript
const msg = "hello";
console.log(msg.length); // 5 (JS wraps 'msg' in a String object temporarily)
console.log(msg.toUpperCase()); // "HELLO"
```

## Summary

*   **Always use String Primitives** (`const s = "text"`) for storing text.
*   Avoid `new String("text")` unless you specifically need an object wrapper (which is very rare).
