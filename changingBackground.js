var colr=0
var colg=0
var colb=0

function setup() {
  createCanvas(600, 400);
	
}

function draw() {
  
	fill(250,118,222);
	colr=map(mouseX,0,600,0,255);
  colg=map(mouseY,0,600,0,255);
  colb=map(mouseX,0,600,255,0);
	background(colr,colg,colb);
	ellipse(mouseX,mouseY,64,64);
}