const newPerson = {
        firstName: 'Som',
        lastName: 'bath',
        get fullName(){
            return `${newPerson.firstName} ${newPerson.lastName}`;
        },
        set fullName(value){
            if(typeof value !== 'string')
                throw new Error('Value is not String type!'); // Throw Error to try catch

            const part = value.split(' ');
            if (part.length !== 2)
                throw new Error('Something is missing!')

            this.firstName = part[0];
            this.lastName = part[1];
        }
    }

    try{
        // newPerson.fullName = null; // Return Value is not String Type
        newPerson.fullName = ''; // Return Something is missing 
    }
    catch (e){
        alert(e);
        // It catch error and return default value
    }

    console.log(newPerson.fullName);
