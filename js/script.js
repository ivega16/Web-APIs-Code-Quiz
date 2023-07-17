let startBtn = document.getElementById('start-btn');
let introSectionEl = document.getElementById('intro-section');
let timerEl = document.getElementById('timer');
let questionSectionEl = document.getElementById('question-section');
let titleEl = document.getElementById('question-title');
let choicesEl = document.querySelectorAll('.choices'); //we do querySelectorAll because it's more than 1 class name
let initialEl = document.getElementById('initial-section');
let highscoreSectionEl = document.getElementById('highscore-section');
let questionIndex = 0;
let answerFeedback;
let counter = 0;
let listCounter = 0;
let newTimer = "";
// each question needs an object
let questionsArray = [
    {
        title: 'Commonly used data types DO NOT include: ',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: 'choice-3'
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        answer: 'choice-2'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: 'choice-4'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        answer: 'choice-3'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        answer: 'choice-4'
    },
]

var timeLeft = questionsArray.length* 15 //to equal 75 sec.

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
    showQuestions();
}

function countDown() {
    //debugger
    timerEl.textContent = timeLeft--;
    if (newTimer === "Wrong!") {
        timerEl.textContent = timeLeft-=15;
        newTimer = "";
    }

   if(timeLeft === 0){
    clearInterval(setIntervalId);
   }
}

function showQuestions() {
let q = questionsArray[questionIndex];
    titleEl.textContent = q.title;

    choicesEl[0].textContent = q.choices[0];
    choicesEl[1].textContent = q.choices[1];
    choicesEl[2].textContent = q.choices[2];
    choicesEl[3].textContent = q.choices[3];
    }

function nextQuestion(event) {
    //$('#msg').html("");
    
    //debugger;
    let currentElement = event.target; //means whatever I click on is my current element

    if(currentElement.matches('button')) {
        questionIndex++;
        showQuestions();
    }
}

function reply_click(clicked_id) {
    
    let clickedIdValue = clicked_id;
    correctAnswer(clickedIdValue);
}

let finalTime = timeLeft;

function correctAnswer(n) {
    //debugger;
    

    let in2 = Object.getOwnPropertyDescriptor(questionsArray[questionIndex],'answer');

    if ((n) === in2.value) {
    //debugger
        // alert('true');
        answerFeedback = "Correct!";
    }
    else {
        // alert('false');
        answerFeedback = "Wrong!";
        newTimer = "Wrong!";
    }


  $('#msg').html(answerFeedback);
  
    counter++;
  if(counter === 5) {
    questionSectionEl.classList.add('hide');
    initialEl.classList.remove('hide');
    clearInterval(setIntervalId);
    finalTime = timeLeft;
    document.getElementById('score').textContent = finalTime;
  }
  else {
    showQuestions();
    nextQuestion();
  }
}

// let list = document.getElementById('demo');

  function highScore() {
    initialEl.classList.add('hide');
    highscoreSectionEl.classList.remove('hide');
    let list = document.createElement('li');
        list.innerHTML = document.getElementById('initial-input').value + '-' + finalTime;
        document.getElementById('demo').appendChild(list);  
}

    function renewQuiz() {
        debugger
        questionIndex = 0; 
        $('#msg').html("");
        timeLeft = questionsArray.length* 15; //to equal 75 sec.
        newTimer ='';
        setIntervalId = 0;
        counter= 0;
        highscoreSectionEl.classList.add('hide');
        listCounter++;
        startQuiz();
    }
   
  function clearScores() {
    initialEl.classList.add('hide');
    highscoreSectionEl.classList.remove('hide');
    let list = document.createElement('li');
    document.getElementById('demo').innerHTML = '';
        list.innerHTML = document.getElementById('initial-input').value + '-' + finalTime;
        questionIndex = 0; 
        $('#msg').html("");
        timeLeft = questionsArray.length* 15; //to equal 75 sec.
        newTimer ='';
        setIntervalId = 0;
        counter= 0;
        highscoreSectionEl.classList.add('hide');
        listCounter++;
    startQuiz();
  }



//when we click startBtn it will trigger the startQuiz function
startBtn.addEventListener("click", startQuiz);
questionSectionEl.addEventListener("click", nextQuestion); //anytime you click inside the parent, function will run aka go to next question
// choicesEl.addEventListener("click", correctAnswer); //anytime you click a choice, the 




