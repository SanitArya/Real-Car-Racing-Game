class Form{

    constructor(){

        this.button = createButton("Play");
        this.input =  createInput("Name");
        this.greetings = createElement("h3");
        this.reset = createButton("RESET")
    }

    display(){

        var title = createElement("h2")
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        this.button.position(displayWidth/2+30,displayHeight/2);

        this.reset.position(displayWidth/2,displayHeight/4);
        this.reset.mousePressed(()=>{

            player.updateCount(0);
            game.update(0);

            database.ref("/").child("Players").remove();
            
        });

        
        this.button.mousePressed(()=>{

            this.button.hide();
            this.input.hide();

            player.name = this.input.value();

            player.playerCount = playerCount+1;
            playerCount = playerCount+1;
            player.update();

            player.updateCount(playerCount);

            this.greetings.html("Hello "+player.name);
            this.greetings.position(displayWidth/2-70,displayHeight/4);

            
        })
    }

    hideElement(){

        this.button.hide();
        this.input.hide();
        this.greetings.hide();
    }
}