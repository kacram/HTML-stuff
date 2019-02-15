//alert("yo " + yo)
//prompt("what is your name?")

//init game variables
{
    {
        var cap = {
            name: "cap",
            type: "helm",
            defence: 1,
        }
    }//head gear
    {
       var jacket = {
           name: "jacket",
           type: "chestPiece",
           defence: 2,
       } 
    }//chest pieces
    {
        
    }//gauntlets
    {
        
    }//leggings
    {
        
    }//boots
    {
        var rustySword = {
            name: "rusty sword",
            type: "weapon",
            damage: 3,
        }
    }//weapons
    {
        var momsNote = {
            name: "mom's letter",
            type: "readable",
            note: "hey kiddo, I hope you are having a great time out at the lodge. We miss you back home and hope you return soon. Your brother told me to say hi. Have fun out there."
        }
    }//readables
}//items
{
    var rHouse = 0;
    var rBasement = 1;
    var rClearing = 2;
    var rRiver = 3;
} //room numbers
{
    var dHouse = [null, null, rClearing, null, null, rBasement];
    var dBasement = [null, null, null, null, rHouse, null];
    var dClearing = [rHouse, null, rRiver, null, null, null];
    var dRiver = [rClearing, null, null, null, null, null];
} //room to room interactions
{
    var rat = {
        name: "rat",
        hp: 10,
        armour: 0,
        damage: 1,
        weapon: "teeth",
    }
} //enemies
{
    var iHouse = [null, null, null, null, null, null];
    var iBasement = [null, null, null, null, null, null];
    var iClearing = [null, null, null, null, null, null];
    var iRiver = [null, null, null, null, null, null];
} //room inventories
{
    var eHouse = null;
    var eBasement = rat;
    var eClearing = null;
    var eRiver = null;
} //room enemies
{
    //what the game tells you when you look in a room
    var lHouse = "you find yourself in a small cottage. you have been living here for the past 2 months while working for a lumber-jack in the area near here. it is a one room house with little fronananture.";
    var lBasement = "this is your basement. you keep several pickeled goods on the shelves just in case of emergency. in the corner there are several rusty swords that you used to use for practicing swordplay.";
    var lClearing = "you are in a small clearing with a densely forested area on most sides. your cottage lies to the north of here while a small spring lies to the south. there is a mountain off to the distance to the east and a village to the west.";
    var lRiver = "there is a little brook trickeling between the trees that caries down a small slope. the stream's origin is towards the east and it carries on towards the south. there is nothing but dense forest to the west. the clearing is to the north.";
}//room look scripts
{
    var House = [rHouse, iHouse, eHouse, dHouse, lHouse];
    var Basement = [rBasement, iBasement, eBasement, dBasement, lBasement];
    var Clearing = [rClearing, iClearing, eClearing, dClearing, lClearing];
    var River = [rRiver, iRiver, eRiver, dRiver, lRiver];
} //room arrays
//where the equipment is stored
var equipment = {
    helm: null,
    chestPiece: null,
    gauntlets: null,
    leggings: null,
    boots: null,
    weapon: null,
}
//where the game tracks your stats
var stats = {
    vitality: 10,
    strength: 3,
    dextarity: 2,
    charisma: 3,
    fortitude: 2,
    intellegence: 3,
}
//declares an aray where one can find information about the rooms
var rooms = [House, Basement, Clearing, River];
//sets your starting room
var room = rHouse;
//declares the player inventory
var inventory = [cap, jacket, null, null, null, null];
//get the player's name
var name = prompt("What! is your name?");
//begin the game
Game();

