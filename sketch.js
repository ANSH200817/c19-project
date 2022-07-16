var car, car_moving
var ground, ground_moving

function preload(){
  car_moving = loadImage('carImg.jpg')

  ground_moving = loadImage('ground2.png')


}


function setup() 
{
  
  createCanvas(400,400);
  
  car=createSprite(70,370,20,20)
  car.addImage('moving',car_moving)
  car.scale = 0.15

  ground=createSprite(200,400,400,30)
  ground.velocityX=-2
  ground.addImage('moving',ground_moving)
  ground.scale = 1.2


}

function draw() 
{
background('white');

if(ground.x < 0){
  ground.x = ground.width/2
}

if(keyDown(UP_ARROW))
velocityY=

drawSprites()

}


