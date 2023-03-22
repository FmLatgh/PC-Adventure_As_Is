document.getElementById("mainTitle").innerText = "Point and click adventure";

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function() {
    console.log("Clicked");
}