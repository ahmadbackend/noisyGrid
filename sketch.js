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
  
 noStroke();
  fill(255);
  for(let i=0;i<width;i+=stepSize)
  {
    for(let j=0;j<height;j+=stepSize)
  {

    var mouse=width/mouseX+1; // to gurantee no division by zero 
    var n=noise(i,j,frameCount/400*mouse);
    var col=map(n,0,1,0,255);
    var red=color(125,0,0);
    var green=color(0,125,0);
     
   var lerp=lerpColor(red, green, n);
    fill(lerp);
    rect(i,j,stepSize,stepSize);
  }
  }
  
}
///////////////////////////////////////////////////////////////////////
var val;
function compassGrid(){
  
 //push();
  for(let i=stepSize/2;i<height;i+=stepSize)
  {
  
   //translate(0,i)
  
    for(let j=stepSize/2;j<width;j+=stepSize)
  {
     
    //x-coordinate in space=j 
    //y-coordinatein space=i 
    //both are large number  for noise 
   
    push(); 
    let noi=noise(j/width,i/height,frameCount/100);
    val = map(noi,0,1,0,720);
    translate(j,i);
    
    
    rotate(val*03);
    
    
    stroke(255,0,0);
    line(0,0,0,stepSize*0.9);
   noStroke();
   
   pop();

  }
 
      
  } 
 
}
