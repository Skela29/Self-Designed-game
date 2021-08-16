class Game{
    constructor(){

    }
    
    play(){
        background(animalBg)
        mammals = createSprite(displayWidth/2-250,displayHeight/2,50,50)
        amphibians = createSprite(displayWidth/2,displayHeight/2,50,50)
        reptiles = createSprite(displayWidth/2+250,displayHeight/2,50,50)
        drawSprites();
        }
}