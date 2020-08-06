class Player{

    constructor(){

        this.name = "";
        this.playerCount = null;
        this.distance = 0;

        this.rank = null;
          
    }

    getCount(){

        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){

            playerCount = data.val() 
           
        })
    }

    updateCount(count){

     database.ref("/").update({

        playerCount: count
     })
    }

    update(){

     var playerIndex = "Players/Player"+this.playerCount;
     database.ref(playerIndex).set({

        name:this.name,
        distance:this.distance
       
     })
    }

    static getPlrInfo(){

      var Plr = database.ref("Players");
       Plr.on("value",(data)=>{
        allPlayers = data.val();
       })
    }

    getCarsAtEnd(){

       database.ref("carAtEnd").on("value",(data)=>{
        

            this.rank = data.val();
        })
    }

    static updateCarAtEnd(rank){

        database.ref("/").update({
            
            carAtEnd:rank
        })


        
    }
}