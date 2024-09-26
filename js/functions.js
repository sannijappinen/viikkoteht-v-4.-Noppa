const diceDiv = document.getElementById('dice'); 
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    const diceImage = `./img/${randomNumber}.png`;

    diceDiv.querySelector('img').src = diceImage;
}

diceDiv.addEventListener('click', rollDice);
