// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
    
//     // show the playground
//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
//     // console.log(playgroundSection.classList);
// }



function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log("Player Pressed", playerPressed);

    // get the expected to press

    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet); 

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log("you get a point");
    }

    else{
        console.log("you missed. you lost a life");
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log("your random alphabet",alphabet);

    // set randomly generated alphabet to the screeb(show it)
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackGroundColorById(alphabet);
}

function play(){
   hideElementById("home-screen"); 
   showElementById("play-ground");
   continueGame();

}

