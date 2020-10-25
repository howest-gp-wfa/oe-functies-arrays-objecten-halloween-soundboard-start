"use strict"

window.addEventListener("load", Initialise);

//sounds
var baseSound, loremIpsumSound, horrorKidsSound, bewareSound, cthulhuSound, choirSound;

//elements
var topLeftPad, topMiddlePad, topRightPad, bottomLeftPad, bottomMiddlePad, bottomRightPad;

function Initialise() { 

    //create objects for each sound here

    //get divs that act as buttons here

    //get all cards as an array and pass it onto the InitiateNotPlayingStatus function here

    //add events via anonymous functions/arrow functions here
    

}

function ToggleSound(sound, element) {

    //if we're already playing we want to stop the audio ...
    if(sound.isPlaying) {
        
        //... so stop the sound
        sound.audio.loop = false;
        sound.audio.pause();
        sound.audio.currentTime = 0;
    
        //change the playing setting of the object, because that's the one we use
        sound.isPlaying = false;

        //reset style
        element.className = "notPlaying";        
    }

    //else it is not playing, so start playing
    //and highlight the button
    else {
        sound.audio.loop = true;
        sound.audio.play();
        element.className = "playing";

        sound.isPlaying = true;
    }
}