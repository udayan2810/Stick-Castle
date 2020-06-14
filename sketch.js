const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stick,stick2,stick3,stick4,stick5,stick6,stick7;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
stick =  new  Ground (500,350,140,200)
stick2 = new Ground  (595,380,50,370);
stick3 = new Ground  (405,380,50,370);
stick4 = new Ground  (360,380,50,500);
stick5 = new Ground  (645,380,50,500);
stick6 = new Ground  (330,380,30,600);
stick7 = new Ground  (685,380,30,600);

}

function draw() {
  background(0,0,0);  
  fill("Blue"); 
  textSize(20)
  text("LUCIFER's Base",450,80 );
  Engine.update(engine);
  stick.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  drawSprites();
}