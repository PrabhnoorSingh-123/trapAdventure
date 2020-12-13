class Player{
 constructor(){
     this.body=createSprite(200,200,20,50)
     this.body.shapeColor="red"
 }

jump(){
this.body.velocityY=-5

}
display(){
  this.body.velocityY=this.velocityY+0.5
  this.body.collide(ground.body)
}


}