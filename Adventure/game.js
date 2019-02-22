//alert("yo " + yo)
//prompt("what is your name?")
var prevRoom = 0;
//get the player's name
var name = prompt("What! is your name?");

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
        var pants = {
            name: "pants",
            type: "leggings",
            defence: 1,
        }
    }//leggings
    {
        
    }//boots
    {
        var rustySword = {
            name: "rusty sword",
            type: "weapon",
            damage: 6,
        }
        var branch = {
            name: "branch",
            type: "weapon",
            damage: 6,
        }
    }//weapons
    {
        var momsNote = {
            name: "mom's letter",
            type: "readable",
            note: "hey " + name + ", I hope you are having a great time out at the lodge. We miss you back home and hope you return soon. Your brother told me to say hi. Have fun out there."
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
        hp: 6,
        damage: 2,
        weapon: "teeth",
        fortitude: 0,
        drop: null,
    }
    var oldEnt = {
        name: "old ent",
        hp: 10,
        damage: 3,
        weapon: "limbs",
        fortitude: 2,
        drop: branch,
    }
} //enemies
{
    var iHouse = [jacket, momsNote, null, null, null, null];
    var iBasement = [null, null, null, null, null, null];
    var iClearing = [null, null, null, null, null, null];
    var iRiver = [null, null, null, null, null, null];
} //room inventories
{
    var eHouse = null;
    var eBasement = rat;
    var eClearing = null;
    var eRiver = oldEnt;
} //room enemies
{
    {
        var lHouse = "you find yourself in a small cottage. you have been living here for the past 2 months while working for a lumber-jack in the area near here. it is a one room house with little furniture. there is a rug on the floor that has been obviously kicked aside, underneath there is a trap door.";
    }//house
    {
        var lBasement = "this is your basement. you keep several pickeled goods on the shelves just in case of emergency. in the corner there are several rusty swords that you used to use for practicing swordplay.";
    }//basement
    {
        var lClearing = "you are in a small clearing with a densely forested area on most sides. your cottage lies to the north of here while a small spring lies to the south. there is a mountain off to the distance to the east and a village to the west.";
    }//clearing
    {
        var lRiver = "there is a little brook trickeling between the trees that caries down a small slope. the stream's origin is towards the east and it carries on towards the south. there is nothing but dense forest to the west. the clearing is to the north.";
    }//river
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
    hp: 10,
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
var inventory = [pants, null, null, null, null, null];

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
    if (rooms[room][2] != null){
        Combat();
    }
    //a temporary inventory variable that lists items in a room
    var tempInv = " ";
    for(i = 0; i < rooms[room][1].length; i++){
        if(rooms[room][1][i] != null){
            if(tempInv == " "){
                tempInv += rooms[room][1][i].name;
            }
            else{
                tempInv += ", a ";
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
            for (i = 0; i < inventory.length - 1; i++){
                if (inventory[i] != null) {
                    if (tempInv === "inventory = "){
                        tempInv += inventory[i].name;
                    }
                    else {
                        tempInv += ", ";
                        tempInv += inventory[i].name;
                    }
                }
            }
            {
                if (equipment.helm != null){
                    tempInv += "\nhelmet: " + equipment.helm.name;
                }
                else{
                    tempInv += "\nno helmet equiped";
                }
            }//helmet
            {
                if (equipment.chestPiece != null){
                    tempInv += "\nchest piece: " + equipment.chestPiece.name;
                }
                else{
                    tempInv += "\nno chest piece equiped";
                }
            }//chest piece
            {
                if (equipment.gauntlets != null) {
                    tempInv += "\ngauntlets: " + equipment.gauntlets.name;
                }
                else{
                    tempInv += "\nno gauntlets equiped";
                } 
            }//gauntlets
            {
                if (equipment.leggings != null){
                    tempInv += "\nleggings: " + equipment.leggings.name;
                }
                else {
                    tempInv += "\nno leggings equiped";
                }
            }//leggings
            {
                if (equipment.boots != null){
                    tempInv += "\nboots: " + equipment.boots.name;
                }
                else {
                    tempInv += "\nno boots equiped";
                }
            }//boots
            {
                if(equipment.weapon != null){
                    tempInv += "\nweapon: " + equipment.weapon.name;
                }
                else{
                    tempInv += "\nno weapon equiped";
                }
            }//weapon
            //tell the player what they have
            alert(tempInv)
        }
        //if you look around
        else if (reply == "look" || reply == "l") {
            Room();
        }
        //if you go north
        else if (reply == "n" || reply == "north") {
            if(rooms[room][3][0] != null){
                prevRoom = room;
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
                prevRoom = room;
                room = rooms[room][3][2];
                Room();
            }
            else{
                alert("you can't go that way!");
            }
        }
        //if you go east
        else if (reply == "e" || reply == "east") {
            if (rooms[room][3][1] != null){
                prevRoom = room;
                room = rooms[room][3][1];
                Room();
            }
            else{
                alert("you can't go that way!");
            }
        }
        //if you go west
        else if (reply == "w" || reply == "west") {
            if (rooms[room][3][3] != null) {
                prevRoom = room;
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
                prevRoom = room;
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
                prevRoom = room;
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
                if (inventory.i != null){
                    if (inventory[i].name == reply){
                        alert(inventory[i].note);
                        break;
                    }
                }
                else if (i == inventory.length - 1) {
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
                    if (inventory[i].name == reply){
                        if (inventory[i].type == "helm"){
                            yeet = inventory[i];
                            inventory[i] = equipment.helm;
                            equipment.helm = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (inventory[i].type == "chestPiece") {
                            yeet = inventory[i];
                            inventory[i] = equipment.chestPiece;
                            equipment.chestPiece = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (inventory[i].type == "gauntlet") {
                            yeet = inventory[i];
                            inventory[i] = equipment.gauntlets;
                            equipment.gauntlets = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (inventory[i].type == "leggings") {
                            yeet = inventory[i];
                            inventory[i] = equipment.leggings;
                            equipment.leggings = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (inventory[i].type == "boots") {
                            yeet = inventory[i];
                            inventory[i] = equipment.boots;
                            equipment.boots = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (inventory[i].type == "weapon") {
                            yeet = inventory[i];
                            inventory[i] = equipment.weapon;
                            equipment.weapon = yeet;
                            alert("You equiped the " + yeet.name + ".");
                            break;
                        }
                        else if (i == inventory.length - 1) {
                            alert("did you just try to wear a " + reply + "?");
                        }
                    }
                }
            }
        }
        //if you want to take something off
        else if(reply == "unequip" || reply == "dequip") {
            var dequipSlot = null;
            var dequip = null;
            for (i = 0; i < inventory.length - 1; i++){
                if (inventory[i] == null){
                    dequipSlot = i;
                    break;
                }
            }
            if (dequipSlot != null){
                reply = prompt("what do you dequip?");
                if (reply == "helm" || reply == "helmet"){
                    dequip = equipment.helm;
                    equipment.helm = null;
}
                else if (reply == "chest piece" || reply == "chest plate"){
                    dequip = equipment.chestPiece;
                    equipment.chestPiece = null;
}
                else if (reply == "gauntlets" || reply == "gloves"){
                    dequip = equipment.chestPiece;
                    equipment.chestPiece = null;
}
                else if (reply == "leggings" || reply == "pants"){
                    dequip = equipment.leggings;
                    equipment.leggings = null;
}
                else if (reply == "boots" || reply == "shoes"){
                    dequip = equipment.boots;
                    equipment.boots = null;
}
                else if (reply == "weapon" || reply == "sword" || reply == "axe" || reply == "hammer" || reply == "ax"){
                    dequip = equipment.weapon;
                    equipment.weapon = null;
}
                else if (equipment.helm != null && equipment.helm.name == reply){
                    dequip = equipment.helm;
                    equipment.helm = null;
}
                else if (equipment.chestPiece.name == reply){
                    dequip = equipment.chestPiece;
                    equipment.chestPiece = null;
                }
                else if (equipment.gauntlets != null && equipment.gauntlets.name == reply) {
                    dequip = equipment.gauntlets;
                    equipment.gauntlets = null;
}
                else if (equipment.leggings != null && equipment.leggings.name == reply) {
                    dequip = equipment.leggings;
                    equipment.leggings = null;
}
                else if (equipment.boots != null && equipment.boots.name == reply) {
                    dequip = equipment.boots;
                    equipment.boots = null;
}
                else if (equipment.weapon != null && equipment.weapon.name == reply){
                    dequip = equipment.weapon;
                    equipment.weapon = null;
                }
                if (dequip != null) {
                    inventory[dequipSlot] = dequip;
                    alert("you dequiped the " + dequip.name)
                    PlayerMove();
                }
            }
            else{
                alert("either you typed something wrong, you have a full inventory, or I goofed.")
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
    var atkPwr = 0;
    var fistAtk = 0;
    var enemyAtk = 0;
    var defence = 0;
    var enemy = rooms[room][2];
    alert("careful, there is a " + enemy.name + " prone to strike!");
    alert("the " + enemy.name + " has " + enemy.hp + " hp");
    {
        if(equipment.helm != null){
            defence += equipment.helm.defence;
        }
        if (equipment.chestPiece != null){
            defence += equipment.chestPiece.defence;
        }
        if (equipment.gauntlets != null){
            defence += equipment.gauntlets.defence;
        }
        if (equipment.leggings != null) {
            defence += equipment.leggings.defence;
        }
        if (equipment.boots != null) {
            defence += equipment.boots.defence;
        }
    }//calculate defence
    while (1==1){
        function PlayerTurn(){
            while (1==1){
                reply = prompt("what do you do?");
                if (reply == "attack"){
                    if (equipment.weapon != null){
                        atkPwr = equipment.weapon.damage * stats.strength * 0.25;
                        atkPwr += Randy(atkPwr/5,-atkPwr/5);
                        atkPwr -= enemy.fortitude;
                        atkPwr = Math.round(atkPwr);
                    if (atkPwr <= 0){
                        atkPwr = 0;
                    }
                    enemy.hp -= atkPwr;
                    alert("you attacked the " + enemy.name + " with your " + equipment.weapon.name + " for " + atkPwr + "!");
                    alert("the " + enemy.name + " has " + enemy.hp + " hp");
                    break;
                }
                    else{
                    fistAtk = Randy(4,0);
                    enemy.hp -= fistAtk;
                    alert("you punched the " + enemy.name + " for " + fistAtk + "!")
                    alert("the " + enemy.name + " has " + enemy.hp + " hp");
                }
}
                else if (reply == "block" || reply == "defend"){
                    if (equipment.weapon != null){
                        defPwr = stats.fortitude + defence + equipment.weapon.damage;
                    }
                    else {
                        defPwr = stats.fortitude + defence + Randy(2,0);
                    }
                    break;
                }
                else if (reply == "flee" || reply == "run") {
                    stats.hp -= 3;
                    alert("you escaped ungracefully taking 3 damage");
                    room = prevRoom;
                    Room();
                }
                else{
                    alert ("don't just stand there, DO SOMETHING!");
                }
            }
            if (defPwr == 0){
                defPwr = stats.fortitude + defence;
            }
            
        }//player's turn
        
        var defPwr = 0;
        PlayerTurn();
        
        if (enemy.hp <= 0){
            alert("the enemy bit the dust");
            if (enemy.drop != null){
                for (i = 0; i < rooms[room][1].length - 1; i++){
                    if (rooms[room][1][i] == null){
                        rooms[room][1][i] = enemy.drop;
                        alert("the enemy dropped a " + enemy.drop.name);
                        break;
                    }
                }
            }
            break;
        }
        
        {
            enemyAtk = enemy.damage + Randy(enemy.damage/3,enemy.damage/3);
            enemyAtk -= defPwr;
            if (enemyAtk <= 0){
                enemyAtk = 0;
            }
            stats.hp -= enemyAtk;
            alert("you were attacked for " + enemyAtk + " damage! \nyou now have " + stats.hp + " hp.")
        }//enemy's turn
        if (stats.hp <= 0){
            alert("you have been defeated in combat!");
            page.close;
        }
    }
    rooms[room][2] = null;
    Room();
}

function Randy(max,min){
    return Math.round(Math.random() * (max - min)  + min);
}

