function setup() {
    createCanvas(710, 400, WEBGL);
   background(0);
  colorMode(HSB)
  }
  
  function draw() {
    let hu = 0;
  
  
 
  
    rotateY(frameCount * 0.01);
  
    for (let j = 0; j < 5; j++) {
       
      push();
      stroke(hu, 255, 2);
      for (let i = 0; i < 25; i++) {
        
        translate(
          cos(frameCount * 0.002 + j) *  20,
          // cos(frameCount * 0.001 + j) * 10,
          i * 0.1
        );
         hu++
   
        hu++
    if (hu > 255) {
      hu = 0;
    }
        rotateZ(frameCount * 0.001);
        push();
        sphere(10, 4, 8);
        pop();
        
      }
      pop();
    
    }
  }
  