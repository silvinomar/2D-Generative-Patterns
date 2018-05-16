var w = 600;
var h = 600;

var spacing = 40;

var radius = 20;

function setup() {
    createCanvas(w, h);
    angleMode(DEGREES);
    grid();
}

function grid() {
    background(255);
    var index = 0;
    var xi = 0;
    var yi = 0;
    var widthi = width / spacing;

    for (x = 0; x < width - 0; x += spacing) {
        xi++;
        for (y = 0; y < height - 0; y += spacing) {
            yi++;
            index = xi + yi * (widthi - 1);

            var p = createVector(x, y);
            RECTANGLE(p, spacing, Math.round(index));

            if (yi % 2 == 0)
                ELLIPSE(p, spacing * .5, Math.round(index));
        }
    }

}

function RECTANGLE(position, size, index) {
    noStroke();
    var c = color("#eee");
    if (index % 2 == 0) {
        c = color("#111");
    }
    fill(c);
    rect(position.x, position.y, size, size);
}

function ELLIPSE(position, size, index) {
    noStroke();
    var c = color("#eee");
    if (index % 2 == 0) {
        c = color("#111");
    }
    fill(c);
    ellipse(position.x, position.y, size, size);
}