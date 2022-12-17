var stepSize = 20;

function setup() {
  createCanvas(500, 500);
 // rectMode(CENTER);
  angleMode(DEGREES);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
 
  fill(255);
  for(let i=0;i<width;i+=stepSize)
  {
    for(let j=0;j<height;j+=stepSize)
  {
     stroke(100);
    var mouse=(width+1)/mouseX; 
    var n=noise(i,j,frameCount/400*mouse);
    var col=map(n,0,1,0,255);
    var red=color(255,0,0);
    var green=color(0,255,0);
     
   var lerp=lerpColor(red, green, n);
  // fill(lerp);
    rect(i,j,stepSize,stepSize);
  }
  }
  
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here
 
  for(let i=0;i<height;i+=stepSize)
  {
    for(let j=0;j<width;j+=stepSize)
  {
     var mousy=(width+1)/mouseX; 
    let noi=noise(j,i,frameCount/1000*mousy);
    let val = map(noi,0,1,0,720);
    
    translate(j/2); // translate x to have value of j 
    rotate(val);
    stroke(255,0,0);
    line(j,i,j,i+stepSize);
    noStroke();
  }
  } 
}
