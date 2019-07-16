/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati; */

//variabile globale per conservare i numeri casuali


//genero i numeri casuali
function generateNums() {
  var numsArray = [];
  var rand;

  for (var i = 0; i < 5; i++) {
    rand = Math.floor(Math.random() * 30 + 1);
    numsArray.push(rand);

  }
  
  return numsArray;
}

//confronto i tentativi con i numeri casuali
function compare(arr1, arr2) {
  var indovinati = 0;
  var indovinatiArray = [];

  for (var i = 0; i < arr1.length; i++) {

    for (var j = 0; j < arr2.length; j++) {

      if (arr1[i] == arr2[j]) {
        indovinati += 1;
        indovinatiArray.push(arr1[i]);
      }

    }

  }

  return ("Numeri indovinati: " + indovinati +": " + indovinatiArray.toString());
}


var theNums = generateNums();
console.log(theNums);
alert(theNums.toString() + "\n clicca ok e poi attendi 30 secondi...");
var theGuesses = [];


setTimeout(function () {

  // mostro il prompt 5 volte
  for (var i = 0; i < 5; i++) {
    var guess = prompt("inserisci il cifra numero " + (i + 1));

    theGuesses.push(guess);
    console.log(theGuesses);

  }

  console.log(compare(theNums,theGuesses));

}, 2000);

