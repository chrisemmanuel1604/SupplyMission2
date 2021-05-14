var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var box1b,box2b,box2b;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options ={
		restitution: 0.5
	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

    box1=createSprite(400,650,150,20);
	box1.shapeColor= "green"
	box2=createSprite(325,575,20,150);
	box2.shapeColor= "green"
	box3=createSprite(475,575,20,150);
	box3.shapeColor= "green"

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 ,package_options);
	World.add(world, packageBody);
	packageBody.isStatic = true ;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    box1b=Bodies.rectangle(400,650,150,20,{isStatic:true});
    World.add(world,box1b);
	box2b=Bodies.rectangle(325,575,20,150,{isStatic:true});
    World.add(world,box2b);
	box3b=Bodies.rectangle(475,575,20,150,{isStatic:true});
    World.add(world,box3b);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown = ("space")){
    packageBody.isStatic = false ;
    
  }
}



