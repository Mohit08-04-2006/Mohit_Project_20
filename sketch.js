var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);
  wall = createSprite(650,200,60,height/2);
  wall.shapeColor = "white";

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";

  weight = random(400,1500);
  speed = random(55,90);
 
}

function draw() {
  background(0);  
  car.velocityX = speed;
  
  if (car.x >= wall.x - wall.width && car.x <= wall.x + wall.width){
    
  
  
 var deformation = (0.5*weight*speed*speed)/22500;
 if (deformation > 180 ){
   car.shapeColor = "red";
   car.velocityX = 0;
 }
 

 if (deformation < 180 && deformation > 100){
   car.shapeColor = "yellow";
   car.velocityX = 0;
 }
 

 if (deformation < 100){
   car.shapeColor = "lightgreen";
   car.velocityX = 0;
 }
  
  }
  drawSprites();
}