//the main game shell
function Game() {
    //this loop prevents the game from ending accidentally
    while (1 == 1) {
        //begin the room
        Room();
    }
}
//check which room to use and figure out how to do it
function Room() {
    //a temporary inventory variable that lists items in a room
    var tempInv = " ";
    for(i = 0; i < 6; i++){
        if(rooms[room][1][i] != null){
            if(tempInv == " "){
                tempInv += rooms[room][1][i].name;
            }
            else{
                tempInv += " and a ";
                tempInv += rooms[room][1][i].name;
            }
        }
    }
    if (tempInv == " "){
        alert(rooms[room][4]);
    }
    else{
        tempInv += ".";
        alert(rooms[room][4] + " in the room there is a " + tempInv); 
    }
    PlayerMove();
}
//take the player's input and figure out what to do
function PlayerMove() {
    while (1==1) {
        var reply = prompt("what do you do?").toLowerCase();
        //if you steal stuff
        if (reply == "take") {
            reply = prompt("what do you take?").toLowerCase();
            var i = 0;
            var k = 0;
            //for practice rusty swords
            if (reply == "rusty sword" && room == rBasement){
                for (i=0; i < inventory.length; i++){
                    if (inventory[i] == null){
                        alert ("you took the rusty sword");
                        inventory[i] = rustySword;
                        break;
                    }
                }
            }
            else for (i=0; i < 6; i++) {
                k = i;
                if (rooms[room][1][i] != null) {
                    if (rooms[room][1][i].name == reply)
                    for(i = 0; i < inventory.length; i++){
                        if(inventory[i] == null){
                            inventory[i] = rooms[room][1][k];
                            alert("you took the " + inventory[i].name);
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
                if (inventory[i] != null){
                    if (inventory[i].name == reply){
                        k = i;
                        for (i = 0; i < 6; i++) {
                            if (rooms[room][1][i] == null){
                                alert("you dropped the " + inventory[k].name);
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
        }
        //if player checks inventory
        else if (reply == "i" || reply == "inventory"){
            var tempInv = "inventory = ";
            for (i = 0; i < 6; i++){
                if (inventory[i] != null) {
                    tempInv += inventory[i].name;
                    tempInv += "  ";
                }
            }
            alert(tempInv)
        }
        //if you look around
        else if (reply == "look" || reply == "l") {
            alert(rooms[room][4] + " in the room there is a " + tempInv);
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
            if (rooms[0][3][2] != null){
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
            if (rooms[room][3][5] != null){
                room = rooms[room][3][5];
                Room();
            }
            else{
                alert ("you bore your way to the center of the earth and burn up in the mantle! GREAT JOB, you died, you dip stick.")
            }
        }
        //if you read something
        else if (reply == "read") {
            reply = prompt("what would you like to read?")
            for (i = 0; i < inventory.length; i++){
                if (inventory[i].name == reply){
                    alert(inventory[i].note);
                }
                else {
                    alert("you can't read that!");
                }   
            }
        }
        //if you want to exit
        else if(reply == "exit" || reply == "die") {
            alert("well, this is good bye then...")
            if (reply == "die"){
                alert("by the way the goal was not to die...")
                alert("you killed yourself")
            }
            page.close
        }
        //if you want to equip something
        else if(reply == "equip") {
            var yeet = null;
            reply = prompt("what do you want to equip?");
            for (i = 0; i <= inventory.length; i++){
                if (inventory[i] != null){
                    if (inventory[i].name = prompt){
                        if (inventory[i].type == "helm"){
                            yeet = inventory[i];
                            inventory[i] = equipment.helm;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else if (inventory[i].type == "chestPlate") {
                            yeet = inventory[i];
                            inventory[i] = equipment.chestPiece;
                            equipment.chestPiece = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else if (inventory[i].type == "gauntlet") {
                            yeet = inventory[i];
                            inventory[i] = equipment.gauntlets;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else if (inventory[i].type == "leggings") {
                            yeet = inventory[i];
                            inventory[i] = equipment.leggings;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else if (inventory[i].type == "boots") {
                            yeet = inventory[i];
                            inventory[i] = equipment.boots;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else if (inventory[i].type == "weapon") {
                            yeet = inventory[i];
                            inventory[i] = equipment.weapon;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                        }
                        else {
                            alert("did you just try to wear a " + reply + "?");
                        }
                    }
                }
            }
        }
        //if it don't work
        else {
            alert("i don't understand");
        }
    }
}
//enemy encounters and the following combat
function Combat() {
    var enemy = rooms[room][2];
    alert("there is a " + enemy.name);
}


