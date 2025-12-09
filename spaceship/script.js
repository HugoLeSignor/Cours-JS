const spaceship = document.getElementById('spaceship');
const html = document.documentElement;

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let bgX = 0;
let bgY = 0;
const speed = 20;

function updatePosition() {
    spaceship.style.left = x + 'px';
    spaceship.style.top = y + 'px';
    spaceship.style.transform = 'translate(-50%, -50%)';
    html.style.backgroundPosition = `${bgX}px ${bgY}px`;
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
            y -= speed;
            bgY += speed * 0.5;
            break;
        case 's':
            y += speed;
            bgY -= speed * 0.5;
            break;
        case 'a':
            x -= speed;
            bgX += speed * 0.5;
            break;
        case 'd':
            x += speed;
            bgX -= speed * 0.5;
            break;
    }

    x = Math.max(0, Math.min(window.innerWidth, x));
    y = Math.max(0, Math.min(window.innerHeight, y));

    updatePosition();
});

updatePosition();
