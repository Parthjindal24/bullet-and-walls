var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1400,400);

speed=random(223,321);
weight=random(800,1500);
thickness=random(22,83);

 /*
 1) wall.shapeColor= "white";
 wall.shapeColor = color(255);
 wall.shapeColor= color(80,80,80);
 */

wall=createSprite(1200,200,thickness,canvas.height/2);
wall.shapeColor= color(80,80,80);

bullet=createSprite(50,200,50,5);
bullet.shapeColor=color(255);
bullet.velocityX=speed;




}

function draw() {
  background("teal");  
  

  if(hascolllided(bullet, wall)){

    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor="red";
    }

    if(damage<10){
    
    wall.shapeColor="green";
    }

  
  }
  
  
 
  drawSprites();
}

function hascolllided(lbullet, lwall){



   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   else{
    return false;
  
   }
   

  }

