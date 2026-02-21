function createCircle(radius) {
        return {
            radius, // same as radius: radius,
            /*
            in function, if a parameter and the value are the same we can just write: 
            parameter,
            */
            draw() {
                console.log('hello');
            }
        };
    }

    const circle = createCircle(2);
    console.log(circle);
    const draw = createCircle().draw();
    console.log(draw);
