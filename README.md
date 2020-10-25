# Halloween Soundboard
Maak een halloween soundboard. De gebruiker klikt op één van een kaartje (een div), waarna een
angstaanjagend geluidje wordt afgespeeld.
Wanneer de gebruiker nogmaals klikt, wordt het geluid gestopt.

## Stappenplan
### Aanmaken van de objecten
Er zijn reeds variabelen voorzien voor de geluiden:
`var baseSound, loremIpsumSound, horrorKidsSound, bewareSound, cthulhuSound, choirSound;`

Voorzie in de `Initialize` methode voor elke variabele een **object** met **keys** en **values**.
Ons eigen `sound object` houdt twee zaken bij:
|key|value|
|---|-----|
|audio|`new Audio("../pad/naar/audio.wav")`|
|isPlaying|false|

> Opmerking: in onze code gebruiken we dus wederom een object als value.

Stel voor alle geluiden de `isPlaying` property in op false.
De te koppelen geluiden vind je hier:
|variabele|pad naar geluid|
|---|-----|
|baseSound|'../assets/audio/base.wav'|
|loremIpsumSound|'../assets/audio/78537__joedeshon__lorum-ipsum-whispered-edited-02.wav'|
|horrorKidsSound|'../assets/audio/150017__klankbeeld__horror-kids-02.wav'|
|bewareSound|'../assets/audio/167448__carmsie__pb-death-is-coming.wav'|
|cthulhuSound|'../assets/audio/249686__cylon8472__cthulhu-growl.wav'|
|choirSound|'../assets/audio/soundscrate-halloween-spooky-choir.wav'|

### Opvragen van de knoppen (divs)
Op de HTML-pagina vind je reeds een aantal div-elementen. Deze dienen als knop (want we voegen er later een eventListener aan toe).

Ook in de JS-code vind je reeds een aantal variabelen die bedoel zijn voor deze elementen:
`var topLeftPad, topMiddlePad, topRightPad, bottomLeftPad, bottomMiddlePad, bottomRightPad;`

Schrijf passende querySelectors om deze elementen op te vragen.

### Kaartjes/knoppen hun standaard klasse geven
Standaard hebben de div-elementen geen opmaak, maar we wensen dat indien een geluid niet afspeelt het grijs is. Speelt het wel af, dan is het zwart en wiebelt het wat.

De CSS-code die dit verwezenlijkt is reeds voorzien. Je moet ze **enkel** nog gebruiken.

Wanneer een geluid niet afspeelt dan heeft het div-element een class attribuut met `notPlaying`, speelt het wél af dan heeft het een css-klasse met de naam `playing`.

Schrijf een querySelector die **alle** kaartjes opvraagt in het DOM. Geef ze vervolgens **door** aan de functie `InitiateNotPlayingStatus` waarin je alle kaartjes hun class attribuut instelt op `notPlaying`.


### Anonieme functies en arrow functions
De code voor het starten en stoppen van de audio behoort niet tot de leerstof van deze module. De code vind je hieronder. Bekijk echter wel aandachtig hoe de properties `sound.audio` en `sound.isPlaying` verband houden met de objecten die je zonet definieerde. **Deze koppeling houdt wél verband met de cursusinhoud!** 

Kopieer deze functie:

```
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
```

Vervolgens schrijf je in de `Initialise` eventhandlers die het geluid zullen afspelen of stoppen bij een **click**.

Doe dit voor de eerste 3 geluiden met een **anonieme functie** en voor de laatste drie met een **arrow function**.

De `ToggleSound` function verwacht 2 parameters: het af te spelen geluid (dit zijn je eigen gemaakte objecten - niét de `new Audio`'s) en een referentie naar het oproepende element. **Dit is het element waarop geklikt werd zelf!**

## Extra
Zorg ervoor dat de geluidjes ook afgespeeld kunnen worden met de numpads 1 - 6.

