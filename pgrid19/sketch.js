var w = 600;
var h = 600;

var radius = 20;

function setup() {
    createCanvas(w, h);
    background(255);
    stroke(0);
    strokeWeight(1.75);
    angleMode(DEGREES);

    for (x = radius; x < width - radius; x += radius) {
        for (y = radius; y < height - radius; y += radius) {
            var index = x + y * (width - 1);
            var totalIndex = width + height * width;
            symbol(createVector(x + (radius / 2), y + (radius / 2)), radius * 0.35, map(index, 0, totalIndex, -90, 90));
        }
    }

}


function symbol(pos, r, rot) {
    push();
    translate(pos.x, pos.y);
    rotate(rot);
    line(0, 0, r * 0.75, r * 0.75);
    point(0, 0);
    strokeWeight(7.5);
    point(r, r);
    pop();
}