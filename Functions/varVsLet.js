function StartLet(){
        for (let i = 0; i <= 7; i++)
            console.log(i);
        console.log(i); // Error: out of scope
    }

    StartLet();

    function StartVar(){
        for (var i = 0; i <= 7; i++)
            console.log(i);
        console.log(i); // Didn't catch error, return blank
    }

    StartVar();

    function LetCondition(){
        for (let i = 0; i <= 7; i++){
            if (true){
                let Color = 'red';
            }
        }
        console.log(Color); // Color is not accessible here
    }
    
    LetCondition(); // Error

    function VarCondition(){
        for (let i = 0; i <= 7; i++){
            if (true){
                var Color = 'red';
            }
        }
        console.log(Color);
    }
    
    VarCondition(); // Return red

    // Another one with Window
    let age = 43;
    // If we console it as window.age, it will return 43
    var name = 'John';
    // If we console it as window.name, it will return undefined
