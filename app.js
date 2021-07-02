// import functions and grab DOM elements
import didUserWin from './utils.js';

const playButton = document.getElementById('play');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');
const drawsSpan = document.getElementById('total-draws');
const resetButton = document.getElementById('reset');
const resetSpan = document.getElementById('total-resets');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let reset = 0;

// set event listeners 
playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userThrow = selected.value;

    let computerThrow = 'rock';
    let randomNum = Math.ceil(Math.random() * 3);

    if (randomNum === 1) {
        computerThrow = 'rock';
    } else if (randomNum === 2) {
        computerThrow = 'paper';
    } else {
        computerThrow = 'scissors';
    }
    //console.log(userThrow);
    //console.log(computerThrow);

    const isWinner = didUserWin(userThrow, computerThrow);

    if (isWinner === 'win'){
        wins++; 
    } else if (isWinner === 'loss'){
        losses++;
    } else {
        draws++;
    }

    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
    resetSpan.textContent = reset;

});

resetButton.addEventListener('click', ()=>{
    const unselect = document.querySelector('input:checked');
    unselect.checked = false;
    wins = 0;
    losses = 0;
    draws = 0;
    reset++;


    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
    resetSpan.textContent = reset;

    //console.log(reset);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
