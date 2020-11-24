const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ball = Bodies.circle(200,200,20,{restitution: 1});
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    box = Bodies.rectangle(200,350,50,50)
    World.add(world,ground);
    World.add(world,ball);
    World.add(world,box);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("red");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("yellow");
    rect(box.position.x,box.position.y,50,50);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball.position.x,ball.position.y,20,20);
}