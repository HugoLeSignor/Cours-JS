const spaceship = document.getElementById('spaceship');

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
const speed = 20;

function updatePosition() {
    spaceship.style.left = x + 'px';
    spaceship.style.top = y + 'px';
    spaceship.style.transform = 'translate(-50%, -50%)';
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
            y -= speed;
            break;
        case 's':
            y += speed;
            break;
        case 'a':
            x -= speed;
            break;
        case 'd':
            x += speed;
            break;
    }

    x = Math.max(0, Math.min(window.innerWidth, x));
    y = Math.max(0, Math.min(window.innerHeight, y));

    updatePosition();
});

updatePosition();
