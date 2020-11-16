var ObstaclesGroup,ObstacleGroup2;
var score = 0
var Obstacles,Obstacle2;
var tankimg1,tankimg2,bomb;
var gameState="stage1";
var base
var lifetime = 10
var Stage2
var GameOver
var castle
function preload(){
 tankimg1=loadImage("images/Tank1.png");
 bomb=loadImage("images/Bomb.png");
 castleImg=loadImage("images/Castle.png");
 DestroyedcastleImg=loadImage("images/Destroyed.png");

}

function setup(){
 createCanvas(1500,800);
 castle=createSprite(200,height/2);
 castle.addImage(castleImg);
 castle.scale=2;
 Stage2=createSprite(800,300,30,30);
 Stage2.visible=false;
 ObstaclesGroup = new Group();
 ObstacleGroup2 = new Group();
}


function draw(){
 background("blue");
 textSize(28)
 fill('black')
 text("lifetime  "+lifetime,800,30)
 console.log(lifetime);
 
 if (lifetime===0){
     gameState="end"
 }
 if (gameState==="end"){
     castle.scale=1;
     castle.addImage(DestroyedcastleImg);
     GameOver=createSprite(800,50,20,20);
     ObstaclesGroup.destroyEach();
     
 }
 for(var i = 0;i<ObstaclesGroup.length;i++){
     if (ObstaclesGroup.get(i).isTouching(castle)){
         ObstaclesGroup.get(i).destroy();
         lifetime--
     }
 }
 if (score === 3)
 {
gameState="stage2";
 }
 if (gameState==="stage2"){
     ObstaclesGroup.setVelocityXEach(0);
     Stage2.visible=true
 }
 if (mousePressedOver(Stage2)){
     Stage2game();
 }

 
 if (gameState==="stage1"||gameState==="stage2")
 {
 spawnObstacles();

 }
 if (mousePressedOver(Obstacles))
 {
     score++
     Obstacles.destroy();
     Obstacles = null;
 }
 /*if (mousePressedOver(Obstacle2))
 {
     score--
     Obstacle2.destroy();
     Obstacle2 = null
 }*/
 drawSprites();
 textSize(20);
 fill("red")
 text("score  "+score,100,20)
}
 function Stage2game()
 {
     Stage2.destroy();
     score=0 
     lifetime=5
     ObstaclesGroup
 }
function spawnObstacles(){

 if  (frameCount%60 === 0){
 Obstacles = createSprite(1500,200,20,20);
 Obstacles.addImage(tankimg1);
 Obstacles.scale=0.3
 Obstacles.lifetime=500
var rand = random(600,300)
Obstacles.y=rand;
if (gameState==="stage1"){
Obstacles.velocityX=-5
}
else if(gameState==="stage2"){
    Obstacles.velocityX=-10;

}


ObstaclesGroup.add(Obstacles);
   } 
}
/*function spawnObstacles2()
{
    if (frameCount%60 === 0)
    {
Obstacle2 = createSprite(0,200,30,30);
Obstacle2.addImage(bomb);
Obstacle2.scale=0.1
var rand2 = random(0,800);
Obstacle2.lifetime=500
Obstacle2.y=rand2;
Obstacle2.velocityX=5;
ObstacleGroup2.add(Obstacle2);
    }
}*/
