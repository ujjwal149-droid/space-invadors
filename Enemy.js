export default class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44; // dimensions of the image itself
        this.height = 32;

        this.image = new Image()
        this.image.src = `images/enemy${imageNumber}.png`
    }

    draw (ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    move(xVelocity, yVelocity) {
        this.x += xVelocity;
        this.y += yVelocity;
    }
};