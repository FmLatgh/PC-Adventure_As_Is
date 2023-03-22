document.getElementById("mainTitle").innerText = "Point and click adventure";

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e) {
    console.log("Clicked");
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //xpos in element
    var y = e.clientY - rect.top; //ypos in element
    console.log(x + " " + y);

}