var w = 600;
var h = 600;

var spacing = 50;

function setup() {

    createCanvas(w, h);
    angleMode(DEGREES);

    noFill();

    grid();
}

function mousePressed() {
    grid();
}

function grid() {
    background(0);
    var totalIndex = width + height * width;
    var index = 0;
    var xi = 0;
    var yi = 0;
    var widthi = width / spacing;
    translate(-spacing * .25, -spacing * .25);
    for (x = -spacing; x < width + spacing; x += spacing * 0.75) {
        xi++;
        for (y = -spacing; y < height + spacing; y += spacing * 0.75) {
            yi++;
            index = xi + yi * (widthi - 1);
            var p = createVector(x, y);
            strokeWeight(2);
            if (xi % 2 == 0 || yi % 2 == 0) {
                stroke("#eee");
                ellipse(p.x + spacing / 2, p.y + spacing / 2, spacing * 1.25, spacing * 1.25);
            } else {
                stroke("#aaa");
                rect(p.x, p.y, spacing, spacing);
            }
            strokeWeight(6);
            stroke("#aaa");
            point(p.x - spacing * 0.25, p.y - spacing * 0.25);
        }
    }

}

function rand(max) {
    return Math.round(Math.random() * (max - 1));
}