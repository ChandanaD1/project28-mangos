
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy, tree;

function preload()
{
  boy = loadImage("images/boy.png")
  tree = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(650,700,1300,20);
  
	stone1 = new Stone(250,490,30)

	mango1 = new Mango(700,300,30);
	mango2 = new Mango(750,160,30);
	mango3 = new Mango(800,250,30);
	mango4 = new Mango(990,300,30);
	mango5 = new Mango(890,180,30);
	mango6 = new Mango(950,50,30);
  mango7 = new Mango(1050,150,30);
  mango8 = new Mango(1150,250,30)

	sling = new SlingShot(stone1.body,{x:250,y:490})
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine)

  ground1.display();

  image(tree,600,0,600,700)
  image(boy,200,400,250,350)

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  sling.display();

  detectCollision(stone1,mango1) 
  detectCollision(stone1,mango2) 
  detectCollision(stone1,mango3) 
  detectCollision(stone1,mango4) 
  detectCollision(stone1,mango5) 
  detectCollision(stone1,mango6) 
  detectCollision(stone1,mango7) 
  detectCollision(stone1,mango8) 

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectCollision(stone,mango) {
    var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y) 
    if(distance<=mango.radius+stone.radius) {
      Matter.Body.setStatic(mango.body,false)
    }
}
