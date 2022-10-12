'use strict'


let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 100;
let highScore = 0;
const check = document.getElementsByClassName('.check');

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

const disableButton = function(){
    document.querySelector('.check').disabled = true;
    document.querySelector('.check').style.backgroundColor = '#ffd90080';
    document.querySelector('.check').style.pointerEvents = 'none';
};

const enableButton = function(){
    document.querySelector('.check').disabled = false;
    document.querySelector('.check').style.backgroundColor = '#FFD700';
    document.querySelector('.check').style.pointerEvents = 'auto';
};

const missBgColor = function(){
    document.querySelector('body').style.backgroundColor = '#40070d';
}

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
        disableButton();
        if(score > highScore){
            highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
// When guess is wrong
} else if(guess !== secretNumber){
    if(score > 20){
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score = score - 20;
        document.querySelector('.score').textContent = score;
        setTimeout( () => {
            document.querySelector('body').style.backgroundColor = '#28282B'
        }, 250)
        missBgColor();
    } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.secret-number').textContent = secretNumber; 
        missBgColor();
        disableButton();
    }
}  
document.querySelector('.guess').value = '';
})

// Add event when clicking "Again" button - *Reset everything to normal state*
document.querySelector('.again').addEventListener('click', function(){
    score = 100;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.secret-number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#28282B';
    document.querySelector('.secret-number').style.width = '150px';
    enableButton();
    document.querySelector('.guess').value = '';
})