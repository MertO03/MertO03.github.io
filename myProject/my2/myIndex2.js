var general = document.getElementById("general");

var myGif = general.querySelector("img");
var myNo = general.querySelector(".no");
var myLinks = general.querySelectorAll("a");
var myMessage = general.querySelector("#message");
var x = 0;
var y = 0;

myNo.addEventListener("mouseenter", changeIt);

function yes(){
    console.log("evetttt");
    myGif.className ="gif2";
    myNo.className = "makeinvisible";
    myLinks[0].className = "";
    myLinks[1].className = "";
    myMessage.innerHTML = "Then I always will be here right by you for all the time";
    myGif.src = "../second.gif";
}

function changeIt(){
    console.log("Burdayımmmmm");
    myRandom(600,1150);
    myNo.setAttribute('style', 'top: '+x+'px; left: '+y+'px;');
}

function myRandom(a, b){
    x = Math.floor(Math.random() * a) -500;
    y = Math.floor(Math.random() * b) -700;
    console.log(x);
    console.log(y);
}