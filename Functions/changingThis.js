// const newVideo = {
//     title: 'KHV',
//     tags: ['a', 'b', 'c'],
//     shows() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag);
//         }, this)      
//         console.log(this);
//     }
// }

// Another way
// const newVideo = {
//     title: 'KHV',
//     tags: ['a', 'b', 'c'],
//     shows() {
//         // Declare another variable before declare forEach
//         const self = this;

//         this.tags.forEach(function (tag) {
//             console.log(self.title, tag);
//         })      
//         console.log(this);
//     }
// }

// newVideo.shows();


// One more
function playVideo() {
    console.log(this); // Return window
}

// Use apply, bind, and call method to make change
playVideo.call({ name: 'Bath' }); // It create a new object in the function, so this will return object
playVideo.apply({ name: 'Bath' }); // Same result

playVideo.bind({ name: 'Bath' }); // It return as a new function, none return in the console
const fn = playVideo.bind({ name: 'Bath' });
fn(); // Return same value as apply

playVideo.bind({ name: 'Bath' })(); // Another way


// The different
// If the function has two or more parameter, call method return value as normal but apply method return value as array
function newPlay(a, b) {
    console.log(this);
}

newPlay.call({ id: 4 }, 6, 8);
newPlay.apply({ id: 4 }, [6, 8]); // Same result
