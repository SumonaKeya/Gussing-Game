let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector('.resultText');
const lostWonMessage = document.createElement('p');
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener('submit', function (event) {
event.preventDefault();
//console.log('Form Submitted');
//console.log(guessingNumber.value);
attempts++;

if(attempts==5){
    guessingNumber.disabled = true;
    checkButton.disabled = true;
}
if(attempts<6){
    let guessedNumber = Number(guessingNumber.value);
    checkResult(guessingNumber);
    remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
}
guessingNumber.value = '';
});

function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);
  if(guessingNumber == randomNumber) {
    resultText.textContent = 'Congratulations! You have guessed the correct number';
    totalWon++;
} else {
    resultText.textContent = `Sorry! The correct number was ${randomNumber}`;
  totalLost++;
}
lostWonMessage.innerHTML = `Total Won: ${totalWon}. Total Lost: ${totalLost}`;
lostWonMessage.classList.add('large-text');
cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
return Math.floor(Math.random() * limit) + 1;
}

