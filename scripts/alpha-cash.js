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
    // console.log(playerPressed, expectedAlphabet); 

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log("you get a point");
        console.log("you have pressed correctly", expectedAlphabet);

        const currentScore = getTextElementValueById("current-score");
        
        const updatedScore = currentScore + 1;
        setTextElementValueById("current-score", updatedScore);


    
    
    
    
    // --------------------------------------
    // update score:
    // 1. get the current score
    //     const currentScoreElement = document.getElementById("current-score");
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     console.log(currentScore);
        

    // // 2. increase the score by 1
    //     const newScore = currentScore + 1;

    // // 3. show the updated score
    //     currentScoreElement.innerText = newScore;                                                                         

        // start a new round 

        removeBackgroundColorById(expectedAlphabet);
        continueGame(); 
    }

    else{
        console.log("you missed. you lost a life");

        const currentLife = getTextElementValueById("current-life");
        const updatedLife = currentLife - 1;
        setTextElementValueById("current-life", updatedLife);






        // -----------------------------
        // step - 1: get the current Life number
        // const currentLifeElement = document.getElementById("current-life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        
        // // step - 2: reduce the life count
        // const newLife = currentLife - 1;

        // // step - 3: display the updated  life count
        // currentLifeElement.innerText = newLife;

    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log("your random alphabet",alphabet);

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

