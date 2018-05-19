var w = 600;
var h = 600;

var spacing = 80;

function setup() {

    createCanvas(w, h);
    angleMode(DEGREES);
    grid();

}

function grid() {
    background(255);
    var totalIndex = width + height * width;
    var index = 0;
    var xi = 0;
    var yi = 0;
    var widthi = width / spacing;
    translate(-spacing * .25, -spacing * .25);
    for (x = 0; x < width - 0; x += spacing) {
        xi++;
        for (y = 0; y < height - 0; y += spacing) {
            yi += 2;
            index = xi + yi * (widthi - 1);
            var p = createVector(x, y);
            RECTANGLE(p, spacing, Math.round(index));
        }
    }

}

function RECTANGLE(position, size, index) {
    noStroke();
    var c = color("#777");
    if (index % 2 == 0) {
        c = color("#111");
    }
    fill(c);
    recursiveRect(position.x, position.y, size);
}

function recursiveRect(px, py, size) {
    while (size > (size * .5)) {
        stroke(color("#eee"));
        rect(px + size * .25, py + size * .25, size, size);
        size -= noise(rand(25)) * 25;
    }

}

function rand(max) {
    return Math.round(Math.random() * (max - 1));
}