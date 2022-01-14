// start button screen 

let startBtn = document.getElementById('start-btn');
// let questionCounterText= document.getElementById('question-counter');
// let questionItem = document.getElementById('questions');
startBtn.addEventListener('click', function(){
    document.getElementById('start') .classList.add('hide');
    document.getElementById('results-section').classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');
    
  startGame();
})

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
//  getNewQuestion()
 
 
 }



