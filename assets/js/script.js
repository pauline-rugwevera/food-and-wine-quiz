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
let choices = Array.from (document.querySelectorAll(".choice-text"));
let scoreText =document.getElementById('score');

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
//    displays question choices to the html
   choices.forEach(function(choice){
    const chosen= choice.dataset.option;
   choice.innerText = currentQuestion[chosen];


});
 // get rid of the already displayed question and accept user answer
 questionsArr.splice[currentQuestionIndex, 1] ;
 acceptUserAnswer = true;
 }


 /**
  * Checks if the answer is correct and add correct class to it,and increment score for
  * every correct choice. Add wrong class for every wrong choice then add correct class 
  * to the correct answer, a small delay happens before new question is displayed
  */
choices.forEach(function(choice){
    choice.addEventListener('click', function(event){
        if(acceptUserAnswer===false)return
        // prevents player from answering a question
        acceptAnswer=false;
        const clickedOption = event.target;
        let clickedAnswer = clickedOption.dataset.option;
        
        // checks if the answer is correct
        if(clickedAnswer==currentQuestion.answer){
            scoreIncrement();
            clickedOption.classList.add('correct');
            setTimeout(function(){
                clickedOption.classList.remove('correct')
                getNewQuestion()
            }, 1000) 


            // checks if the answer is wrong
        }else{
            // iterate through choices and add correct class

            for(let i = 0; i < choices.length; i++){
                    if(choices[i].dataset.option==currentQuestion.answer){
                    choices[i].classList.add('correct')
                    setTimeout(function(){
                        choices[i].classList.remove('correct')
                        // getNewQuestion()
                    }, 1000)
                 
                }

            }
            clickedOption.classList.add('wrong')
        
        setTimeout(function(){
          clickedOption.classList.remove('wrong')
         
            getNewQuestion()
        }, 1000)
    }
        

    });

});
// increases score and displays it each time correct answer is picked
function scoreIncrement(){
    score++;
    scoreText.innerText = `Score : ${score}`;
}
















 startGame();



