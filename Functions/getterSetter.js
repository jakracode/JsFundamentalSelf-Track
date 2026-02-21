// const person = {
    //     firstName: 'Som',
    //     lastName: 'bath',
    //     fullName(){
    //         return `${person.firstName}${person.lastName}`;
    //     }
    // }

    // console.log(person.fullName());
    // The problem is we can not make change on fullName by editing on it
    // So, we use getter and setter


    // Getter => Access properties
    // Setter => Change

    const newPerson = {
        firstName: 'Som',
        lastName: 'bath',
        get fullName(){ // After we ues get, fullName is no longer function anymore
            return `${newPerson.firstName} ${newPerson.lastName}`;
        },
        set fullName(value){
            const part = value.split(' '); // Split by space
            this.firstName = part[0];
            this.lastName = part[1];
        }
    }

    newPerson.fullName = 'Chan Dara';
    // So the first name is Chan & last name is Dara
    console.log(newPerson.fullName);
