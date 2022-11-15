function setup() {
  createCanvas(660, 600, WEBGL);
  frameRate(60);
  background(0);

  colorMode(HSB);
}

function draw() {
  background(0);
  normalMaterial();
  let hu = 0;

  for (let j = 0; j < 16; j++) {
    push();
    stroke(hu, 255, 255);
    for (let i = 0; i < 30; i++) {
      translate(
        (sin(frameCount * 0.001 * i + j) / sin(frameCount * 0.001 * i + j)) * 5,

        sin(frameCount * 0.001 * i + j) * 10
      );
      hu++;

      hu++;

      rotateX(frameCount * 0.0002);

      if (hu > 255) {
        hu = 0;
      }
      rotateZ(frameCount * 0.001);
      push();
      plane(8, 4, 6);

      pop();
    }
    pop();
  }
}
