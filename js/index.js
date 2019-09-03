// Variables
busClickCount = 0;

const topImgSelector = document.querySelector('img');
const letsGoHeading = document.querySelector('.text-content h2');


// event listeners

// 1: bus that runs away from mouse 
topImgSelector.addEventListener('mouseenter', () => {
    topImgSelector.style.position = "absolute";
    topImgSelector.style.height = "50px";
    topImgSelector.style.left = String(Math.random() * 1000) + "px";
    topImgSelector.style.top = String(Math.random() * 800) + "px";
    console.log("Too slow!")
});

// 2: bus clicking game
topImgSelector.addEventListener('click', () => {
    busClickCount++;
    alert(`Got me! Score: ${busClickCount}.`)
});


// 3: annoying prompt that won't let you leave
window.onbeforeunload = function() {
    return "Leaving this page will reset the wizard";
};

// 4: alexa, play all star by smash mouth

var audio = document.querySelector("audio");    
var promise = audio.play();
if (promise) {
    //Older browsers may not return a promise, according to the MDN website
    promise.catch(function(error) { console.error(error); });
}   


