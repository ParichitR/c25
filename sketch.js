
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  leftRect=new Dustbin(720,340,20,100)
  downRect=new Dustbin(800,375,160,20)
  rightRect=new Dustbin(880,340,20,100)

  paperBall=new Paper(200,100,40)

  ground=new Ground(500,390,1000,15)

  
  
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  //leftRect.display()
  downRect.display()
 // rightRect.display()

 
  
  
  paperBall.display()

  ground.display()
  

  
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:350,y:-200   })
  }
}


