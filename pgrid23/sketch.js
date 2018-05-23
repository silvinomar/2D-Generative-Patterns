var w = 600;
var h = 600;
var radius = 30;

function setup() {
    createCanvas(w, h);
    noFill();
    strokeWeight(1.75);
    angleMode(DEGREES);
    grid();
}

function mousePressed() {
    grid();
}

function grid() {
    background(240);
    var off = 0;
    for (x = radius; x < width - radius; x += radius) {
        for (y = radius; y < height - radius; y += radius) {
            var index = x + y * (width - 1);
            var totalIndex = width + height * width;
            if (Math.round(index) % 3 == 0 && Math.random() > 0.68) {
                off = Math.random() * 5;
            }
            c(createVector(off + x + (radius / 2), off + y + (radius / 2)), radius * 0.15, map(index, 0, totalIndex, 50, -50));

        }
    }
}

function c(pos, r, rot) {
    push();
    stroke(0);
    translate(pos.x, pos.y);

    rotate(rot);
    var colormap = map(rot, -180, 180, 200, 25);
    stroke(colormap)
    line(0, 0, r * 3, r * 3);
    point(0, 0);
    strokeWeight(5);
    point(r, r);

    rect(0 - r, 0 - r, r, r);
    strokeWeight(1.9);

    stroke(colormap * 5);
    if (noise(pos.y) * 10 > 5) {
        r = Math.random() * 2;;
    }
    strokeWeight(.25 + noise(pos.y * pos.x) * 4);
    point(-r, -r);
    point(r, r);
    pop();

}