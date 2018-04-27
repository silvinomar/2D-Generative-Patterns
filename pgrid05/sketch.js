var w = 600,
    h = 600;

var yellowBg;
var colors = [];

var spacing = 50;

function setup() {

 
    yellowBg = color("#fec715");

    colors[0] = color("#395dab");
    colors[1] = color("#162951");
    colors[2] = color("#ee222e");
    colors[3] = color("fff");
    


    createCanvas(w, h);
    stroke(255);
    strokeWeight(2);
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
    background(yellowBg);
    for (var x = spacing; x < width; x += spacing) {
        for (var y = spacing; y < height; y += spacing) {
            var size = spacing * (Math.random());
            fill(colors[rand(colors.length)]);
            rect(x, y, size, size);
        }
    }

}