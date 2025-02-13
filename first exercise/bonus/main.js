/*Mail:
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.*/

// variables and data structures
const emailList = ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com', 'user4@hotmail.it', 'user5@yandex.com'];
let flag = false;
// user input
const userEmail = prompt('Type your email adress here');

// list check and result print

if (emailList.includes(userEmail)){
    alert('your email is present inside the list');
} else {
    alert('your email is not present inside the list');
}

location.reload();
