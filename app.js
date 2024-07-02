var girl = document.getElementById("girl")
var man = document.getElementById("man")
var girlPosition = 0;
var girlForward = false;
var girlBackward = false;
var girlAttack = false;
var manPosition = 80;
var manForward = false;
var manBackward = false;
var manAttack = false;

function moveMan(type){
    if(type === "manForward"){
        if(!manForward){
            // manBackward = false;
            man.src = "images/choi-move.gif";
        }
    manForward = true;
    manPosition += 5;
    man.style.height = "400px";
    man.style.width = "250px";
    man.style.top = "153px";
    man.style.right = manPosition + "px";
    }
    else if(type === "manBackward"){
        if(!manBackward){
            // manForward = false;
            man.src = "images/choi-move.gif";
        }
    manBackward = true;
    manPosition -= 5;
    man.style.height = "400px";
    man.style.width = "250px";
    man.style.top = "153px";
    man.style.right = manPosition + "px"
    }
    else if(type === "manAttack"){
        if(!manAttack){
            man.src = "images/chacha-move.gif";
        }
    man.style.height = "500px";
    man.style.width = "350px";
    man.style.top = "53px";
    manAttack = true;
    }
    }
function moveGirl(type){
if(type === "girlForward"){
    if(!girlForward){
        // girlBackward = false;
        girl.src = "images/charlotte-forward.gif";
    }
    girlForward = true;
girlPosition += 5;
girl.style.left = girlPosition + "px"
}
else if(type === "girlBackward"){
    if(!girlBackward){
        // girlForward = false;
        girl.src = "images/charlotte-backward.gif";
    }
    girlBackward = true;
girlPosition -= 5;
girl.style.left = girlPosition + "px"
}
else if(type === "girlAttack"){
    if(!girlAttack){
        girl.src = "images/char-attack.gif";
    }
    girlAttack = true;
}
}
function action(event){
    console.log(event)
if(event.key === "d"){
moveGirl("girlForward");
}
else if(event.key === "a"){
moveGirl("girlBackward");
}
else if(event.key === "e"){
    moveGirl("girlAttack");
    }
else if(event.key === "ArrowLeft"){
moveMan("manForward");
}
else if(event.key === "q"){
moveMan("manAttack");
}
else if(event.key === "ArrowRight"){
moveMan("manBackward");
}
}
window.addEventListener("keydown", action);

function resetAction(){
girl.src = "images/charlotte.png"
man.src = "images/chacha.gif"
man.style.height = "200px";
man.style.width = "300px";
man.style.bottom = "17px";
man.style.top = "auto";
 girlForward = false;
 girlBackward = false;
 girlAttack = false;
 manForward = false;
 manBackward = false;
 manAttack = false;
}
window.addEventListener("keyup", resetAction)
