// interest = (principle, rate, year) => {
    //     rate = rate || 3.5;
    //     year = year || 5;
    //     // This meant 3.5 is a default value, but we can change it on the console.
        
    //     return principle * rate / 100 * year;
    // }

    // console.log(interest(1000, 2.4, 4));

    // Another way
    interest = (principle, rate = 3.5, year = 3.5) => {
        // Default value of rate is 3.5
        year = year || 5;
        
        return principle * rate / 100 * year;
    }

    console.log(interest(1000, undefined, 4));
    // If we already had a default value in the middle, we have to use undefined
