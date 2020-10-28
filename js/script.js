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

//genero i 16 numeri random unici da 1 a 100
while (arrayNumeri16.length < array16) {
  var numeroComputer = numeroRangomGen(1, 100);

  if (! arrayNumeri16.includes(numeroComputer)){
    arrayNumeri16.push(numeroComputer);
  }
}

console.log(arrayNumeri16);

//l'untente inserisce un numero alla volta (da 1 a 100) finchè non perder. I numeri inseriti non possono ripetersi


//chi ha vinto?


/****************************FUNZIONI PER L'OUTPUT*******************************/

//FUNZIONE PER GENERARE NUMERI RANDOM
function numeroRangomGen(min, max) {
  var nRG = Math.floor(Math.random()* max) + min;
  return nRG;
};
