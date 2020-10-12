var fixedRect, movingRect;
var object1,object2,object3 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";

  movingRect.velocityY = -1;
  fixedRect.velocityY = +1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object3)){
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  object3.shapeColor = "green";
}

if(isTouching(movingRect,object2)){
  movingRect.shapeColor = "red";
  object2.shapeColor = "red";
}
else{
movingRect.shapeColor = "green";
object2.shapeColor = "green";
}

bounce1(movingRect,fixedRect);

  drawSprites();
}

