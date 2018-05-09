var w = 600,
    h = 600;

var gridUnit = 24;

function setup() {

    createCanvas(w, h);
    background(0);
    stroke(255);
    grid();
}


function grid() {

    var l = width / gridUnit;
    var a = createVector(0, 0);
    var b = createVector(width, 0);
    var c = createVector(0, height);
    var d = createVector(width, height);

    var linesdist = 0.5 + Math.round(random() * 4);
    strokeWeight(map(linesdist, 0, 2, 7, 1));

    //ellipse(a.x,a.y,gridUnit,gridUnit);
    for (var y = l/2; y < height; y += gridUnit * linesdist) {
        line(a.x, a.y, b.x, y);
    }

    //ellipse(b.x,b.y,gridUnit,gridUnit);
    for (var x = l/2; x < width; x += gridUnit * linesdist) {
        line(b.x, b.y, x, c.y);
    }

    //ellipse(c.x,c.y,gridUnit,gridUnit);
    for (var x = l/2; x < width; x += gridUnit * linesdist) {
        line(c.x, c.y, x, a.y);
    }

    //ellipse(d.x,d.y,gridUnit,gridUnit);
    for (var y = l/2; y < height; y += gridUnit * linesdist) {
        line(d.x, d.y, a.x, y);
    }
}

function mousePressed() {
    background(0);
    grid();
}