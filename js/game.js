class Game{
    constructor(){

    }
    start(){
        mammals = createSprite(displayWidth/2-250,displayHeight/2,50,50)
        mammals.addImage(mammalsImg)
        mammals.scale=0.1
        amphibians = createSprite(displayWidth/2,displayHeight/2,50,50)
        amphibians.addImage(amphibiansImg)
        amphibians.scale=0.1
        reptiles = createSprite(displayWidth/2+250,displayHeight/2,50,50)
        reptiles.addImage(reptilesImg)
        reptiles.scale=0.1
        frog = createSprite(width-100,height-100)
        frog.addImage(frogImg)
        frog.scale=0.3
        cow = createSprite(200,height/2+50)
        cow.addImage(cowImg)
        cow.scale=0.4
        snake = createSprite(width-250,height/4-40)
        snake.addImage(snakeImg)
        snake.scale=0.5  
    }
    play(){
        background(animalBg)
        textSize(30)
        text("Score:"+score,50,50)

// Cow
        if(cow.isTouching(mammals)){
            cow.destroy();
            score = score+10
        }
        if(cow.isTouching(reptiles)||cow.isTouching(amphibians)){
            cow.x = 200
            cow.y = height/2+50
            score-=5
        }
        if(mousePressedOver(cow)){
            cow.x=mouseX
            cow.y=mouseY
        }
// Snake
        if(snake.isTouching(reptiles)){
            snake.destroy();
            score = score+10
        }
        if(snake.isTouching(reptiles)||snake.isTouching(reptiles)){
            snake.x = width-250
            snake.y = height/4-40
            score-=5
        }
        if(mousePressedOver(snake)){
            snake.x=mouseX
            snake.y=mouseY
        }
// Frog
        if(frog.isTouching(amphibians)){
            frog.destroy();
            score = score+10
        }
        if(frog.isTouching(amphibians)||frog.isTouching(amphibians)){
            frog.x = width-100
            frog.y = height-100
            score-=5
        }
        if(mousePressedOver(frog)){
            frog.x=mouseX
            frog.y=mouseY
        }
        drawSprites();
        }
}