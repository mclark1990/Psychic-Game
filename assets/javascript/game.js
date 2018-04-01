// guess options for computer
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// variables for user

var wins = 0
    losses = 0
    guessesNum = 9
    totalGuesses = [];
               
        

//function runs when user presses a key

document.onkeyup = function(event){

// determines what key user pushed
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



// Randomly chooses a letter from computer choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//var for user key input
var UserChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// if statements
if (UserChoices.indexOf(userGuess) > -1){

    if (userGuess === computerGuess){
    wins++;
    guessesNum = 9;
    totalGuesses = [];
}

if (userGuess != computerGuess){
   guessesNum--;
   totalGuesses.push(" " + userGuess); 
}

if (guessesNum === 0){
    losses++;
    totalGuesses = [];
    guessesNum = 9;
}

//adds text to the #game div to reflect wins,losses,etc.
var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesNum + "</p>"+
        "<p> Your Guesses So Far: " + totalGuesses + "</p>";

document.querySelector("#game").innerHTML = html;
}
};
        



