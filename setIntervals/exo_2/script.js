//! Énoncé : Crée un compte à rebours avant le début d'une activité
// 1. Dans ton HTML, ajoute un élément <div id="countdown"></div>.
// 2. Utilise setInterval pour afficher un compte à rebours de 5 secondes dans ce <div>.
// 3. Affiche chaque seconde le nombre de secondes restantes.
// 4. Quand le compte à rebours atteint 0, affiche "Go !" et arrête le compte à rebours

let secondes = 5;
const countdownDiv = document.getElementById('countdown');

countdownDiv.textContent = secondes;

const interval = setInterval(() => {
    secondes--;
    countdownDiv.textContent = secondes;
    
    if (secondes === 0) {
        countdownDiv.textContent = 'Go !';
        clearInterval(interval);
    }
}, 1000);