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

    var mouse=width/(mouseX+1); // to gurantee no division by zero 
    var n;
    //to avoid NAN when refresh as mouseX is undefined 
   
    n=noise(i/width,j/height,frameCount/200*mouse);
    var col=map(n,0,1,0,255);
    var red=color(125,0,0);
    var green=color(0,125,0);
    //combinate two colors based on n value(ratio between first and second color)
    var lerp=lerpColor(red, green, n);
    fill(lerp);
    rect(i,j,stepSize,stepSize);
  }
  }
  
}
///////////////////////////////////////////////////////////////////////
var val;
function compassGrid(){
  

  for(let i=stepSize/2;i<height;i+=stepSize)
  {
  
  
  
    for(let j=stepSize/2;j<width;j+=stepSize)
  {
     
    //x-coordinate in space=j divide by width for organic noise
    //y-coordinatein space=i  divide by height for organic noise
    //both are large number  for noise 
   
    push(); 
    let noi=noise(j/width,i/height,frameCount/100);
    
    val = map(noi,0,1,0,720);
    translate(j,i);
    var speed=width/(mouseX+1); // as above to ensure no division by zero
    // control compass speed by mouseX movement 
    rotate(val*speed);
   
    stroke(255,0,0);
    //to generate different line length based on noise 
    line(0,0,0,stepSize*noi);
    noStroke();
   
     pop();

  }
 
      
  } 
 
}
