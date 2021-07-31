
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var score=0
banana();
obstacles();
  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,320,20,20)
  monkey.addAnimation("m",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,350,800,5)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  
}


function draw() {
  background(0)
  
  stroke("white")
  textSize=20
  fill("pink")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME: "+survivalTime,100,50)
  
  if(ground.x<0){
  ground.x=ground.width/2
 }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  
  if(monkey.isTouching(banana)){
  score=score+1
  stroke("blue")
  textSize=10
  fill("pink")
  text("SCORE: "+score,500,50)
  }
  
  if(monkey.isTouching(obstacles)){
    obstacles.destroy()
    banana.destroy()
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  
  drawSprites();
}

function banana(){
  if(frameCount %60===0){
  var banana=createSprite(400,180,10,10)
  banana.x = Math.round(random(300,500));
  banana.addImage("b", bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  banana.lifetime=200
  banana.depth=monkey.depth
  monkey.depth=monkey.depth+1
  }
}

function obstacles(){
  if(frameCount %60===0){
    var obstacles=createSprite(80,330,20,20)
    obstacles.x=Math.round(random(350,500))
    obstacles.addImage("o",obstacleImage )
    obstacles.scale=0.1
    obstacles.velocityX=-5
    obstacles.lifetime=200
    obstacles.depth=monkey.depth
    monkey.depth=monkey.depth+1
  }
}






