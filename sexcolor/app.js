/* Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito; */


var nameLabel = document.getElementById("the-name");

var userName = prompt("inserisci il tuo nome");
nameLabel.innerHTML = userName;
var userGender = prompt("Inserire genere").toLowerCase();

if (userGender === "maschio"){
  nameLabel.style.color = "blue";
} else if (userGender === "femmina"){
  nameLabel.style.color = "pink";
} else {
  nameLabel.style.color = "purple";
}