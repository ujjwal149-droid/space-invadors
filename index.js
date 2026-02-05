const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png"

// game loop
function game() {
    // drawing the bg
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

setInterval(game, 1000/60) // calling game 60 times per sec (60fps)