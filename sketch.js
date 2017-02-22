function setup() {
  createCanvas(800,600)
  mic = new p5.AudioIn();
  mic.start();
  background(0);
}

function draw() {
  
var vol = mic.getLevel();
  var y = map(vol,0,1,600,0);
  var x=frameCount%800;
  if(x==0){
    background(0);
  }
  
  strokeWeight(1);
  stroke(255, 204, 0);
  fill(255, 204, 0);
  
  ellipse(x,y,3);
  beginShape();
  vertex(x,y);
  vertex(x, 600);
  endShape();
  
}