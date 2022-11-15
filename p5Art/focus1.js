function setup() {
  createCanvas(660, 600, WEBGL);
  frameRate(60);
  background(0);

  colorMode(HSB);
}

function draw() {
  let hu = 0;

  

  for (let j = 0; j < 5; j++) {
    push();
    stroke(hu, 255, 255);
    for (let i = 0; i < 80; i++) {
      translate(
        sin(i * i + j * j),
      
        i * 1
      );
      hu++;

      hu++;
      if (hu > 255) {
        hu = 0;
      }
      rotateZ(frameCount * 0.001);
      push();
      sphere(8, 4, 8);
      pop();
    }
    pop();
  }
}
