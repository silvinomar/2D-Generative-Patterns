let m;
let bg = [0, 0, 0];
let probability = 0.9;

function resetbg(alpha) {
    background(bg[0], bg[1], bg[2], map(alpha, 0, 1, 0, 255));
}

function setup() {
    createCanvas(600, 600);
    frameRate(60);
    resetbg(1);
    m = new Matrix(0, 0, 30, 6.0);
    n = new Matrix(0, 0, 30, 6.0);
}

function draw() {
    resetbg(.05);

    m.update();
    m.display();
}

function Matrix(X, Y, SPACING, ESPESSURA) {
    this.strokeW = ESPESSURA;
    this.spacing = SPACING;
    this.x = X;
    this.y = Y;


    this.update = function () {

        if (this.strokeW != 0) {
            strokeWeight(this.strokeW);
            stroke(noise(this.y % height * this.x % width) * 256);
        } else {
            noStroke();
        }

        fill(noise(this.y % height * this.x % width) * 256);
        this.x += this.spacing;
        if (this.x > width) {
            this.x = 0;
            this.y += this.spacing;
        }

        if (this.y > height) {
            resetbg(1);
            this.y = 0;
            this.x = 0;
        }
    }

    this.display = function () {

        if (random(1) < probability) {
            if (this.strokeW == 0) {
                rect(this.x, this.y, this.spacing, this.spacing);
            } else {
                line(this.x, this.y, this.x + this.spacing, this.y + this.spacing);
            }
        } else {

            line(this.x + this.spacing, this.y, this.x, this.y + this.spacing);
        }
    }

}