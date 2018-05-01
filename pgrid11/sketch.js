var w = 600,
    h = 600;

var lineGrid;
var lines = [];

function setup() {
    createCanvas(w, h);
    init();
}

function mousePressed() {
    init();
}

function rand(max) {
    return Math.round(this.noise (Math.random()) * (max - 1));
}

function reset() {
    clear();
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    rotate(-.1);
    translate(-10.75, 10.75);
}

function init() {
    reset();
    lineGrid = new horizontalLines(66, Math.round(random(15,20)));
    lineGrid.setupGrid();

}

function draw() {
    background(0,2);
        lineGrid.display();
    
        
        lineGrid.anim();

    //horizontalLines(66, 11);
}

function horizontalLines(xspacing, yspacing) {
    this.yPosition = yspacing * 4;
    this.v = noise(this.yPosition) * 2;
    this.xIncrement = xspacing;
    this.yIncrement = yspacing;

    this.lines = [];

    this.setupGrid = function () {
        console.log("hey");
        while (this.yPosition < (height - this.yIncrement * 2)) {
            for (var x = this.yIncrement * 4; x < width - this.yIncrement * 4; x += this.xIncrement) {
                var pos = createVector(0, 0);
                if (noise(x) > 0.15) {
                    pos.x = x + this.v;
                    pos.y = this.yPosition + this.v * 10;
                    this.lines.push(pos);
                } else {
                    pos.x = x - this.v;
                    pos.y = this.yPosition;
                    this.lines.push(pos)
                }
            }
            this.yPosition += this.yIncrement;
        }
        console.log(this.lines);
    }

    this.display = function () {

            stroke(255,50,50);
strokeWeight(4);
        beginShape(OPEN);
        for (var i = 0; i < this.lines.length; i++) {
            vertex(this.lines[i].x, this.lines[i].y);
        }
        endShape();
    }

    this.anim = function(){
        var lineP = this.lines[rand(this.lines.length)];
        var lineP2 = this.lines[rand(this.lines.length)];
        stroke(0);
        strokeWeight(8);
        line(lineP.x,lineP.y,lineP2.x,lineP2.y);
    }

}