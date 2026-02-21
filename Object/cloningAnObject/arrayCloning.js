let object = {
        name: 'Bath',
        age: 43,
        address: 'Phnom Penh'
    };

    // Create new object
    let newObject = {};

    for(let key in object)
    // Clone value to new object
        newObject[key] = object[key];

    console.log(newObject);
