// Global Scope
    const public = 'Global'; // Fully access

    {
        // Local Scope
        const message = 'Hello World!';
    }
    console.log(message); // Error

    function start(){
        const newMessage1 = 'Hi';

        if (true) {
            const Another = 'Bye';
        }

        console.log(Another); // Error

        for ( let i = 0; i <= 6; i++){
            console.log(i); // Correct
        }
        console.log(i); // Error
    }

    console.log(newMessage1); // Error
    start(); // Error
