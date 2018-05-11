var w = 600,
    h = 600;

var r;

var units = [];


var gridUnit = 60;

var count = 0;

function setup() {

    createCanvas(w, h);
    background(0);
    noStroke();
    noFill();
    stroke(255,174);
    strokeWeight(.85);
}

function draw() {
    grid();
}

function grid() {
    for (var x = gridUnit; x <= width - (gridUnit); x += gridUnit) {
        for (var y = gridUnit; y <= height - (gridUnit); y += gridUnit) {
            var xindex = (x / gridUnit) - 1;
            var yindex = (y / gridUnit) - 1;
            count = xindex + yindex;

            if (count % 2 == 0) {
                units.push(new motionCircle(createVector(x, y), 15, random()*50));
            } else {
                units.push(new motionCircle(createVector(x, y), 25, random()*50));
            }

        }
    }

    for (var i = 0; i < units.length; i++) {
        units[i].update();
        units[i].display();
    }

}

function motionCircle(p, r, offset) {
    this.r = r;
    this.theta = 0;
    this.thetaVel =1;
    this.thetaAcc = 2;
    this.pos = p;
    this.p = createVector(0);

    this.size = r;

    this.update = function () {

        if (this.theta < TWO_PI) {
            // Convert polar to cartesian
            var x = this.r * cos(this.theta);
            var y = this.r * sin(this.theta);
            this.p.x = x;
            this.p.y = y;

            this.thetaVel += this.thetaAcc;
            this.theta += this.thetaVel;

        } else {
            noLoop();
        }
    }

    this.display = function () {

        var p = createVector(this.p.x + this.pos.x, this.p.y + this.pos.y);
        recursiveEllipse(p, this.size);

    }

}

function randomIndex(max) {
    return Math.round(Math.random() * max - 1);
}

function recursiveEllipse(p, s) {
    var size = s;
    if (size > 0) {
        ellipse(p.x, p.y, size * 2, size * 2);
        size -= 10;
        recursiveEllipse(p, size);
    }

}