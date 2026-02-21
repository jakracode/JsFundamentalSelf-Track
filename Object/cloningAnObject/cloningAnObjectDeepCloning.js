const original = {
        name: 'Bath',
        age: '24',
        address: { // Nested Object
            city: 'Phnom Penh',
            zip: 545343,
            favorite: ['Blue', 'Red', 'Green'], // Nested Array
        }
    };

    // Clone Structure
    const clonedObject = structuredClone(original);
    
    // Push the value
    clonedObject.address.favorite.push('Black');

    console.log(original.address.favorite); // Result in three value
    console.log(clonedObject.address.favorite); // Result in four value
    // This is meant that the two object is completely disconnected, and clonedObject is a
    // new object that cloned from the original
