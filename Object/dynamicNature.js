const circle = {
    raduis: 4
};

circle.value = 6;
circle.draw = function () {
    console.log('Hello');
}

/*
Dynamic objects mean we can create, add, and delete properties of the object
*/

delete circle.value;

console.log(circle);

console.log(circle.draw());
