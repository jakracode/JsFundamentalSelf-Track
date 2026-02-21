const numbers = [1,2,3,4,-4,-2];
    let sum = 0;

    for(let i of numbers){
        sum += i;
    }


    // a = 0, c = 1 => a = 1
    // a = 1, c = 2 => a = 3
    // a = 3, c = 3 => a = 6
    // a = 6, c = 4 => a = 10
    // a = 10, c = -4 => a = 6
    // a = 6, c = -2 => a = 4 (Final value)

    /*
    How it works?
    Start from 0
    The variable a = 0, and c = the first value of index 1 in array.
    Then, the variable joined with c and repeat until the end of array.
    */
    let red = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); // Sam value as Sum

    /*
    The different
    - Sum meant the all value of array together.
    - Reduce meant reduce all index of array into one element.
    */
