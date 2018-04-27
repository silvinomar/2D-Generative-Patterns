var w = 600,
    h = 600;

var obj = [];

function setup() {
    createCanvas(w, h);

    init();

}

function mousePressed() {
    init();
}

function init() { 
    reset();
    for (var x = -10; x <= (width); x += 2) {
        for (var y = 0; y <= (height); y += 2) {
            obj.push(new randomWalker(x, y));
        }
    }

    for (var i = 0; i < obj.length; i++) {
        obj[i].update();
        obj[i].display();
    }
}

function reset(){
    obj = [];
    clear();
    background(0);
}

function randomWalker(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);

    this.update = function () {
        if (random() > 0.5) {
            this.velocity.x += random(-12, 12);
            this.velocity.y += random(-12, 12);
        }

        if (this.position.x > 0 && this.position.x < width && this.position.y > 0 && this.position.y < height) {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

        }
    }

    this.display = function () {
        strokeWeight(1);
        stroke(noise(this.position.x) * 255, noise(this.position.x * this.position.y) * 255);
        point(this.position.x, this.position.y);
    }
}