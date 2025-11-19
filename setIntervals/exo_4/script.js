//! Énoncé : Affiche une horloge en temps réel qui met à jour l'heure chaque seconde.
// 1. Dans ton HTML, ajoute un élément <div id="clock"></div>.
// 2. Utilise setInterval pour afficher l'heure actuelle (heures:minutes:secondes
// ) dans ce <div> et mettre à jour chaque seconde.

const clockDiv = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    
    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

