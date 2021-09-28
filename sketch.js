const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,ball;
var myengine,myworld;
function setup() {
  createCanvas(400,400);
 

 myengine = Engine.create();
 myworld = myengine.world;

var ground_options={
  isStatic: true
}
var ball_property={
  restitution : 1
}
 ground = Bodies.rectangle(200,390,400,20,ground_options);
 ball = Bodies.circle(200,200,10,ball_property);
World.add(myworld,ground);
World.add(myworld,ball);

console.log(ground);
console.log(ground.position.x);

}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
  

}