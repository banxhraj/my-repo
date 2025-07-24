

const playerPanels = document.querySelectorAll('.pannel');
const scores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn.roll');
const btnHold = document.querySelector('.btn.hold');
const btnRestart = document.querySelector('.btn.restart');


let scoresArr, currentScore, activePlayer, playing;

// Initialize game
function start() {
    scoresArr = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scores[0].textContent = 0;
    scores[1].textContent = 0;
    currentScores[0].textContent = 0;
    currentScores[1].textContent = 0;

    diceImg.src = 'dice-6.png'; 
    diceImg.style.visibility = 'visible';
    playerPanels[0].classList.add('active');
    playerPanels[1].classList.remove('active');
    playerPanels[0].classList.remove('winner');
    playerPanels[1].classList.remove('winner');
}
start();

// for Switching player
function switchPlayer() {
    currentScores[activePlayer].textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerPanels[0].classList.toggle('active');
    playerPanels[1].classList.toggle('active');
}

// Roll Dice
btnRoll.addEventListener('click', function () {
    if (!playing) return;

    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`; 
    diceImg.style.visibility = 'visible';

    if (dice !== 1) {
        currentScore += dice;
        currentScores[activePlayer].textContent = currentScore;
    } else {
        switchPlayer();
    }
});

// Hold
btnHold.addEventListener('click', function () {
    if (!playing) return;

    scoresArr[activePlayer] += currentScore;
    scores[activePlayer].textContent = scoresArr[activePlayer];

    if (scoresArr[activePlayer] >= 100) {
        playing = false;
        playerPanels[activePlayer].classList.add('winner');
        diceImg.style.visibility = 'visible';
        
    } else {
        switchPlayer();
    }
});

// Restart
btnRestart.addEventListener('click', start);

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn.close-modal');
const btnHelp = document.querySelector(".help")
function showModal() {
    modal.classList.remove("hidden");
    
}

function closeModal() {
    modal.classList.add("hidden");
}

btnHelp.addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
