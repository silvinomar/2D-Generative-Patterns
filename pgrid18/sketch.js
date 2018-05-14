var w = 600,
    h = 600;

var spacing = 600/20;

var colors = [];


function setup() {

    createCanvas(w, h);
    noStroke();
    rectMode(CENTER);

    colors[0] = color("#dad2d8");
    colors[1] = color("#143642");
    colors[2] = color("#0f8b8d");
    colors[3] = color("#ec9a29");
    colors[4] = color("#a8201a");

    drawGrid();
}

function mousePressed() {
    drawGrid();
}

function drawGrid() {
    clear();
    background(0);
    translate(spacing/2, spacing/2);
    for (var x = 0; x < width; x += spacing) {
        for (var y = 0; y < height; y += spacing) {
            var size = spacing;
            recursiveRect(x, y, size);
        }
    }

}

function recursiveRect(px, py, size) {
    while (size > 0) {
        var randomIndex = rand(colors.length);
        fill(colors[randomIndex]);
        rect(px, py, size, size);
        size -=25;
    }

}


function rand(max) {
    return Math.round(Math.random() * (max - 1));
}