var form, gameState=0,play
var mammals,amphibians,reptiles
var cow,snake,frog
var score=0
function preload(){
  animalBg=loadImage("Images/AnimalBg.jpg")
  cowImg = loadImage("Images/Cow.png")
  frogImg = loadImage("Images/frog.png")
  snakeImg = loadImage("Images/Snake.png")

  reptilesImg = loadImage("Images/Reptile.png")
  amphibiansImg = loadImage("Images/Amphibian.png")
  mammalsImg = loadImage("Images/Mammals.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight-50);
form = new Form();
game = new Game();
game.start();
}

function draw() {
  background(255,255,255); 
  if(gameState==1){
game.play();
  } 
  if(gameState==0){
    form.display();
  }
}
