//alert("yo " + yo)
//prompt("what is your name?")

//init game variables
rooms = ['house','basement','clearing'];
room = rooms[0];
    
//begin game
Game()

function Game(){
    while (1==1){
        Room();
    }
}

function Room(){
    if(room = 'house'){
        alert("you find yourself in a small room filled with cobwebs. a musty smell permiates the air. there is a corpse sitting in the corner, its eyes sunken in and its dry cold skin wrapped tightly around it.")
        PlayerMove();
    }
}

function PlayerMove(){
    while(1==1){
        var reply = prompt("what do you do?").toLowerCase();
        
        if(reply == "s" || reply == "south"){
            switch(room){
                case'house':
                    room = rooms[1];
                break;
                default:
                    alert("you can't go that way")
                break;
            }
        }
        
        if(reply == "take"){
            reply = prompt("what do you take?").toLowerCase();
            if(reply = "sword"){

            }
        }
        else{
            alert("i don't understand");
        }
    }
}
