// 4.pyramide
// Exemple d'utilisation d'une boucle for {...} afin d'afficher le motif suivant :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// :
// 1 2 3 4 .. 25

for (let i = 1; i <= 25; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne += j + " ";
    }
    console.log(ligne);
}

