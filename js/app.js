//Questions
let questions = [
    {
        question: " What is the default type of ‘type’ attribute of input element?",
        answer: "Text",
        options: [
            "Text",
            "Password",
            "Number",
            "Special Characters"
        ]
    },
    {
        question: "Which of the following is a new input attribute introduce by HTML5?",
        answer: "date",
        options: [
            "text",
            "checkbox controls",
            "Submit buttons",
            "date"
        ]
    },
    {
        question: "How does the color attribute work?",
        answer: "The color picker is defined by it",
        options: [
            "Changes color of the text",
            "Changes background color",
            "The color picker is defined by it",
            "Changes color of the text as well as background"
        ]
    },
    {
        question: " Which attribute defines the file-select field?",
        answer: "file",
        options: [
            "file",
            "check box",
            "buttons",
            "text"
        ]
    },
    {
        question: "How image attribute works?",
        answer: "Set an image as submit button",
        options: [
            "Sets an image background",
            "Set an image as submit button",
            "Set an image anywhere on the page",
            "Bring default image to the page"
        ]
    },
    {
        question: "HTML stands for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tabular Markup Language",
            "None of these"
        ]
    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        answer: "img",
        options: [
            "picture",
            "image",
            "img",
            "src"
        ]
    }

];
// variable to store total score
let totalScore = 0;
// Variable to store current question index
let currentIndex = 0;

// storing length of no of questions
let numberofQuestion = questions.length;
// storing sections in variables
// storing Name section
let nameSection = document.getElementById('container1');

// storing question section
let questionSection = document.getElementById('container2');

// storing result section
let resultSection = document.getElementById('container3');

//Function to Start
start = () => {
    let userName = document.getElementById('start-input').value;
    console.log(userName)

    //removing Name Section
    nameSection.classList.add('remove');

    // calling Show question for first time
    showQuestions(0);
}

showQuestions = (e) => {
    // removing a class from question section
    questionSection.classList.remove('remove');

    // getting question number
    let questionDisplay = document.getElementById('question');

    // Dsiplaying question
    questionDisplay.innerHTML = questions[e].question;

    // getting option fields
    let optionsDisplay = document.getElementsByClassName('answer');

    // displaying data to option fields
    for (let i = 0; i < optionsDisplay.length; i++) {
        optionsDisplay[i].innerHTML = questions[e].options[i];
    }
}

nextQuestion = () => {
    // calling function to check correct answer
    let res = validateAnswer(currentIndex);

    // increasing index number
    currentIndex++;

    // changing nextquestion to submit on last question
    if (currentIndex === 6) {
        document.getElementById('submit-btn').innerHTML = 'submit';

    }
    else {
        document.getElementById('submit-btn').innerHTML = 'Next Question';
    }
    // calling a function to display results
    if (currentIndex >= numberofQuestion) {
        showResults(res);
    }
    else {
        // passing updated index to display next question
        showQuestions(currentIndex);
    }
    // calling function to remove active class
    removeClass();
}


// function to check answer
validateAnswer = (e) => {
    let userAnswer = document.getElementsByClassName('active');
    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i].children[i].innerHTML === questions[e].answer) {
            return (totalScore += 10);
        }
    }
}

// function to add active class
addActiveClass = (e) => {

    // calling function to remove active classes
    removeClass();

    // adding active class
    e.classList.add('active');
}
//function to remove class
removeClass = () => {
    // getting elements that are with active class
    let active = document.getElementsByClassName('active');

    // removing class from them
    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    }
}
// function to display results
showResults = (e) => {
    // adding remove class to question Element
    questionSection.classList.add('remove');

    // removing romve class from result section
    resultSection.classList.remove('remove');

    console.log(e);
    // displaying score
    let displayScore = document.getElementById('display-score');
    if (e === undefined) {
        displayScore.innerHTML = 0;
    }
    else {
        displayScore.innerHTML = e;
    }
}

//function to start again
startAgain = () => {
    //reseting all variables
    totalScore = 0;
    currentIndex = 0;

    // resetting the input field
    document.getElementById('start-input').value = "";

    // removing remove class from name section
    nameSection.classList.remove('remove');

    // adding remove class to question and result section
    questionSection.classList.add('remove');
    resultSection.classList.add('remove');
}