var w = 600;
var h = 600;

var spacing = 80;

function setup() {
    createCanvas(w, h);
    angleMode(DEGREES);
}

function grid() {
    background(255);
    var totalIndex = width + height * width;
    var index = 0;
    var xi = 0;
    var yi = 0;
    var widthi = width / spacing;
    for (x = 0; x < width; x += spacing) {
        xi++;
        for (y = 0; y < height; y += spacing) {
            yi += 2;
            index = xi + yi * (widthi - 1);
            var p = createVector(x + noise(mouseX)*10, y + noise(mouseY)*10);
            OBJ(p, spacing, Math.round(index));
        }
    }

}

function draw(){
        grid();
}


function OBJ(position, size, index) {
    noStroke();
    var c = color("#eee");
    if (index % 2 == 0) {
        c = color("#111");
    }
    fill(c);
    rect(position.x, position.y, size, size);
    ellipse(position.x, position.y, size, size);
}