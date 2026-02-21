// Rest key ...
    // It takes all the value form parameter as an Array
    function sum(...value){
        return value.reduce((a,b) => a+b);
        console.log(value);
    }

    sum(3,5,4,7,4,8,9); // Return as Array
    console.log(sum(3,5,4,7,4,8,9)); // Return 40
