// circle is an object
    const circle = {
        radius: 2,

        // position is an object in an object
        position: {
            x: 1,
            y: 4
        },

        isVisible: true,

        // function in an object
        draw: function(){
            console.log('draw');
        }
    };

    circle.draw();
    circle.radius;
