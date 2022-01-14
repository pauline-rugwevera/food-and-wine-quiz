// start button screen 

let startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function(){
    document.getElementById('welcome') .classList.add('hide');
    document.getElementById('results-section').classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');
    
//   startGame();
})