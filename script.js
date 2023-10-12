'use strict';
/*
entrainement
document.querySelector('.message').textContent = 'Salut!';
changer le starrt guessing

document.querySelector('.number').textContent = ;
 change "?"

document.querySelector('.guess').value = 15;
afficher la valeur dans le guess

document.querySelector('.check').addEventListener('click', () => {
  console.log('CLICK');
}); affiche dans log le nombre click sur check

document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
});
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1); // chiffre au hasard entre 1 et 20
document.querySelector('.number').textContent = '?'; //modifier si tu veux voir le nombre

let score = 20;
let highscore = 0;

document.querySelector('.highscore').textContent =
  localStorage.getItem('highScore') || 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('✅ Corect number');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.background = '#60b347'; //body element html de base et le style c est pour dire qu on modifie le style
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      localStorage.setItem('highScore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥GAME OVER');
      document.body.style.background = '#A50000';
      document.querySelector('.score').textContent = 0;
    }
  }
  console.log(highscore);
});
//again
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?'; //modifier si tu veux voir le nombre
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
