class Game{

    constructor(){}

    getState(){

        var gameStateRefer = database.ref("gameState");

        gameStateRefer.on("value",function(data){

            gameState = data.val()

        })
    }

    update(state){

        database.ref("/").update({

            gameState: state
        })    
    }

    async startFunction(){

        if(gameState==0){

            form = new Form();
            form.display();

            var playerCountRef = await database.ref("playerCount").once("value")
            player = new Player();
            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                player.getCount();
            }    
        }

        car1 = createSprite(100,200,10,20);
        car1.addImage("car1I",car1I);

        car2 = createSprite(200,200,10,20);
        car2.addImage("car2I",car2I);
       

        car3 = createSprite(300,200,10,20);
        car3.addImage("car3I",car3I);

        car4 = createSprite(400,200,10,20);
        car4.addImage("car4I",car4I);

        carArray = [car1,car2,car3,car4];
    }

    play(){

        form.hideElement();

        text("GameStart",120,100);
        Player.getPlrInfo();

        player.getCarsAtEnd();

        if(allPlayers != undefined){

            background(198,135,103)

            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var displayPos = 130;

            var x = 175,y = 0,index = 0;
            

            for(var plr in allPlayers){

                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;

                carArray[index-1].x = x;
                carArray[index-1].y = y;

                if(index==player.playerCount){
                ellipse(x,y,80,80);
                carArray[index-1].shapeColor = "Green";
                camera.position.x = displayWidth/2;
                camera.position.y = carArray[index-1].y;
                }

                
            }
        }

        if(keyDown(UP_ARROW)&&(player.playerCount!=null)){

            player.distance = player.distance+20;

            player.update()

            console.log(player.distance)
        }

        if(player.distance>3000){

            database.ref("/").update({

            gameState:2,
            carAtEnd: rank
            
            })

            
           player.rank +=1;

            Player.updateCarAtEnd(player.rank)
        }

        drawSprites();
    }

    end(){

    console.log(player.rank)
        
    }
}