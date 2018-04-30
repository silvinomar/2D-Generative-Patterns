var w = 600,
    h = 600;

var yellowBg;
var colors = [];

var spacing = 50;

function setup() {
     
    createCanvas(w, h);
    rectMode(CENTER);
    noStroke();

    yellowBg = color("#fec715");
    colors[0] = color("#395dab");
    colors[1] = color("#162951");
    colors[2] = color("#ee222e");
    colors[3] = color("fff");

    drawGrid();
}

function mousePressed() {
    drawGrid();
}

function drawGrid() {
    clear();
    background(yellowBg);
    for (var x = spacing; x < width; x += spacing) {
        for (var y = spacing; y < height; y += spacing) {
            var size = spacing * Math.random();
            fill(colors[randomIndex(colors.length)]);
            rect(x, y, size, size);
        }
    }
}

function randomIndex(length) {
    return Math.round(Math.random() * (length - 1));
}
