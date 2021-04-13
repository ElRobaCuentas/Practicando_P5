function setup() {
    // put setup code here
    createCanvas(400, 400);
}

var col = 0;

function draw() {
    // put drawing code here
    // col = map(mouseX, 0, 400, 0, 255);
    // console.log("mouse", mouseX)
    // console.log("map", col)
    background(0);
    // noStroke();
    fill(240, 150, 150);
    push();
    translate(width / 2, height / 2);
    rotate(PI/4 + PI);
    square(0, 0, 100);
    pop();

    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // box(45, 45, 45);

    // var angle = map(mouseX, 0, width, 255, 135);
    // var x = 100 * cos(radians(angle));
    // var y = 100 * sin(radians(angle));
    // line(200, 200, 200 + x, 200 + y);


    // fill(250, 118, 222);
    // ellipse(mouseX, 200, 64, 64)
} 




  