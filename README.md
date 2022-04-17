Repository: https://github.com/dcast0607/Web-Quiz-Game</br>
Link to Webpage: https://dcast0607.github.io/Web-Quiz-Game/</br>

Challenges: 
- Adding user score to user local storage.
- Clearing questions once user has answered previous question. 
- setting timer interval
- hiding elements when they are no longer being used


Revision 1: (COMPLETED)

Set up the basic HTML and CSS. We will be working on the layout of our website so that we have all of the
elements that we need to work with. 

Elements: 
- Some nav bar at the top
- Nav bar elements
- Welcome message for user before game begins
- Start Button
- Highscore page that the user can access to view the highscores.

Revision 2: (COMPLETED)

- Format the HTML elements using CSS so that the flow of the webpage is appealing to the user. 
- Also set up containers that will be used to hide/show our elements when being used/not being used. 

Revision 3: 

- Add basic logic to hide elements that are not being used. We will be using JQuery methods to add or remove
classes. This will allow us to modify the "display" properties of these elements when in use/not being used. 
- Build a more final version of the HTML and CSS. 
- Start building out the basic javascript skeleton [eventListeners, declare variables that we will be using,
add array that will store our questions and answers.]

Revision 4: IN-PROGRESS

- Work on the quiz logic. Logic of the user flow. 

    a) What needs to happen when the user clicks on the "Start Button", we need to start the timer and take [COMPLETED] 
    the user to the quiz portion of the quiz. </br>
    b) We can display a countdown timer that gives the user some time to prep mentally before starting the quiz.[COMPLETED]</br>
    c) When the countdown timer has finished, we then need to pick a question for our array of questions. [COMPLETED]</br>
    d) Based off the question that is picked, we need to set the question at the top and the available options within a container.[COMPLETED]</br>
    e) Questions options should be displayed as buttons so we can see what the user has picked.[COMPLETED]</br>
    f) When user selects the right answer we give option to move onto the next question. [COMPLETED]</br>
    g) When user enters wrong option, we decrease timer and automatically send the user to the next question. [Needs work]</br>
    h) Once user completes assessment, we need to give the user the option to save their score. [Needs work]</br>
    i) Scores should be visible in highscores page. [Needs work]</br>


Revision 5: Refactor and Comment

![Alt Text](./Assets/homepage.png?raw=true "Homepage Screenshot") <br />
![Alt Text](./Assets/quizContent.png?raw=true "Homepage Screenshot") <br />
![Alt Text](./Assets/formSubmit.png?raw=true "Homepage Screenshot") <br />
![Alt Text](./Assets/scoresTemplate.png?raw=true "Homepage Screenshot") <br />