import EnemyController from './EnemyController.js';
import Player from './Player.js';
import BulletController from "./BulletController.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

// instance of EnemyController class
const enemyController = new EnemyController(canvas);
const bulletController = new BulletController(canvas, 10, "red", true);
const player = new Player(canvas, 3, bulletController);

// game loop
function game() {
    // drawing the bg
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx);
    player.draw(ctx)
    bulletController.draw(ctx);
}

setInterval(game, 1000/60) // calling game 60 times per sec (60fps)