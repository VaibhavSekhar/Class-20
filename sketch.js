var MR, FR


function setup() {
  createCanvas(1200,800);
  FR = createSprite(200,200,50,80);
  MR = createSprite(400,200,80,30);

  MR.shapeColor = "green"
  FR.shapeColor = "green"


 
}

function draw() {
  background(0);
  MR.y = mouseY;
  MR.x = mouseX;
  console.log(MR.x -FR.x);

  if(MR.x - FR.x < MR.width/2+FR.width/2 && FR.x - MR.x < MR.width/2+FR.width/2 &&
    FR.y - MR.y < MR.height/2+FR.height/2 && MR.y - FR.y < MR.height/2+FR.height/2){
    MR.shapeColor = "red"
    FR.shapeColor =  "red"
  }else{
    MR.shapeColor = "green"
    FR.shapeColor = "green"
  }

  drawSprites();
}