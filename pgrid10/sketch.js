var w = 600,
    h = 600;


function setup() {
    createCanvas(w, h);
    stroke(255);
    strokeWeight(2);
    init();
}

function mousePressed() {
    init();
}

function rand(max) {
    return Math.round(Math.random() * (max - 1));
}

function reset() {
    clear();
    background(0);
    noFill();

}

function init() {
    reset();
    horizontalLines(16, 8);
}

function horizontalLines(xspacing, yspacing) {
    var y = yspacing;
    var v = 0.25 + Math.random(noise(y));
    while (y < (height - yspacing)) {
        beginShape();
        for (var x = 0; x < width + xspacing; x += xspacing) {
            if (noise(x) > 0.5) {
                vertex(x, y + v * 10);
            } else {
                vertex(x, y);
            }
        }
        endShape();
        stroke(noise(y) * 255, random(noise(y)) * 255, random(noise(y)) * 255);

        y += yspacing;
    }

}

function variation(y) {
    return map(random(noise(y)), 0, 1, 0, 8);

}