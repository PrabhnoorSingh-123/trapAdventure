var ground
var player
//function preload(){

//}

function setup() {
  createCanvas(1200,800);
  //createSprite(200,200,20,20)
player=new Player();
ground=new Ground();
}

function draw() {
  background(0);  
  player.display()
  
if(keyDown("space")){
  player.jump()

}
  drawSprites();
  
}