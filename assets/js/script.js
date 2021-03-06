// landing page screen 
let startBtn = document.getElementById('start-btn');
let startSection = document.getElementById('start');

// rules page
let nextPage = document.getElementById('next-page');
let rules = document.getElementById('rules');

// Questions screen
let questionCountText = document.getElementById('question-count');
let questionItem = document.getElementById('questions');
let choices = Array.from(document.querySelectorAll(".choice-text"));
let scoreText = document.getElementById('score');
let questionContainer = document.getElementById('question-container');
let nextQuestion = document.getElementById('next-question');


// Results box

let resultsSection = document.getElementById('results-section');
let yourScore = document.getElementById('your-score');
let replay = document.getElementById('replay');
let quits = document.querySelectorAll('.quits');
let message = document.getElementById('message');

// listens for start btn click events and hide it button immediately
startBtn.addEventListener('click', function () {
    startSection.classList.add('hide');

    resultsSection.classList.add('hide');

    rules.classList.remove('hide');

    startGame();
});

// listener for the continue button
nextPage.addEventListener('click', function () {
    questionContainer.classList.remove('hide');
    rules.classList.add('hide');

});

// quiz variables

let score = 0;
// it creates a little delay when user clicks an answer before moving to the next question
let acceptUserAnswer = false;
let questionCount = 0;
let questionsArr = [];
let currentQuestion = {};
const maxQuestions = 10;


/**
 * A function that initialise variables,and get new questions from the getNewQuestion function
 */
function startGame() {
    questionCount = 0;
    score = 0;
    questionsArr = [...foodAndWine];
    getNewQuestion();

}

/**
 * displays randomly generated questions by getting them from questionsArr
 *  and displays them to the html, and increase question count
 */
function getNewQuestion() {
    questionCount++;
    if (questionsArr.length === 0 || questionCount > maxQuestions) {
        displayResults();

    }

    questionCountText.innerText = `Question: ${questionCount}`;
    // Creates a random question from the questionsArr array
    const currentQuestionIndex = Math.floor(Math.random() * questionsArr.length);
    // add the random question index to the current question
    currentQuestion = questionsArr[currentQuestionIndex];
    // displays the question to the html
    questionItem.innerText = currentQuestion.question;

    //    displays question choices to the html
    choices.forEach(function (choice) {
        const chosen = choice.dataset.option;
        choice.innerText = currentQuestion[chosen];

    });

    // get rid of the already displayed question and accept user answer
    questionsArr.splice(currentQuestionIndex, 1);
    acceptUserAnswer = true;
    // disable next button
    nextQuestion.disabled = true;

}


/**
 * Checks if the answer is correct and add correct class to it,and increment score for
 * every correct choice. Add wrong class for every wrong choice then add correct class 
 * to the correct answer.
 */

choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        if (acceptUserAnswer === false) return;
        // prevents player from answering a question
        acceptUserAnswer = false;

        let clickedOption = event.target;

        let clickedAnswer = clickedOption.dataset.option;
        // Next button get activated only after selecting a choice
        if (clickedAnswer) {
            nextQuestion.disabled = false;
        }

        // checks if the answer is correct
        if (clickedAnswer == currentQuestion.answer) {
            scoreIncrement();
            clickedOption.classList.add('correct');
            // checks if the answer is wrong
        } else {

            // iterate through choices and add correct class
            for (let i = 0; i < choices.length; i++) {
                if (choices[i].dataset.option == currentQuestion.answer) {
                    choices[i].classList.add('correct');

                }

            }
            // add wrong class
            clickedOption.classList.add('wrong');

        }


    });

});


/**
 * function that increases score and displays it each time correct answer is selected
 */
function scoreIncrement() {
    score++;
    scoreText.innerText = `Score : ${score}`;
}

/**
 * function that Hides the start, rules and question screen at the end of quiz to 
 * display quiz score
 */
function displayResults() {
    startSection.classList.add('hide');
    rules.classList.add('hide');
    resultsSection.classList.remove('hide');
    questionContainer.classList.add('hide');

    if (score < 6) {

        yourScore.innerText = `You scored:  ${score} / ${maxQuestions}`;
        message.innerText = ` You did not qualify to the Taste Master world`;

    } else {
        yourScore.innerText = `You scored:  ${score} / ${maxQuestions}`;
        message.innerText = `Congratulations! You have earned your spot at the Taste Master World`;

    }

}


//   a listener that allows quiz replay

replay.addEventListener('click', function () {
    startSection.classList.add('hide');
    resultsSection.classList.add('hide');
    questionContainer.classList.remove('hide');
    scoreText.innerText = `Score : ${0}`;
    startGame();


});
// An event listener that produces displays new question when clicked by calling other functions

nextQuestion.addEventListener('click', function () {
    getNewQuestion();
    disableColor();
});

/**
 * function to remove correct and wrong class 
 */
function disableColor() {

    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove("correct");
        choices[i].classList.remove("wrong");
    }
}


/**
 * Function to quit the quiz, by displaying the main page and hiding results,rules 
 * and questions page
 * reseting all variables.
 */

quits.forEach(function (quit) {
    quit.addEventListener('click', function () {
        startSection.classList.remove('hide');
        resultsSection.classList.add('hide');
        questionContainer.classList.add('hide');
        rules.classList.add('hide');
        scoreText.innerText = `Score : ${0}`;

        disableColor();

        startGame();

    });
});