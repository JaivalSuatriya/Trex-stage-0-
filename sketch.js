
var trex ,trex_running;
var ground, ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  ground_image = loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
  trex = createSprite(50,180,10,10)
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5

  ground = createSprite(300,190,600,2)
  ground.addAnimation("image", ground_image);
  ground.velocityX = -5
}

function draw(){
  background("white")
  if (keyDown("space")) {
    trex.velocityY = -14
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground)
drawSprites()
}
