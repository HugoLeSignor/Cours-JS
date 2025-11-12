// 9.Condition heure
// Demandez l'heure a l'utilisateur et faire un programme qui lui dira en fonction de l'heure donnée
// si c'est le matin l'après midi ou le soir.

let heure = 14; // L'utilisateur peut changer cette valeur (0-23)

if (heure >= 0 && heure < 12) {
    console.log("C'est le matin");
} else if (heure >= 12 && heure < 18) {
    console.log("C'est l'après-midi");
} else if (heure >= 18 && heure < 24) {
    console.log("C'est le soir");
} else {
    console.log("Heure invalide");
}
