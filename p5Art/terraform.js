
const sc=20;
const w=600;
  const h=600;
   cols=w/sc;
   rows=h/sc;
function setup() {
  createCanvas(600, 600,WEBGL);
  
 
}

function draw() {
  background(0);
   stroke(255)
      noFill()
   
  translate(width/2,height/2)
  
  rotateX(PI/3)
  translate(-w/2,-h/2)
 
  for(let y=0;y<rows;y++){
    beginShape(TRIANGLE_STRIP);
  for(let x=0;x<cols;x++){
    vertex(x*sc, y*sc);
       vertex(x*sc, (y+1)*sc);
      rect(x*sc,y*sc,sc,sc)
    }
    endShape();
  }
}