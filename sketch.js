var ground
var player
//function preload(){

//}

function setup() {
  createCanvas(1200,800);
  //createSprite(200,200,20,20)
player=new Player(200,200,20,20);
ground=new Ground(200,200,20,20);
}

function draw() {
  background(0);  
  player.display()

  drawSprites();
  
}