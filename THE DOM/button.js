var pressed = 0;

document.getElementById("p1").style.fontSize = "Larger";
document.getElementById("p2").style.fontSize = "Large";
document.getElementById("p3").style.fontSize = "Smaller";
document.getElementById("p1").style.color = "green";
document.getElementById("p2").style.color = "cyan";
document.getElementById("p3").style.color = "grey";
document.getElementById("p1").style.font = "Arial";
document.getElementById("p2").style.font = "Comic Sans MS";
document.getElementById("p4").style.font = "Webdings";
function Yeet() {
    document.getElementById("p1").textContent = "";
    document.getElementById("p2").textContent = "";
    document.getElementById("p3").textContent = "";
    document.getElementById("p4").textContent = "";
    pressed += 1;
    switch (pressed){
        case 1:
            document.getElementById("Reply").textContent = "Why did you push my button?";
            document.getElementById("Reply").style.fontSize = "Larger";
            document.getElementById("Reply").style.color = "red";
            document.getElementById("img").src = "Pics/anger.jpg";
        break;
        case 2:
            document.getElementById("Reply").textContent = "STOP!!!";
        break;
        case 3:
            document.getElementById("Reply").textContent = "WHY DO YOU DO THIS TO ME!!!";
        break;
        case 4:
            document.getElementById("Reply").textContent = "*grunts*";
        break;
            document.getElementById("Reply").textContent = "*throws keyboard in frustration*";
        break;
        case 5:
            document.getElementById("Reply").textContent = "*dies of stroke*";
        break;
        default:
            document.getElementById("Reply").textContent = "";
            document.getElementById("img").src = "Pics/confusion.jpg";
        break;
    }
    
}
