var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wal2,bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite = createSprite(360,650,200,20);
	bottomSprite.shapeColor = color("red");

	wall1Sprite = createSprite(260,625,20,70);
	wall1Sprite.shapeColor = color("red");

	wall2Sprite = createSprite(460,625,20,70);
	wall2Sprite.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 bottom = Bodies.rectangle(360, 650, 200, 20 , {isStatic:true} );
	 World.add(world, bottom);

	 wall1 = Bodies.rectangle(260,640,20,100, {isStatic:true} );
	 World.add(world, wall1);

	 wall2 = Bodies.rectangle(460,640,20,100, {isStatic:true} );
	 World.add(world, wall2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,200,255);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  packageSprite.scale = 0.1;
  console.log(helicopterSprite.x);
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	}
}