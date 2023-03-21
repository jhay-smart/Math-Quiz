var quizType;
var questions = [];
var currentQuestion = 0;
var score = 0;

// Get HTML elements
var quizTypeSelect = document.getElementById('quiz-type');
var startQuizButton = document.getElementById('start-quiz');
var quizContainer = document.getElementById('quiz-container');
var questionElement = document.getElementById('question');
var answerInput = document.getElementById('answer');
var submitAnswerButton = document.getElementById('submit-answer');
var feedbackElement = document.getElementById('feedback');
var nextQuestionButton = document.getElementById('next-question');
var restartQuizButton = document.createElement('button');
restartQuizButton.textContent = 'Restart Quiz';
restartQuizButton.style.display = 'none';
quizContainer.appendChild(restartQuizButton);



// Define event listeners
startQuizButton.addEventListener('click', startQuiz);
submitAnswerButton.addEventListener('click', submitAnswer);
nextQuestionButton.addEventListener('click', nextQuestion);


// Define functions
function startQuiz() {
	// Get quiz type from dropdown
	quizType = quizTypeSelect.value;
    question = [];

	// Generate 10 questions
	for (var i = 0; i < 10; i++) {
		// Generate two random numbers between 1 and 10
		var num1 = Math.floor(Math.random() * 10) + 1;
		var num2 = Math.floor(Math.random() * 10) + 1;

		// Generate question based on quiz type
		if (quizType === 'addition') {
			var question = num1 + ' + ' + num2;
			var answer = num1 + num2;
		} else if (quizType === 'subtraction') {
			var question = num1 + ' - ' + num2;
			var answer = num1 - num2;
		} else if (quizType === 'multiplication') {
			var question = num1 + ' x ' + num2;
			var answer = num1 * num2;
		} else if (quizType === 'division') {
			var product = num1 * num2;
			var question = product + ' / ' + num1;
			var answer = num2;
		}

		// Add question and answer to array
		questions.push({
			question: question,
			answer: answer
		});
	}

	// Show first question
	showQuestion();
}

quizTypeSelect.addEventListener('change', function() {
    // Start a new quiz when the quiz type is changed
    questions = [];
    startQuiz();
    answerInput.disabled = false;
	submitAnswerButton.disabled = false;
  });

  

function showQuestion() {
	// Hide start quiz button and show quiz container
	startQuizButton.style.display = 'none';
	quizContainer.style.display = 'block';

	// Show current question
	questionElement.innerHTML = questions[currentQuestion].question;
	answerInput.value = '';
	feedbackElement.innerHTML = '';
	nextQuestionButton.style.display = 'none';
	submitAnswerButton.style.display = 'block';
	
}

function submitAnswer() {
	// Get user's answer and convert to number
	var userAnswer = Number(answerInput.value);

	// Check if answer is correct
	if (userAnswer === questions[currentQuestion].answer) {
		feedbackElement.innerHTML = 'Correct!';
		score++;
	} else {
		feedbackElement.innerHTML = 'Incorrect. The correct answer is ' + questions[currentQuestion].answer + '.';
	}

	// Disable input and submit button
	answerInput.disabled = true;
	submitAnswerButton.disabled = true;
	nextQuestionButton.style.display = 'block';
}

function nextQuestion() 
{
	// Move to next question
	currentQuestion++;
    console.log(currentQuestion);
	

	// Check if quiz is over
	if (currentQuestion === questions.length) {
		// Show score
		questionElement.innerHTML = 'Quiz over! Your score is ' + score + ' out of ' + questions.length + '.';
		answerInput.style.display = 'none';
		submitAnswerButton.style.display = 'none';
		nextQuestionButton.style.display = 'none';

        feedbackElement.innerHTML = '';
		restartQuizButton.style.display = 'block';



    }

    else {
		// Show next question
		showQuestion();
        answerInput.disabled = false;
	submitAnswerButton.disabled = false;
    
    
	}

}

// restartQuizButton.addEventListener('click', function() {
//     // Reset quiz variables
//     questions = [];
//     currentQuestion = 0;
//     score = 0;

//     // Start new quiz
//     startQuiz();

//     // Hide Restart Quiz button
//     restartQuizButton.style.display = 'none';
// });


restartQuizButton.addEventListener('click', resetQuiz);

function resetQuiz() {
	// Reset variables
	quizType = quizTypeSelect.value;
	questions = [];
	currentQuestion = 0;
	score = 0;
  
	// Reset HTML elements
	quizTypeSelect.value = 'addition';
	startQuizButton.style.display = 'block';
	quizContainer.style.display = 'none';
	answerInput.style.display = 'block';
	answerInput.disabled = false;
	submitAnswerButton.style.display = 'block';
	submitAnswerButton.disabled = false;
	nextQuestionButton.style.display = 'none';
	restartQuizButton.style.display = 'none';
	questionElement.innerHTML = '';
	feedbackElement.innerHTML = '';
	answerInput.value = '';
  }