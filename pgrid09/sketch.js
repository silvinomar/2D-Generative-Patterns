var w = 600,
    h = 600;

var spacing = 12;

var inc;

function setup() {
    createCanvas(w, h);
    reset();
    grid();
    ellipseMode(CENTER);
}


function mousePressed() {
    reset();
    grid();
}

function reset() {
    clear();
    background(0);
    stroke(255);
    inc = spacing * 0.05;
}

function grid() {
    var dir = random(.75, 1.75);
    for (var x = -spacing * 2; x < width + spacing; x += spacing * 0.9) {
        for (var y = -spacing * 2; y < height + spacing; y += spacing * 0.9) {
            var change = map(x * y, 0, width * height, 0, 1);
            strokeWeight(map(change, 0, 1, .9, 2.5));
            stroke(map(change, 0, 1, 215, 255));

            line(x, y, x - spacing / 2, y - spacing / dir);
            line(x, y, x + spacing / 2, y + spacing / 2);
        }
    }
}
