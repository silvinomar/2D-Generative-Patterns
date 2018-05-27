var w = 600;
var h = 600;

var spacing = 50;

function setup() {
    createCanvas(w, h);
    angleMode(DEGREES);
    grid();
}

function mousePressed(){
    grid();
}

function grid() {
    background(0);
    var totalIndex = width + height * width;
    var index = 0;
    var xi = 0;
    var yi = 0;
    var widthi = width / spacing;
    for (x = spacing; x < width - spacing; x += spacing) {
        xi++;
        for (y = spacing; y < height - spacing; y += spacing) {
            yi++;
            index = xi + yi * (widthi - 1);
            var p = createVector(x, y);
            symbol(p, spacing, Math.round(index));
        }
    }

}

function symbol(position, size, index) {
    noStroke();
    strokeWeight(20);
    push();
    if (index % 2 == 0) {
        dot(position, size*0.8);
    } else {
        bread(position, size*0.8,index);
    }
    pop();
}

function dot(p, size) {
    translate(p.x, p.y);
    fill(color("#eee"));
    ellipse(size / 2, size / 2, size * 0.55, size * 0.55);
    stroke(color("#111"));
}

function bread(p, size,i) {
    translate(p.x, p.y);

    fill(color("#eee"));
    rect(0, 0, size, size);

    fill(color("#111"));
    stroke(color("#eee"));
    translate(size, 0);
    if(noise(i)*random() > 0.5){
    rotate(90);}
    line(0, 0.2 * size, 0, size * 0.8);
}