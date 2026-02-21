person = {
        name: 'Sombath',
        age: 20,
        address: 'Phnom Penh'
    };

    for (let key in person){
        console.log(person[key]);
        // Result in : Sombath, 20, Phnom Penh

        console.log(key, person[key]);
        /*
        Result in:
        name Sombath
        age 20
        address Phnom Penh
        */

        console.log(person['name']); 
        // Result in : Sombath for three times (because it loop three times)
    }
