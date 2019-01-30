//alert("yo " + yo)
//prompt("what is your name?")

//init game variables
rooms = ['house','basement','clearing'];
room = rooms[0];
    
//begin game
Game()

function Game(){
    while (1==1){
        //begin the room
        Room();
    }
}

function Room(){
    //check which room to use and figure out how to do it
    if(room == 'house'){
        alert("you find yourself in a small room filled with cobwebs. a musty smell permiates the air. there is a corpse sitting in the corner, its eyes sunken in and its dry cold skin wrapped tightly around it. there is a trap door laying on the floor underneath a disheveled carpet that has been obviously kicked aside. there is also a door to the south of you leading into a small clearing outside.");
        PlayerMove();
    }
    else if(room == 'basement'){
        alert("you have entered a small cramped cellar full of kegs of what is presumably pickeled foods. there is a sword laying in the corner coated in rust and rediculusly dull. there is a ladder upwards and a hole in the corner that seems too small to crawl through.")
        PlayerMove();
    }
    else if(room == 'clearing'){
        alert("you find yourself outside the house in a clearing with trees surrounding the edge. the light above you is bright and beaming. there is a small creek running down the edge of the clearing and there are mountains through the trees to the north.")
        PlayerMove();
    }
}

function PlayerMove(){
    while(1==1){
        var reply = prompt("what do you do?").toLowerCase();
        
        //if you steal stuff
        if(reply == "take"){
            reply = prompt("what do you take?").toLowerCase();
            if(reply == "sword"){
                if(room == "basement"){
                    alert("you took the incredibly rusty sword. the blade breaks off as soon as you lay your grubby mits on its crumbly orange metal. you reatach the blade and place it back in the corner")
                }
            }
        }
        //if you look around
        else if(reply == "look" || reply == "l"){
            Room();
        }
        //if you go north
        else if(reply == "n" || reply == "north"){
            if (room == 'clearing'){
                room = 'house';
                Room();
            }
        }
        //if you go south
        else if(reply == "s" || reply == "south"){
            if(room == 'house'){
                room = 'clearing';
                Room();
            }
            else{
                alert("you can't go that way");
            }
        }
        //if you go up
        else if(reply == "up" || reply == "u"){
            if(room == 'basement'){
                room = 'house';
                Room();
            }
            else{
                alert("you can't go that way")
            }
        }
        //if you go down
        else if(reply == "down" || reply == "d"){
            if(room == 'house'){
                room = rooms[1];
                Room();
            }
            else{
                alert("you bore your way to the center of the earth and burn in the mantle and die! you dip stick.")
            }
        }
        //if it don't work
        else{
            alert("i don't understand");
        }
    }
}
