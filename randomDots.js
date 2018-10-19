var col= {
  r:255,
  b:0,
  g:0
};
var spot={
  x:100,
  y:50
};
function setup() {
  createCanvas(600, 400);
   background(0);
}

function draw() {
  col.r=random(100,255);
  col.b=random(100,190);
  noStroke();
  spot.x=random(0,width);
  spot.y=random(0,height);
  fill(col.r,col.g,col.b,100);
  ellipse(spot.x,spot.y,24,24)
  
  
}