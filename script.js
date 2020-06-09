var scores, roundscores, activePlayer, dice, roundscore, gameplay, target;

target = 100;

function initialize() {
scores = [0,0];
activePlayer = 0;
roundscore = 0;
gameplay = true;

document.querySelector('.total-score-0').textContent = 0;
document.querySelector('.total-score-1').textContent = 0;
document.querySelector('.current-score-0').textContent = 0;
document.querySelector('.current-score-1').textContent = 0;
document.querySelector('.name-0').textContent = 'Player 1';
document.querySelector('.name-1').textContent = 'Player 2';
document.querySelector('.player-1').classList.remove('active');
document.querySelector('.player-0').classList.add('active');
}

initialize();

document.querySelector('.dice-image').style.display = 'none';

function swapPlayer() {
  document.querySelector('.current-score-' + activePlayer).textContent = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundscore = 0;
  // document.querySelector('player-'+activePlayer).classList.toggle('active');
  document.querySelector('.player-0').classList.toggle('active');
  document.querySelector('.player-1').classList.toggle('active');
}

function winner() {
  document.querySelector('.dice-image').style.display = 'none';
  document.querySelector('.name-' + activePlayer).textContent = 'WINNER!';
  gameplay = false;
}


document.querySelector('.roll-dice').addEventListener('click', function(){
  if (gameplay){
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice-image').style.display = 'block';
  document.querySelector('.dice-image').src = "dice-" + dice + ".png";

  roundscore += dice;
  document.querySelector('.current-score-' + activePlayer).textContent = roundscore;

  if (dice === 1){
    swapPlayer();
  }
}
})

document.querySelector('.hold').addEventListener('click', function(){
  scores[activePlayer] += roundscore;
  document.querySelector('.total-score-' + activePlayer).textContent = scores[activePlayer];
  if (document.querySelector('.total-score-' + activePlayer).textContent >= target){
    winner();
  }
  else{
    swapPlayer();
  }
})

document.querySelector('.new-game').addEventListener('click', function(){
  initialize();
})
