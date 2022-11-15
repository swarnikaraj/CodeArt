function setup() {
  createCanvas(660, 600, WEBGL);
  frameRate(60);
  background(0);

  colorMode(HSB);
}

function draw() {
  let hu = 0;
  background(0);

  for (let j = 0; j < 25; j++) {
    push();
    stroke(hu, 255, 255);
    for (let i = 0; i < 30; i++) {
      // rotateX(frameCount * 0.0002);
      //   rotateY(frameCount * 0.0002);
      // rotateX(frameCount * 0.0002);

      translate(
        ((cos(frameCount * 0.1 * i + j) * sin(frameCount * 0.001 * (i - j))) /
          cos(frameCount * 0.1 * i + j)) *
          10,

        cos(frameCount * 0.001 * i - j) * 10
      );
      hu++;
      hu++;

      // rotateZ(frameCount * 0.0002);
      //   rotateY(frameCount * 0.0002);
      // rotateX(frameCount * 0.0002);

      if (hu > 255) {
        hu = 0;
      }
      rotateZ(frameCount * 0.001);
      push();
      cone(8, 4, 8);
      pop();
    }
    pop();
  }
}
