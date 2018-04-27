var obj = [];

function setup() {
    createCanvas(600, 600);
    background(0, 255);

    blendMode(ADD);

    for (var x = 50; x < (width - 50); x += 25) {
        for (var y = 50; y < (height - 50); y += 25) {
            obj.push(new randomWalker(x, y));
        }
    }

}

function draw() {


    for (var i = 0; i < obj.length; i++) {
        obj[i].update();
        obj[i].display();
    }

}

function randomWalker(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);

    this.update = function () {
        if (random() > 0.85) {
            this.velocity.x += random(-1.75, 1.75);
            this.velocity.y += random(-1.75, 1.75);
        }

        if (this.position.x > -15 && this.position.x < width + 15 && this.position.y > -15 && this.position.y < height + 15) {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }

    this.display = function () {
        strokeWeight(11);
        stroke(255, noise(this.position.x) * 25);
        point(this.position.x, this.position.y);
    }
}