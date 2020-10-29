/*BONUS
Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50*/

//dichiaro le variabili
var arrayNumeri16 = []; //lista delle bombe
var array16 = 16; //numeri random unici che il computer deve generare
var numeriUser = []; //numeri che l'utente ha scelto
var arrayNumeriUser = []; //lista numeri che l'utente ha scelto
var punteggio = arrayNumeriUser.length; //tentativi che l'utente ha effettuato
  //variabili per le difficoltà
  var difficoltascelta = false;
  var difficolta;
  //var tentativiminimi;
  //var tentativimassimi;
  //var tentativitotali;



//gradi di difficoltà
while (difficoltascelta == false) {
  difficolta = sceltaDifficolta();
  if (difficolta == "0"){
    difficoltascelta = true;
  } else if (difficolta == "1") {
    difficoltascelta = true;
  } else if (difficolta == "2") {
    difficoltascelta = true;
  } else {
    difficoltascelta=false;
  }
}

//genero i 16 numeri random unici 1-100 difficoltà 0, 1-80 difficoltà 1 e 1-50 difficoltà 2
for (var i = 0; i < 16; i++) {
  switch (difficolta) {
    case "0":
      var numeroComputer = numeroRangomGen(1, 100);
      //unicità dei numeri
      if (! arrayNumeri16.includes(numeroComputer)){
        arrayNumeri16.push(numeroComputer);
      } else {
        i--;
      };
      break;
    case "1":
      var numeroComputer = numeroRangomGen(1, 80);
      //unicità dei numeri
      if (! arrayNumeri16.includes(numeroComputer)){
        arrayNumeri16.push(numeroComputer);
      } else {
        i--;
      };
      break;
    case "2":
      var numeroComputer = numeroRangomGen(1, 50);
      //unicità dei numeri
      if (! arrayNumeri16.includes(numeroComputer)){
        arrayNumeri16.push(numeroComputer);
      } else {
        i--;
      };
      break;
    default:
      difficolta = false;
  }
}

console.log(arrayNumeri16);

//l'utente inserisce un numero alla volta (1-100 se sceglie 0, 1-80 se sceglie 1 e 1-50 se sceglie 2)
//l'utente vince se riesce a trovare tutti i numeri dove non vi sono le bombe
if (difficolta == "0") {
  for (var i = 0; arrayNumeriUser.length < 84; i++) {
    numeriUser = parseInt(prompt("Inserisci un numero"));
    if (arrayNumeriUser.includes(numeriUser) || (numeriUser < 1) || (numeriUser > 100)) {
      alert("Attenzione! Scrivi un numero corretto");
    } else if (arrayNumeri16.includes(numeriUser)){
      console.log("Hai preso una bomba, hai perso!");
      alert("Hai preso una bomba, hai perso!");
      //mostra all'utente i tentativi che ha effettuato, quindi il punteggio
      console.log("Hai ottenuto: ", punteggio, "punti");
      alert("Hai ottenuto: " + punteggio + "punti");
      break;
    } else {
      arrayNumeriUser.push(numeriUser);
      punteggio += 1;
    }
  }

} else if (difficolta == "1") {
  for (var i = 0; arrayNumeriUser.length < 64; i++) {
    numeriUser = parseInt(prompt("Inserisci un numero"));
    if (arrayNumeriUser.includes(numeriUser) || (numeriUser < 1) || (numeriUser > 80)) {
      alert("Attenzione! Scrivi un numero corretto");
    } else if (arrayNumeri16.includes(numeriUser)){
      console.log("Hai preso una bomba, hai perso!");
      alert("Hai preso una bomba, hai perso!");
      //mostra all'utente i tentativi che ha effettuato, quindi il punteggio
      console.log("Hai ottenuto: ", punteggio, "punti");
      alert("Hai ottenuto: " + punteggio + "punti");
      break;
    } else {
      arrayNumeriUser.push(numeriUser);
      punteggio += 1;
    }
  }

} else if (difficolta == "2") {
  for (var i = 0; arrayNumeriUser.length < 34; i++) {
    numeriUser = parseInt(prompt("Inserisci un numero"));
    if (arrayNumeriUser.includes(numeriUser) || (numeriUser < 1) || (numeriUser > 50)) {
      alert("Attenzione! Scrivi un numero corretto");
    } else if (arrayNumeri16.includes(numeriUser)){
      console.log("Hai preso una bomba, hai perso!");
      alert("Hai preso una bomba, hai perso!");
      //mostra all'utente i tentativi che ha effettuato, quindi il punteggio
      console.log("Hai ottenuto: ", punteggio, "punti");
      alert("Hai ottenuto: " + punteggio + "punti");
      break;
    } else {
      arrayNumeriUser.push(numeriUser);
      punteggio += 1;
    }
  }

} else {
  difficolta = sceltaDifficolta();
}

console.log("I numeri che l'utente ha inserito sono: ", arrayNumeriUser);

/*******************FUNZIONI PER L'OUTPUT*******************************/

//FUNZIONE PER GENERARE NUMERI RANDOM
function numeroRangomGen(min, max) {
  var nRG = Math.floor(Math.random()* max) + min;
  return nRG;
};

//FUNZIONE SCELTA DIFFICOLTÀ
function sceltaDifficolta(difficulty){
  return difficulty = prompt("Scegli la difficoltà con cui vuoi giocare: \n0\n1\n2").trim();
}
