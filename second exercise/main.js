/* Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.*/

// variables and data structure
const dice = [1, 2, 3, 4, 5, 6];

// random number generators
const userIndex = Math.floor(Math.random() * dice.length);
const pcIndex = Math.floor(Math.random() * dice.length);
const userNumber = dice[userIndex];
const pcNumber = dice[pcIndex];

console.log(userNumber, pcNumber);

// print result
if (userNumber > pcNumber){
    alert(`HAI VINTO! il tuo numero e ${userNumber} e quello del tuo avversatio ${pcNumber}`)
} else if (pcNumber > userNumber) {
    alert(`HAI PERSO :( il tuo numero e ${userNumber} e quello del tuo avversario e ${pcNumber}`)
} else {
    alert(`ABBIAMO UN PAREGGIO! i vostri numeri sono entrambi ${userNumber}`)
}

location.reload();