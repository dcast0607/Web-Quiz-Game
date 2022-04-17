var myQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: [
            {text: "strings", correct: false },
            {text: "boolean", correct: false },
            {text: "alerts", correct: true },
            {text: "numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: [
            {text: "quotation marks", correct: false },
            {text: "curly brackets" , correct: false },
            {text: "parentheses", correct: true },
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: [
            {text: "numbers and strings", correct: false },
            {text: "other arrays", correct: false },
            {text: "booleans", correct: false },
            {text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true },
            {text: "parentheses", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: [
            {text: "Javascript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console log", correct: true }
        ]
    }
];

//We are first setting an initial game timer of 20 seconds
//We are also showing this timer to the user. 
function getNextQuestion () {
    var timer = 20;
    $("#globalTimer").removeClass("hidden");
    $("#nextButton").addClass("hidden");
    
    var globalTimerInterval = setInterval (function(){
        if (timer > 0) {
            timer--;
            $("#globalTimer").text("Timer: " + timer);

        } 
        if ( timer == 0 ) {
            console.log(timer);
            clearInterval(globalTimerInterval);
            $("#nextButton").removeClass("hidden");
        }
    }, 1000)

}

//Once game is started we want to present the user with a countdown timer. The timer
//time will count down and we will begin the game after the countdown. 
//The first few things we are doing int his function is hiding and revealing a bunch
//relevant containers. We are also providing a countdown before the game starts.
//Once initial timer has finished we invoke the "getNextQuestion" function to display
//the questions. 
function startGame() {
    $("#welcomeMessageBox").addClass("hidden");
    $("#startButton").addClass("hidden");
    $("#countDownTimerBox").removeClass("hidden");
    $("#startButtonContainer").addClass("hidden");
    var startTimer = 10;
   var startTimerInterval = setInterval (function(){
        if (startTimer > 0) {
            startTimer--;
            $("#secondsLeftStart").text(startTimer);
            console.log(startTimer);
        }

        if (startTimer == 0 ) {
            $("#quizContentBox").removeClass("hidden");
            $("#nextButton").removeClass("hidden");
            $("#countDownTimerBox").addClass("hidden");
            $("#nextButtonContainer").removeClass("hidden");
            clearInterval(startTimerInterval);
            getNextQuestion()
        }

    }, 1000)

}


//Add Event Listener on Start Game click. This will allow the user to start the game.
//Invoking startGame function on startButton click.
startButton.addEventListener("click", startGame);

