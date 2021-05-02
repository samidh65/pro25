
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustimage = loadImage("dustbingreen.png")



	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1 = new ground (400,790,800,30)
  rect1 = new dust(500,700,20,150)
  rect2 = new dust(590,765,200,20)
  rect3 = new dust(680,700,20,150)
  paper1 = new paper(100,740,30)
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(590);
 
  text (mouseX+","+mouseY,200,50)
  
  drawSprites();
 ground1.display();
 rect1.display();
 rect2.display();
 rect3.display();
 image (dustimage,490,600,210,200)
 paper1.display();
 
}

function keyPressed(){

if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-150});



}




}






