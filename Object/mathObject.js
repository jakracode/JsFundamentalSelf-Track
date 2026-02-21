// Random value of Math
    function getRandom(){
        return Math.random();
    }
    console.log(getRandom());
    // It gives the random value between 0-1;

    // Specific random value between 2 values
    function getSpecific(min, max){
        return Math.random() * (max - min) + min;
    }
    console.log(getSpecific(3, 5));
    // It gives the random values between 3-5;

    // Round method
    function getRound(value){
        return Math.round(value);
    }
    console.log(getRound(5.2));
    // Resulted in 5;
