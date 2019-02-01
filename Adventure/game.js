//alert("yo " + yo)
//prompt("what is your name?")

//init game variables
var iHouse = ["yeet", "corpse", "yeet", "yeet", "yeet", "yeet"];
var iBasement = ["sword", null, null, null, null, null];
var iClearing = ["flower", null, null, null, null, null];
var rHouse = 0;
var rBasement = 1;
var rClearing = 2;
var rooms = [iHouse, iBasement, iClearing];
var room = rHouse;
var inventory = ["a letter from mom", null, null, null, null, null];


var name = prompt("What! is your name?");
var quest = prompt("What! is your quest?");
var favColor = prompt("What! is your favorite color?")
//begin the game
Game();


function Game() {
    while (1 == 1) {
        //begin the room
        Room();
    }
}

function Room() {
    //check which room to use and figure out how to do it
    if (room == rHouse) {
        alert("you find yourself in a small room filled with cobwebs. a musty smell permiates the air. there is a corpse sitting in the corner, its eyes sunken in and its dry cold skin wrapped tightly around it. there is a trap door laying on the floor underneath a disheveled carpet that has been obviously kicked aside. there is also a door to the south of you leading into a small clearing outside.");
        PlayerMove();
    }
    else if (room == rBasement) {
        alert("you have entered a small cramped cellar full of kegs of what is presumably pickeled foods. there is a sword laying in the corner coated in rust and rediculusly dull. there is a ladder upwards and a hole in the corner that seems too small to crawl through.");
        PlayerMove();
    }
    else if (room == rClearing) {
        alert("you find yourself outside the house in a clearing with trees surrounding the edge. the light above you is bright and beaming. there is a small creek running down the edge of the clearing and there are mountains through the trees to the north.");
        PlayerMove();
    }
    else{
        alert("you are floating in an infinite black obys, have fun!")
    }
}

function PlayerMove() {
    while (1==1) {
    var reply = prompt("what do you do?").toLowerCase();

    //if you steal stuff
    if (reply == "take") {
        reply = prompt("what do you take?").toLowerCase();
        var i = 0;
        var k = 0;
            for (i=0; i < 6; i++) {
                k = i;
                if (rooms[room][i] == reply) {
                    for(i = 0; i < 6; i++){
                        if(inventory[i] == null){
                            inventory[i] = rooms[room][k];
                            alert("you took the " + inventory[i]);
                            rooms[room][k] = null;
                            PlayerMove();
                        }
                        else if(i == 5){
                            alert("your inventory is full. why don't you drop some items?")
                        }
                    }
                }
                else if(k == 5){
                    alert("I don't see any " + reply + "s in here!");
                }
            }
        }
        else if (reply == "drop" || reply == "throw"){
            reply = prompt("What do you want to drop?");
            var i = 0;
            var k = 0;
            for (i=0; i < 6; i++) {
                if (inventory[i] == reply){
                    k = i;
                    for (i = 0; i < 6; i++) {
                        if (rooms[room][i] == null){
                            alert("you dropped the " + inventory[k]);
                            rooms[room][i] = inventory[k];
                            inventory[k] = null;
                            PlayerMove();
                        }
                        else if(i == 5){
                            alert ("THE FLOOR IS COVERED IN CRAP YOU HOARDER!");
                        }
                    }
                }
                else if(i == 5){
                    alert("when did you get that? last I checked you didn't.")
                }
            }
        }
        //if player checks inventory
        else if (reply == "i" || reply == "inventory"){
            var tempInv = "inventory = ";
            for (i = 0; i < 6; i++){
                if (inventory[i] != null) {
                    tempInv += inventory[i];
                    tempInv += "  ";
                }
            }
            alert(tempInv)
        }
        //if you look around
        else if (reply == "look" || reply == "l") {
            Room();
        }
        //if you go north
        else if (reply == "n" || reply == "north") {
            if (room == rClearing) {
                room = rHouse;
                Room();
            }
        }
        //if you go south
        else if (reply == "s" || reply == "south") {
            if (room == rHouse) {
                room = rClearing;
                Room();
            }
            else{
                alert("you can't go that way");
            }
        }
        //if you go up
        else if (reply == "up" || reply == "u") {
            if (room == rBasement) {
                room = rHouse;
                Room();
            }
            else{
                alert("you can't go that way")
            }
        }
        //if you go down
        else if (reply == "down" || reply == "d") {
            if (room == rHouse) {
                room = rBasement;
                Room();
            }
            else{
                alert("you bore your way to the center of the earth and burn in the mantle and die! you dip stick.")
            }
        }
        else if (reply == "read"){
            reply = prompt("what would you like to read?")
            if (reply == "a letter from mom" || reply == "mom's letter" || reply == "moms letter" || reply == "letter"){
                for(i = 0; i < 6; i++){
                    if(inventory[i] == "a letter from mom"){
                        alert('the letter reads as follows. "I hope you are having a great time out in the woods with your best friend jimmathy von bricklestein! Your sister keeps asking me when you are going to get back. The house is so empty without your cheery presence. I hope you return safely from your hunting trip." the date at the bottom says 1/11/13. the current date is 1/30/19.')
                        break;
                    }
                    else if(i == 6){
                        alert("you don't have that.")
                    }
                }
            }
            else{
                alert("you can't read that!")
            }
        }
        //if it don't work
        else{
            alert("i don't understand");
        }
    }
}



