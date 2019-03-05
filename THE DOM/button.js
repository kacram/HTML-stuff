var reply = "no";

function Yeet() {
    reply = prompt("Did you just push my button!?").toLowerCase;
    if (reply == "yes" || reply == "y") {
        alert("WHY?");
        document.getElementById("img").src = "anger.jpg"
    }
    else if (reply == "no" || reply == "n") {
        alert("oh... alright then");
    }
    else{
        alert("Stop speaking in tongues");
    }
}
