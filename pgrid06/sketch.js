var w = 600,
    h = 600;

var spacing = 50;


function setup() {

    createCanvas(w, h);
    noStroke();
    rectMode(CENTER);

    drawGrid();

}

function mousePressed() {
    drawGrid();
}

function rand(max) {
    return Math.round(Math.random() * (max - 1));
}

function drawGrid() {
    clear();
    background(0);
    for (var x = spacing; x < width; x += spacing) {
        for (var y = spacing; y < height; y += spacing) {
            var size = spacing * (Math.random() * 2);
            recursiveRect(x, y, size);
        }
    }

}

function recursiveRect(px, py, size) {
    while (size > 0) {
        fill(rand(255), rand(noise(px * py) * 255), rand(noise(px * py) * 255));
        rect(px, py, size, size);
        size -= noise(size * px * py) * 10;
    }

}