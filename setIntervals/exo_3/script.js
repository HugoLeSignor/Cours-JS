//! Énoncé : Affiche un message qui clignote toutes les 500 millisecondes.
// 1. Dans ton HTML, ajoute un élément <div id="blink"></div> pour le message.
// 2. Utilise setInterval pour afficher et masquer le message "Clignotant..." toutes les
// 500 millisecondes.

const blinkDiv = document.getElementById('blink');
let isVisible = true;

setInterval(() => {
    if (isVisible) {
        blinkDiv.textContent = '';
    } else {
        blinkDiv.textContent = 'Clignotant...';
    }
    isVisible = !isVisible;
}, 500);

