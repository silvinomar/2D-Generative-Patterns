var w = 600,
    h = 600;

var spacing = 12;
var multiply = 1;

function setup() {
    createCanvas(w, h);
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
    background(0);
    multiply = 1;
    for (var x = spacing; x < width; x += spacing) {
        for (var y = spacing; y < height; y += spacing) {
            for(var i=0;i<1+noise(x*y)*random(5);i++){
                rect(x, y, spacing * 1/sqrt(i), spacing * 1/sqrt(i));
                    
            }
           
            
        }
    }

}
