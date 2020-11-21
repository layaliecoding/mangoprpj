
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ this.boy= loadImage("Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
function keyPressed(){
	if(KeyCode=== 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:240})
		launcherObject.attach(stoneObj.body);
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



