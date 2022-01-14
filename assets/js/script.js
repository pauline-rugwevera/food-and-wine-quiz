// start button screen 

let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function(){
    document.getElementById('start') .classList.add('hide');
    document.getElementById('results-section').classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');
    
  startGame();
})
// Questions screen
let questionCountText= document.getElementById('question-count');
let questionItem = document.getElementById('questions');

// quiz variables

let score = 0;
// it creates a little delay when user clicks an answer before moving to the next question
let acceptUserAnswer = false;  
let questionCount = 0;
let questionsArr = [];
let currentQuestion={};
let questios = [];

const maxQuestions = 10;
/**
 * A function that initialise variables,and get new questions from the getNewQuestion function
 */
function startGame(){
    questionCount = 0;
    score = 0;
    questionsArr = [...foodAndWine];
 
 getNewQuestion()
 
 }
 /**
  * displays randomly generated questions by getting them from questionsArr
  *  and displays them to the html, and increase question count
  */
 function getNewQuestion(){
    questionCount++;
    questionCountText.innerText = `Question: ${questionCount}`;
     // Creates a random question from the questionsArr array
   const currentQuestionIndex = Math.floor(Math.random()*questionsArr.length);
//    add the random question index to the current question
   currentQuestion = questionsArr[currentQuestionIndex];
//    displays the question to the html
   questionItem.innerText = currentQuestion.question;
 

 }

















 startGame();



