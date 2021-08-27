var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
   appleImg = loadImage("apple.png")
   leafImg = loadImage("redImg.png")


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


apple = createSprite(random(50,350))(180,340,30,30);
apple.scale =0.09;
apple.addImage(appleImg);
apple.velocityX  = 3
apple.lifetime = 150


leaves = createSprite(random(50,350))(180,340,30,30);
leaves.scale =0.09;
leaves.addImage(leafImg);
leaves.velocityX  = 3
leaves.lifetime = 150
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
 