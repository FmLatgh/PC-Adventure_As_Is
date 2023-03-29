document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 12;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

gameWindow.onclick = function(e) {
    if (mainCharacterSpeech.style.opacity == 0) {
        console.log("Clicked");
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //xpos in element
        var y = e.clientY - rect.top; //ypos in element
        
        console.log(e.target.id); //Logs ID of click
        switch(e.target.id) {
            case "door1":
                showMessage("It's so cold... I don't know where to go...")
                console.log("Door 1 clicked");
                break;
                case "door2":
                    showMessage("Right, exactly what I wanted to visit next.");
                    console.log("Door 2 clicked");
                    break;
                    default:
                        showMessage("Nothing happened.")
                        console.log("didn't click on something important!");
                        break;
        }
    }
    mainCharacter.style.left = x - offsetCharacter +"px";
    mainCharacter.style.top = y - offsetCharacter +"px";
}

function showMessage(message) {
    mainCharacterSpeech.innerHTML = message
    mainCharacterSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4000);
}

function hideMessage(){
    mainCharacterSpeech.style.opacity = 0;
}