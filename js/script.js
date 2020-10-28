/*Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100,
con difficoltà 1 =>  tra 1 e 80,
con difficoltà 2 => tra 1 e 50*/

//dichiaro le variabili
var arrayNumeri16 = []; //lista delle bombe
var array16 = 16; //numeri random unici che il computer deve generare
var numeriUser = []; //numeri che l'utente ha scelto
var arrayNumeriUser = []; //lista numeri che l'utente ha scelto
var punteggio = arrayNumeriUser.length; //tentativi che l'utente ha effettuato

//genero i 16 numeri random unici da 1 a 100
while (arrayNumeri16.length < array16) {
  var numeroComputer = numeroRangomGen(1, 100);

  if (! arrayNumeri16.includes(numeroComputer)){
    arrayNumeri16.push(numeroComputer);
  }
}

console.log(arrayNumeri16);

//l'untente inserisce un numero alla volta (da 1 a 100) finchè non perde. I numeri inseriti non possono ripetersi
//84 sono i numeri non ancora scelti, in questo caso l'utente indovina gli 84 numeri vince la partita
for (var i = 0; arrayNumeriUser.length < 84; i++) {
  numeriUser = parseInt(prompt("Inserisci un numero"));
  //il numero inserito non può ripetersi, non può essere minore di 1 o maggiore di 100
  while (arrayNumeriUser.includes(numeriUser) || (numeriUser < 1) || (numeriUser > 100)) {
    alert("Attenzione! Scrivi un numero corretto");
    numeriUser = parseInt(prompt("Inserisci un numero"));
  }
  arrayNumeriUser.push(numeriUser);

  console.log("I numeri che l'utente ha inserito sono: ", arrayNumeriUser);
    //chi ha vinto?
  if (arrayNumeri16.includes(numeriUser)) {
    console.log("Hai preso una bomba, hai perso!");
    alert("Hai preso una bomba, hai perso!");
    //mostra all'utente i tentativi che ha effettuato
    console.log("Hai ottenuto: ", punteggio, "punti");
    break;
  } else if (! arrayNumeri16.includes(numeroComputer)) {
    numeriUser = parseInt(prompt("Inserisci un numero"));
  }
}

//mostare il punteggio


/*******************FUNZIONI PER L'OUTPUT*******************************/

//FUNZIONE PER GENERARE NUMERI RANDOM
function numeroRangomGen(min, max) {
  var nRG = Math.floor(Math.random()* max) + min;
  return nRG;
};
