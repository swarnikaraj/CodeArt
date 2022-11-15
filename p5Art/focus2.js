function setup() {
  createCanvas(660, 600, WEBGL);
  frameRate(60);
  background(0);

  colorMode(HSB);
}

function draw() {
  let hu = 0;
  background(0);

  for (let j = 0; j < 112; j++) {
    push();
    stroke(hu, 255, 255);
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 * i + j),

        sin(frameCount * 0.001 * i + j) * 10
      );
      hu++;

      hu++;

      // rotateY(frameCount * 0.001);
      if (hu > 255) {
        hu = 0;
      }
      rotateZ(frameCount * 0.001);
      push();
      torus(8, 4, 8);
      pop();
    }
    pop();
  }
}
