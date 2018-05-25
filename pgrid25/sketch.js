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
    translate(-spacing / 4, -spacing / 5);
    for (x = 0; x < width - 0; x += spacing) {
        xi++;
        for (y = 0; y < height - 0; y += spacing) {
            yi += 2;
            index = xi + yi * (widthi - 1);
            console.log(index);

            var p = createVector(x, y);
            shape(p, spacing, Math.round(index));
        }
    }

}

function shape(position, size, index) {
    noStroke();
    strokeWeight(10);
    var black = color("#111");
    var white = color("#eee");
    if (index % 2 == 0) {
        fill(black);
        rect(position.x, position.y, size, size);
        fill(white);
        ellipse(position.x + size / 2, position.y + size / 2, size * 0.8, size * 0.8);
        stroke(black);
        line(position.x + size / 2, position.y + size * 0.2, position.x + size / 2, position.y + size * 0.8);
    } else {
        fill(white);
        rect(position.x, position.y, size, size);
        fill(black);
        ellipse(position.x + size / 2, position.y + size / 2, size * 0.8, size * 0.8);
        stroke(white);
        line(position.x + size / 2, position.y + size * 0.2, position.x + size / 2, position.y + size * 0.8);
    }
}