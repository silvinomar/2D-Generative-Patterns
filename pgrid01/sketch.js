var w = 600,
    h = 600;

var CELLW = 10,
    CELLH = 10;

var SEED = 2;

function setup() {
    createCanvas(w, h);
    grid(CELLW, CELLH, 1 + random(SEED));
}

function mousePressed() {
    reset();
}

function reset() {
    grid(CELLW, CELLH, 1 + random(SEED));
}


function grid(cellW, cellH, seed) {
    background(255);
    for (var x = 0; x < (width); x += cellW) {
        for (var y = 0; y < (height); y += cellH) {
            stroke(0, 150);
            strokeWeight(3);
            if (noise(x * y) * 10 > seed) {
                point(x, y);
                stroke(0, 250);
                line(x, y, x + cellW, y + cellH);
            }
        }
    }
}