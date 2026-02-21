let user = {
        name: 'Bath',
        age: 34,
        details: {
            city: 'Phnom Penh',
            zip: '127533'
        }
    };

    user = null;

    console.log(user);

    // The user is no longer accessible, so it will be garbage collected.
