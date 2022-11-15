function setup() {
  createCanvas(660, 600, WEBGL);
  frameRate(60);
  background(0);

  colorMode(HSB);
}

function draw() {
  normalMaterial();
  let hu = 0;

  for (let j = 0; j < 16; j++) {
    push();
    stroke(hu, 255, 255);
    for (let i = 0; i < 30; i++) {
      translate(
        ((sin(frameCount * 0.001 * i + j) * cos(frameCount * 0.001 * i + j)) /
          sin(frameCount * 0.001 * i + j)) *
          10,

        sin(frameCount * 0.001 * i + j) * 10
      );
      hu++;

      hu++;

      if (hu > 255) {
        hu = 0;
      }
      rotateZ(frameCount * 0.001);
      push();
      cone(8, 4, 6);

      pop();
    }
    pop();
  }
}
