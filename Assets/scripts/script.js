var startButton = document.getElementById("startButton");


function startGame() {
    window.location.href = "quiz-content.html";
    console.log("start");
}

startButton.addEventListener("click", startGame);