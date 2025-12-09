const spaceship = document.getElementById('spaceship');
const html = document.documentElement;
const controlsBtn = document.getElementById('controlsToggle');

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let bgX = 0;
let bgY = 0;
const shipSpeed = 5;
const bgSpeed = 10;
const shipSize = 100;
const shipHalf = shipSize / 2;
let useZQSD = false;

const keysPressed = {};

function updatePosition() {
    spaceship.style.left = x + 'px';
    spaceship.style.top = y + 'px';
    spaceship.style.transform = 'translate(-50%, -50%)';
    html.style.backgroundPosition = `${bgX}px ${bgY}px`;
}

function clampShipPosition() {
    x = Math.max(shipHalf, Math.min(window.innerWidth - shipHalf, x));
    y = Math.max(shipHalf, Math.min(window.innerHeight - shipHalf, y));
}

function moveShip() {
    let moved = false;

    if (keysPressed['w'] || keysPressed['z']) {
        y -= shipSpeed;
        bgY += bgSpeed;
        moved = true;
    }
    if (keysPressed['s']) {
        y += shipSpeed;
        bgY -= bgSpeed;
        moved = true;
    }
    if (keysPressed['a'] || keysPressed['q']) {
        x -= shipSpeed;
        bgX += bgSpeed;
        moved = true;
    }
    if (keysPressed['d']) {
        x += shipSpeed;
        bgX -= bgSpeed;
        moved = true;
    }

    if (moved) {
        clampShipPosition();
        updatePosition();
    }
}

function updateControlsMode(detectedMode) {
    if (detectedMode === 'wasd') {
        useZQSD = false;
        controlsBtn.textContent = 'WASD';
    } else if (detectedMode === 'zqsd') {
        useZQSD = true;
        controlsBtn.textContent = 'ZQSD';
    }
}

controlsBtn.addEventListener('click', () => {
    useZQSD = !useZQSD;
    controlsBtn.textContent = useZQSD ? 'ZQSD' : 'WASD';
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    const wasdKeys = ['w', 'a', 's', 'd'];
    const zqsdKeys = ['z', 'q', 's', 'd'];

    if (wasdKeys.includes(key) && key !== 's' && key !== 'd') {
        updateControlsMode('wasd');
    } else if (zqsdKeys.includes(key) && (key === 'z' || key === 'q')) {
        updateControlsMode('zqsd');
    }

    keysPressed[key] = true;
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    keysPressed[key] = false;
});

setInterval(moveShip, 30);

updatePosition();
