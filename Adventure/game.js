//writes a thing to a thing
document.write("<h1>YOU HAVE A FACE! got em<h1/>");
//kissing is just sucking someone else's face
//var yo="mamma";
//alert("yo " + yo)

hp = 10;
room = "ship";
cutlass = false;

name = prompt("what be your callin' tag mate?")
while(1==1){
    if(confirm("so your name be " + name + "?")){
        break;
    }
    else{
        name = prompt("so what be yer blasted name then?")
    }
}

alert("strange name. yee mustn't be from 'round these parts... in any case, WELCOME TO MEE CREW!")
alert("well " + name + " I just found ye in a pile of embers over yonder. one of me careless crew mates may have accidentaly knocked ye out when burnin' down yer parents house. they are dead now and we have managed to get ye to sign on to the crew in your half awoken stupor.")
while(1==1)
{
    if(hp <= 0){
        alert("whelp, you just died. Fun.....")
        break;
    }
    if(room == "ship")
    {
        answer = prompt("'What do I do?' you ask to yourself")
        //punching pirate
        if (answer == "punch pirate")
        {
            alert("'Yarg!' he screams as he playfully punches you back. you take one damage.")
            hp -= 1;
        }
        //asking health
        else if(answer == "hp"){
            alert("your hp is " + hp)
        }
        //help menu
        else if(answer == "help"){
            alert("punch, hp, help, north, n, south, s, east, e, west, w")
        }
        //north
        else if(answer == "north" || answer == "n"){
            alert("you find yourself walking the plank. this is not a good place for you to be as a pirate jumps up on the plank and begins slowly shoving you towards the edge")
            prompt("what do you do?")
            alert("it dosen't matter anyways as he just gives one mighty shove and you plummit into the cold unforgiving depths below. by the time the captain hears your screaming you have already taken 2 damage.")
            hp -= 2;
        }
        //south
        else if(answer == "south" || answer == "s"){
            alert("you are now on the docks. have fun.")
            room = "docks1"
        }
        //east
        else if(answer == "east" || answer == "e"){
            alert("you find yourself in the captain's quarters. it is nice and roomy inside and is filled with little photos of a young girl, presumably the captain's daughter. you notice a cutlas in the corner.")
            room = "captainsquarters1"
        }
        //west
        else if(answer == "west" || answer == "w"){
           alert("welcome to the back of the ship... there is nothing here. you go back.") 
        }
        //typing something dumb
        else{
            alert("what?")
        }
        
        //captain's quarters 1
        if(room == "captainsquarters1"){
            answer = prompt("so what do you think you can descretely get away with inside this man's humble abode")
            if (answer == "steal cutlass"){
                if(cutlass == false){
                    alert("you quickly run over and grab the cutlass. its steel gleams in the small ray of sunlight coming from the slightly cracked window behind you. ")
                    cutlass = true;
                }
                else if(cutlass == true){
                    alert("you already did that!")
                }
                
            }
            else if(answer == "help"){
                alert("steal, help, east")
            }
            else if(answer == "e" || answer == "east"){
                alert("you find yourself back on the deck of the ship")
            }
        }
    }
}


//alert("WOAH, YOU GOTA GET YOUSELF OUT A HERE");
//confirm("WHERE DO YOU WANT TO GO???????/???/???//??/??/?");
//prompt("WHERE DO YOU WANT TO GO??? THAT WASN'T A REAL ANSWER");