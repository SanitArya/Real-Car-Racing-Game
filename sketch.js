var ball;
var database;
var position;

var allPlayers;

var gameState = 0;
var playerCount,form,player,game;

var car1,car2,car3,car4;
var carArray;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    database = firebase.database();

    game = new Game();

    game.getState();
    game.startFunction();

    


}

function preload(){
    
    track = loadImage("images/track.jpg");
    car1I = loadImage("images/car1.png");
    car2I = loadImage("images/car2.png");
    car3I = loadImage("images/car3.png");
    car4I = loadImage("images/car4.png");
    groundI = loadImage("images/ground.png");

}

function draw(){
    background("#c68767");

    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);


    if(playerCount==4){

       game.update(1);
    }

    if(gameState==1){

        clear();
      
        game.play();
    }

    if(gameState==2){

        game.end();

    
    }

    
}




