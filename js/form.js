class Form{
    constructor(){
        this.title=createElement('h1')
        this.button1=createButton('Animals')
        this.button2=createButton('Harry Potter')
        this.button3=createButton('Stationary')
    }
    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.title.hide();
    }
    display(){
        this.title.html("CHOOSE A CATTAGORY")
        this.title.position(displayWidth/2-50,0)
        this.button1.position(displayWidth/2-150,displayHeight/2)
        this.button2.position(displayWidth/2,displayHeight/2)
        this.button3.position(displayWidth/2+150,displayHeight/2)
        this.button1.mousePressed(()=>{
            this.hide();
            gameState=1
        })
    }
}