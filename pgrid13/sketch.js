var w = 600,
    h = 600;

var pInstance;
var spacing = 20;

var count;

function setup() {
    createCanvas(w, h);
    stroke(255);
    strokeWeight(1.5);
    noStroke();
    init();
}

function init() {
    count = 0;
    background(2, 0, 66);
    
    pInstance = new pattern(RoundRandom(10,20));

    for (var x = 0; x < w + (spacing / 2); x += spacing) {
        for (var y = -(spacing / 2); y < h + (spacing / 2); y += spacing) {
            pInstance.pos(x, y);
            count++;
            if (count % 3 == 0) {
                pInstance.displayDiamond(true);
            } else {
                pInstance.displayDiamond(false);
            }
        }
    }
}

function pattern(spacing) {

    this.position = createVector(0, 0);
    this.size = createVector(spacing / 2, spacing);

    this.pos = function (xx, yy) {
        this.position = createVector(xx, yy);
    }

    this.displayDiamond = function (b) {
        fill(255);
        if (b) {
            ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
            //triangle(this.position.x - this.size.x, this.position.y - this.size.y / 2, this.position.x - this.size.x, this.position.y + this.size.y / 2, this.position.x, this.position.y);
            //triangle(this.position.x + this.size.x, this.position.y - this.size.y / 2, this.position.x + this.size.x, this.position.y + this.size.y / 2, this.position.x, this.position.y);
        } else {
            triangle(this.position.x - this.size.x, this.position.y - this.size.y / 2, this.position.x + this.size.x, this.position.y - this.size.y / 2, this.position.x, this.position.y);
            triangle(this.position.x - this.size.x, this.position.y + this.size.y / 2, this.position.x + this.size.x, this.position.y + this.size.y / 2, this.position.x, this.position.y);
        }
    }
    
    this.add = function(){
        init();
        this.position.x += 0.01 * RoundRandom(-1,1);
        this.position.y += 0.01 * RoundRandom(-1,1);
    }
    
    this.display = function(){
        var b = Math.random() > 0.25;
        this.displayDiamond(b);
    }
}

function RoundRandom(min, max) {
    var n = Math.round(random() * max);
    if (n < min) {
        n = min;
    }
    return n;
}