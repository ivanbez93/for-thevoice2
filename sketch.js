var song;
var mic;
let mouseX = 200;
if (mouseX > 900) {
  console.log('positive');
} else {
  console.log('negative');
}


function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(windowWidth, windowHeight);
  song = loadSound("sun.mp3", loaded);
}

function loaded() {
  song.loop();
}

function draw() {
  var vol = mic.getLevel();
  console.log(vol);
  
  
  background(0);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 400.0);
  star(0, 0, vol*1000+100, vol+20*100, 500);
  pop();
  noStroke();
  fill(255, 180, 0);
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}