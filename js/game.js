// Create the canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Game objects
const hero = {
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
};

const monster = {
    x: 0,
    y: 0
};

const monsterCaught = 0;

// Handle keyboard controls
const keysDown = {};

addEventListener('keydown', function(e) {
    keysDown[e.code] = true;

}, false);

addEventListener('keyup', function(e) {
    delete keysDown[e.code]
}, false);