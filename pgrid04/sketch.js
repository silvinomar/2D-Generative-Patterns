var w = 600,
    h = 600;

var CELLW = 31.66,
    CELLH = 3.14;

function setup() {

    createCanvas(w, h);
    grid(CELLW, CELLH);

}

function mousePressed() {
    grid(CELLW, CELLH);
}

function grid(cellW, cellH) {
    background(255);
    for (var x = cellW; x < (width - cellW); x += cellW) {
        for (var y = cellH; y < (height - cellH); y += cellH) {
            stroke(0, 150);
            strokeWeight(3);
            if (noise(x * y) * 4 > 2) {
                point(x, y);
                stroke(0, 250);
                line(x, y, x + cellW, y + cellH);
            }
        }
    }
}