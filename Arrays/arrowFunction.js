const item = [
        { id : 1, value: 'a'},
        { id : 2, value: 'b'},
        { id : 3, value: 'c'},
    ]

    // item.includes({id: 1, value: 'c'}); // False

    // const findElement = item.find(function(findElement){
    //     return findElement.value === 'b';
    // })

    // Another way to find by function
    const findElement = item.find(findElement => findElement.value === 'b' );
    // Key to understand
    /*
    findElement =>   is the same with     function(findElement)
    */
