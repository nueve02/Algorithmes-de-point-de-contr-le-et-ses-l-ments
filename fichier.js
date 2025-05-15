const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let longueur = 0;
let nb_mots = 1;
let nb_voyelles = 0;
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

console.log("Entrez une phrase caractère par caractère (terminez par un point '.')");

function lireCaractere() {
  rl.question("Entrer un caractère : ", (caractere) => {
    if (caractere === '.') {
      longueur += 1; // on compte aussi le point final
      console.log("\nRésultats :");
      console.log("Longueur de la phrase :", longueur);
      console.log("Nombre de mots :", nb_mots);
      console.log("Nombre de voyelles :", nb_voyelles);
      rl.close();
      return;
    }

    longueur += 1;

    if (voyelles.includes(caractere.toLowerCase())) {
      nb_voyelles += 1;
    }

    if (caractere === ' ') {
      nb_mots += 1;
    }

    lireCaractere(); // appel récursif pour lire le caractère suivant
  });
}

lireCaractere();
