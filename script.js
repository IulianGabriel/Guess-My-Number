'use strict'


let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

// Add event when clicking "Check" button
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

// When there is no input
if (!guess){
    displayMessage('⛔️ No number!');
// When player wins
} else if (guess === secretNumber) {
    displayMessage('You guessed the number!');
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#183C28';
    document.querySelector('.secret-number').style.width = '300px';
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
// When guess is wrong
} else if(guess !== secretNumber){
    if(score > 1){
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        setTimeout( () => {
           document.querySelector('body').style.backgroundColor = '#28282B'
       }, 250)
       document.querySelector('body').style.backgroundColor = '#40070d';
    } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.secret-number').textContent = secretNumber; 
        document.querySelector('body').style.backgroundColor = '#40070d';
        }
    }
})

// Add event when clicking "Again" button - *Reset everything to normal state*
document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.secret-number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#28282B';
    document.querySelector('.secret-number').style.width = '150px';
})