const colorLink = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const shapeLink = document.getElementById('shapeSelector');
const shapeBox = document.getElementById('shapeBox');
const movingLink = document.getElementById('movingSelector');
const movingBox = document.getElementById('movingBox');

colorLink.addEventListener('click', () => {
    if (colorBox.style.backgroundColor === 'red') {
        colorBox.style.backgroundColor = '#cccccc';
    } else {
        colorBox.style.backgroundColor = 'red';
    }
});

shapeLink.addEventListener('mouseenter', () => {
    shapeBox.style.width = '50px';
    shapeBox.style.height = '50px';
});

shapeLink.addEventListener('mouseleave', () => {
    shapeBox.style.width = '100px';
    shapeBox.style.height = '100px';
});

movingLink.addEventListener('mouseleave', () => {
    movingBox.style.left = '100px';
});
