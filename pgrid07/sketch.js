var w = 600,
    h = 600;

var spacing = 25;


function setup() {

    createCanvas(w, h);

    stroke(255);
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
            recursiveRect(x, y, spacing);
        }
    }

}

function recursiveRect(px, py, size) {
    var noiseVal = noise(px*py);
    var randomVal = random(255);
    fill(noiseVal*randomVal*5,noiseVal*randomVal,noiseVal*randomVal);
    rect(px, py, size, size);
    size = spacing * (Math.random());
    while (size > 0) {
        rect(px, py, size, size);
        size -= noiseVal * randomVal;
    }

}