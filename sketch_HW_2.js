function setup() {
  createCanvas(500, 500);
  background(245);
}

function draw() 
{
  noStroke();
  let c = (0, 0, 0);
  //red
  fill(255, 0, 0);
  rect(0, 0, 20, 20);
  //orange
  fill(255, 165, 0);
  rect(0, 20, 20, 20);
  //yellow
  fill(255, 255, 0);
  rect(0, 40, 20, 20);
  //green
  fill(0, 255, 0);
  rect(0, 60, 20, 20);
  //cyan
  fill(0, 255, 255);
  rect(0, 80, 20, 20);
  //blue
  fill(0, 0, 255);
  rect(0, 100, 20, 20);
  //magenta
  fill(255, 0, 255);
  rect(0, 120, 20, 20);
  //brown
  fill(139, 69, 19);
  rect(0, 140, 20, 20);
  //white
  fill(255);
  rect(0, 160, 20, 20);
  //black
  fill(0);
  rect(0, 180, 20, 20);

  if(mouseIsPressed)
  {
    if(mouseX === 0 && mouseY === 0)
    {
    c = color(255, 0, 0);
    }
  }
  fill(c);
  ellipse(mouseX, mouseY, 10, 10);
}
