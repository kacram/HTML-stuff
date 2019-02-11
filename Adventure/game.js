//alert("yo " + yo)
//prompt("what is your name?")

//init game variables
{
    var rat = {
        hp: 10,
        armour: 0,
        damage: 1,
        weapon: null,
    }
} //enemies
{
    var iHouse = [null, null, "corpse", null, null, null];
    var iBasement = ["sword", null, null, null, null, null];
    var iClearing = ["flower", null, null, null, null, null];
    var iRiver = ["rock", "moss", null, null, null, null];  
} //room inventories
{
    var dHouse = [null, null, rClearing, null, null, rBasement];
    var dBasement = [null, null, null, null, rHouse, null];
    var dClearing = [rHouse, null, rRiver, null, null, null];
    var dRiver = [rClearing, null, null, null, null, null];
} //room to room interactions
{
    var rHouse = 0;
    var rBasement = 1;
    var rClearing = 2;
    var rRiver = 3;
} //room numbers
{
    var eHouse = null;
    var eBasement = rat;
    var eClearing = null;
    var eRiver = null;
} //room enemies
{
    var House = [rHouse, iHouse, eHouse, dHouse];
    var Basement = [rBasement, iBasement, eBasement, dBasement];
    var Clearing = [rClearing, iClearing, eClearing, dClearing];
    var River = [rRiver, iRiver, eRiver, dRiver];
} //room arrays


var rooms = [House, Basement, Clearing, River];
var room = rHouse;
var inventory = ["letter", null, null, null, null, null];

var jimathy = false;

var name = prompt("What! is your name?");
//begin the game
Game();


function Game() {
    while (1 == 1) {
        //begin the room
        Room();
    }
}
//check which room to use and figure out how to do it
function Room() {
    //a temporary inventory variable that lists items in a room
    var tempInv = " ";
    for(i = 0; i < inventory.length; i++){
        if(rooms[room][1][i] != null){
            if(tempInv == " "){
                tempInv += rooms[room][1][i];
            }
            else{
                tempInv += " and a ";
                tempInv += rooms[room][1][i];
            }
        }
    }
    if (room == rHouse) {
        if (jimathy == false){
            alert("you find yourself in a small room filled with cobwebs. a musty smell permiates the air. there is a corpse sitting in the corner, its eyes sunken in and its dry cold skin wrapped tightly around it. there is a trap door laying on the floor underneath a disheveled carpet that has been obviously kicked aside. there is also a door to the south of you leading into a small clearing outside. on the floor there is a " + tempInv);
        }
        else{
            alert("you find yourself in your holiday cabin. you have been here for years. times have been tough on you and your friend. Jimathy is laying dead in the corner. he has been there since the week after you got there. on the floor there ia a " + tempInv)
        }
        PlayerMove();
    }
    else if (room == rBasement) {
        alert("you have entered a small cramped cellar full of kegs of what is presumably pickeled foods. there is a sword laying in the corner coated in rust and rediculusly dull. there is a ladder upwards and a hole in the corner that seems too small to crawl through. in the kegs there is a " + tempInv + ".");
        PlayerMove();
    }
    else if (room == rClearing) {
        alert("you find yourself outside the house in a clearing with trees surrounding the edge. the light above you is bright and beaming. there is a small creek running down the edge of the clearing and there are mountains through the trees to the north.there is a" + tempInv + " laying in the grass.");
        PlayerMove();
    }
    else if (room == rRiver) {
        alert("you find yourself standing next to a small stream. the cool water is trickeling lightly over some mossy stones imbedded in the river bed. there is a" + tempInv + ".")
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
                if (rooms[room][1][i] == reply) {
                    for(i = 0; i < inventory.length; i++){
                        if(inventory[i] == null){
                            inventory[i] = rooms[room][1][k];
                            alert("you took the " + inventory[i]);
                            rooms[room][1][k] = null;
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
        //if the player drops an item
        else if (reply == "drop" || reply == "throw"){
            reply = prompt("What do you want to drop?");
            var i = 0;
            var k = 0;
            for (i=0; i < 6; i++) {
                if (inventory[i] == reply){
                    k = i;
                    for (i = 0; i < 6; i++) {
                        if (rooms[room][1][i] == null){
                            alert("you dropped the " + inventory[k]);
                            rooms[room][1][i] = inventory[k];
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
            if(rooms[room][3][0] != null){
                room = rooms[room][3][0];
                Room();
            }
            else{
                alert("you can't go that way!")
            }
        }
        //if you go south
        else if (reply == "s" || reply == "south") {
            if (rooms[room][3][2] != null){
                room = rooms[room][3][2];
                Room();
            }
            else{
                alert("you can't go that way!")
            }
        }
        //if you go east
        else if (reply == "e" || reply == "east") {
            if (rooms[room][3][1] != null){
                room = rooms[room][3][1];
                Room();
            }
            else{
                alert("you can't go that way!")
            }
        }
        //if you go west
        else if (reply == "w" || reply == "west") {
            if (rooms[room][3][3] != null) {
                room = rooms[room][3][3];
                Room();
            }
            else {
                alert("you can't go that way!");
            }
        }
        //if you go up
        else if (reply == "up" || reply == "u") {
            if (rooms[room][3][4] != null) {
                room = rooms[room][3][4];
                Room();
            }
            else {
                alert("you can't fly man!")
            }
        }
        //if you go down
        else if (reply == "down" || reply == "d") {
            alert(rooms[room][3][5])
            if (rooms[room][3][5] != null){
                room = rooms[room][3][5];
                Room();
            }
            else{
                alert ("you bore your way to the center of the earth and burn up in the mantle! GREAT JOB, you died, you dip stick.")
            }
        }
        //if you read something
        else if (reply == "read"){
            reply = prompt("what would you like to read?")
            if (reply == "letter"){
                for(i = 0; i < 6; i++){
                    if(inventory[i] == "letter"){
                        alert('the letter reads as follows. "I hope you are having a great time out in the woods with your best friend jimathy von bricklestein! Your sister keeps asking me when you are going to get back. The house is so empty without your cheery presence. I hope you return safely from your hunting trip." the date at the bottom says 1/11/13. the current date is 1/30/19.')
                        jimathy = true;
                        for(i = 6; i < 6; i++) {
                            if (inventory[i] == "corpse") {
                                inventory[i] = "jimathy";
                            }
                            if (rooms[rHouse][1][i] == "corpse") {
                                rooms[rHouse][1][i] = "jimathy";
                            }
                        }
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
        //if you eat something
        else if(reply == "eat"){
            reply = prompt("what do you satisfy your hunger with?")
            if (reply == "corpse" || reply == "jimathy"){
                for(i=0; i < 6; i++){
                    if (inventory[i] == "corpse" || inventory[i] == "jimathy"){
                        alert("you take a bite of its worm eaten skin. it is cold and slimy skin makes you gag as it slides slowly down your throught. you take bite after bite, each one making you more sick than the last.")
                        inventory[i] = null;
                    }
                }
            }
            else{
                alert ("you can't bring yourself that low.")
            }
        }
        //if it don't work
        else{
            alert("i don't understand");
        }
    }
}



