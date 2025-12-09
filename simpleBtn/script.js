const colorLink = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const shapeLink = document.getElementById('shapeSelector');
const shapeBox = document.getElementById('shapeBox');
const movingLink = document.getElementById('movingSelector');
const movingBox = document.getElementById('movingBox');

// Ajouter un événement click sur le lien avec toggle
colorLink.addEventListener('click', () => {
    if (colorBox.style.backgroundColor === 'red') {
        colorBox.style.backgroundColor = '#cccccc';
    } else {
        colorBox.style.backgroundColor = 'red';
    }
});

// Réduire la taille de shapeBox au survol du lien
shapeLink.addEventListener('mouseenter', () => {
    shapeBox.style.width = '50px';
    shapeBox.style.height = '50px';
});

// Remettre la taille normale quand on quitte le survol
shapeLink.addEventListener('mouseleave', () => {
    shapeBox.style.width = '100px';
    shapeBox.style.height = '100px';
});

// Déplacer movingBox vers la droite quand on quitte le survol du lien
movingLink.addEventListener('mouseleave', () => {
    movingBox.style.left = '100px';
});
