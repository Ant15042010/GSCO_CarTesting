var car, collider,speed,weight;
function setup() {
  createCanvas(800,400);
  car = createSprite(20, 200, 20, 20);
  collider = createSprite(780, 200, 20, 50);
  speed = random(1,260);
  weight = random(1,260);
  car.shapeColor = rgb(0,0,0);
}

function draw() {
  background(255,255,255);
  car.velocityX = 12;
  if (deformation (speed, weight)> 180 && isTouching(collider,car)){
    car.shapeColor = rgb(255,0,0);
    car.velocityX = 0;
  }
  if (deformation (speed, weight)< 80 && isTouching(collider,car)){
    car.shapeColor = rgb(0,255,0);
    car.velocityX = 0;
  }
  if (deformation (speed, weight)< 180 && deformation (speed, weight)> 80 && isTouching(collider,car)){
    car.shapeColor = rgb(255,255,0);
    car.velocityX = 0;
  }
  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true
  }
  else{return false
  }
}
function deformation(speed,weight){
  var deformation = 0.5*speed*weight*speed/22500;
  return deformation;
}