"use strict"

window.addEventListener("load", initialize);

//sounds
let baseSound, loremIpsumSound, horrorKidsSound, bewareSound, cthulhuSound, choirSound;

//elements
let divTopLeftPad, divTopMiddlePad, divTopRightPad, divBottomLeftPad, divBottomMiddlePad, divBottomRightPad;

function initialize() { 

    //create objects for each sound here

    //get divs that act as buttons here

    //get all cards as an array and pass it onto the InitiateNotPlayingStatus function here

    //add events via anonymous functions/arrow functions here
    

}

function toggleSound(sound, element) {

    //if we're already playing we want to stop the audio ...
    if(sound.isPlaying) {
        
        //... so stop the sound
        sound.audio.loop = false;
        sound.audio.pause();
        sound.audio.currentTime = 0;
    
        //change the playing setting of the object, because that's the one we use
        sound.isPlaying = false;

        //reset style
        element.className = "not-playing";        
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