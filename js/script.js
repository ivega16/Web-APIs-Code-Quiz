let startBtn = document.getElementById('start-btn');
let introSectionEl = document.getElementById('intro-section');
let timerEl = document.getElementById('timer');
let questionSectionEl = document.getElementById('question-section');
let titleEl = document.getElementById('question-title');

// each question needs an object
let questionsArray = [
    {
        title: 'Commonly used data types DO NOT include: ',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        answer: '2. curly brackets'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        answer: '3. quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    },
]

var timeLeft=questionsArray.length* 15 //to equal 75 sec.

/*
    1. hide intro
    2. start timer
    3. show questions
    4. data structure to store questions and choices

*/
let setIntervalId = 0; //has to be set globally

function startQuiz() {
    //add class to the section element
    introSectionEl.classList.add('hide');  // or introSectionEl.setAttribute('class','hide');

    questionSectionEl.classList.remove('hide'); //OR questionSectionEl.setAttribute('class','');
    setIntervalId = setInterval(countDown, 1000); //every 1 second (here 1 second in milliseconds) call this function
}

function countDown() {
    timerEl.textContent = timeLeft--;
   if(timeLeft === 0){
    clearInterval(setIntervalId);
   }
}




//when we click startBtn it will trigger the startQuiz function
startBtn.addEventListener("click", startQuiz);




