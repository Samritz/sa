
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,boy;
var moangoes1,moangoes2,moangoes3,moangoes4;
var moangoes5,moangoes6,moangoes7;
var stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ground = new Tree(400,650,1000,10);
tree = new Tree(750,600,10,100);
boy = new Tree(400,600,10,100);
moangoes1 = new Mangoes(740,500,10,10);
moangoes2 = new Mangoes(744,525,10,10);
moangoes3 = new Mangoes(730,515,10,10);
moangoes4 = new Mangoes(750,550,10,10);
moangoes5 = new Mangoes(790,525,10,10);
moangoes6 = new Mangoes(770,550,10,10);
moangoes7 = new Mangoes(760,515,10,10);
stone = new Stone(400,600,20,20);
	engine = Engine.create();
	world = engine.world;
	slingShot = new Rope(stone.body,{x:400,y:600});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
ground.display(); 
tree.display();
boy.display();
moangoes1.display();
moangoes2.display();
moangoes3.display();
moangoes4.display();
moangoes5.display();
moangoes6.display();
moangoes7.display();
slingShot.display();
stone.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
	}
	function mouseReleased(){
	slingShot.fly();
	}
	


