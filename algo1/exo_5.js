// 5.Somme multiple
// Écrire l'algorithme qui calcule la somme des 30 premiers entiers (privés de
// l'entier 0), c'est-à-dire 1+2+3+4+...+28+29+30.

let somme = 0;

for (let i = 1; i <= 30; i++) {
    somme += i;
}

console.log(somme);

