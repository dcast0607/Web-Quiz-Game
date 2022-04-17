function startGame() {
    $("#welcomeMessageBox").addClass("hidden");
    $("#startButton").addClass("hidden");
    $("#countDownTimerBox").removeClass("hidden");
    $("#startButtonContainer").addClass("hidden");
    var startTimer = 10;
    setInterval (function(){
        if (startTimer > 0) {
            startTimer--;
            $("#secondsLeftStart").text(startTimer);
            console.log(startTimer);
        }

        else {
            $("#quizContentBox").removeClass("hidden");
            $("#nextButton").removeClass("hidden");
            $("#countDownTimerBox").addClass("hidden");
            $("#nextButtonContainer").removeClass("hidden");
            clearInterval();
        }

    }, 1000)

}

startButton.addEventListener("click", startGame);