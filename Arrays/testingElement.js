const numbers = [1,2,3,4,5,-6];

    const allPositive = numbers.every(value => {
        return value >= 0; // Returned False
    })

    const somePositive = numbers.some(value => {
        return value >= 0; // Returned true
    })
