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
var val;
function compassGrid(){
  // your code here
// push();
  for(let i=stepSize/4;i<height;i+=stepSize/2)
  {
   push(); 
   translate(0,i)
  
    for(let j=stepSize/4;j<width;j+=stepSize/2)
  {
     
    //x-coordinate in space=j 
    //y-coordinatein space=i 
    //both are large number  for noise 
   
    push(); 
    rotate(val);
    translate(j,0);
   
    let noi=noise(j/width,i/height,frameCount/100);
    val = map(noi,0,1,0,720);
   //  
    stroke(255,0,0);
    line(j,i,j,i+stepSize*0.9);
   
    pop();

  }
  pop();
      //noLoop()
  
  } 
 // pop();
}
