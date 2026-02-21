const item = [
        { id : 1, value: 'a'},
        { id : 2, value: 'b'},
        { id : 3, value: 'c'},
    ]

    item.includes({id: 1, value: 'c'}); // False

    const findElement = item.find(function(findElement){
        return findElement.value === 'b';
    })

    console.log(findElement); // Found in the id: 2
    // If there has no any matched value, it will return undefined
