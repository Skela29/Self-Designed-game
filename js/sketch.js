var form, gameState=0,play
var mammals,amphibians,reptiles
function preload(){
  animalBg=loadImage("Images/AnimalBg.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
form = new Form();
game = new Game();
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
