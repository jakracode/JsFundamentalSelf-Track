// This key word references the object that is executing the current function.

// Method => Object
const video = {
    title: 'KHV',
    play() {
        console.log(this); // Return the whole object
    }
}

video.stop = function () {
    console.log(this);
}

video.stop();
// video.play();

// Window Object
function playVideo() {
    console.log(this);
}

playVideo(); // Return window object


function Video(title) {
    this.title = title;
    console.log(this); // Return title
}

Video('a'); // Return window object

// Use new operator to create an empty object
const v = new Video('a'); // Return title: 'a'


const newVideo = {
    title: 'KHV',
    tags: ['a', 'b', 'c'],
    shows() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); // We want to return title before tags, this not gonna work because this in the console is in the function tag
            // It can't assess to the title that out of the function
        }, this)
        // The solution is return this after the function(tag) to access title        
        console.log(this); // Return the whole object
    }
}

newVideo.shows(); // Return each value of tags
