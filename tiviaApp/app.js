//initializing neccessary variables
var questionId,choiceA,choiceB,choiceC,choiceD,question,questions,totalQuestion,userChoice,current = 0;
// initializing an Array variable for storing score for each question
var points = [];
var scores = 0;
// initializing an Arrey variable for default questions
var defaultQuestions = [{question :"Who won the last World Cup?",choiceA:"Brazil",choiceB:"Germany",choiceC:"Italy",choiceD:"France",correct : "D"},
{question : "Who won the last Golden Ball?",choiceA:"Messi",choiceB:"Ronaldo",choiceC:"Ibrahimovic",choiceD:"Neymar",correct : "A"},
{question : "Who is the current coach of Perspolis?",choiceA:"Daei",choiceB:"Branco",choiceC:"Caldron",choiceD:"Golmohammadi",correct : "D"},
{question:"Who has scored the most goals in national team?",choiceA:"Ronaldo",choiceB:"Messi",choiceC:"Daei",choiceD:"Pele",correct:"C"}];
// reference HTML elements
var eQuiz = document.getElementById("quiz");
var eQuestion = document.getElementById("question");
var eChoiceA = document.getElementById("choiceA");
var eChoiceB = document.getElementById("choiceB");
var eChoiceC = document.getElementById("choiceC");
var echoiceD = document.getElementById("choiceD");
var submitButton = document.getElementById("submit");
var eUserChoice = document.getElementsByName('choices');
//start the quiz
populateQuestion();
displayQuestions();

function populateQuestion(){
//populating questions variable with defualt questions
    questions = defaultQuestions;
}
function getQuestionInfo(){
//getting info for each question
question = questions[current].question;
choiceA = questions[current].choiceA;
choiceB = questions[current].choiceB;
choiceC = questions[current].choiceC;
choiceD = questions[current].choiceD;
}


function displayQuestions(){
//displaying question into web app
    getQuestionInfo();
    eQuestion.innerHTML = question;
    eChoiceA.innerHTML = choiceA;
    eChoiceB.innerHTML = choiceB;
    eChoiceC.innerHTML = choiceC;
    echoiceD.innerHTML = choiceD;
//diplaying question number from total questions
    questionId = current+1;
    totalQuestion = questions.length;
    var eQuizStatus = document.getElementById("quizStatus");
    eQuizStatus.innerHTML = "Question "+(questionId)+" of "+(totalQuestion);
}
//creating a click event handler for sumbit button
submitButton.addEventListener("click",gradeQuestion);
// grading the answers
function gradeQuestion(){
    if(current == questions.length-1){
        endGame();
    }
    else{
        if(submitFunction()){
            if(userChoice == questions[current].correct){
                scores++;
                points[current] = 1;
            }
            else{
                points[current] = 0;
            }
            current++;
            displayQuestions();
        }
        
    }
}


// check if the user has selected any answer
function submitFunction(){
   for(var i = 0, length = eUserChoice.length;i<length; i++){
       if(eUserChoice[i].checked){
           userChoice = eUserChoice[i].value;
           eUserChoice[i].checked = false;
           return true;
       }

   }
   alert("You must choose an answer!");
   return false;
}
function endGame(){
    eQuiz.innerHTML = "<h2>Your Score: " + scores + " out of " + totalQuestion + "</h2>";
    for(var i = 0; i < questions.length; i++){
        var summary = document.createElement("p");
        if(points[i] == 0){
            summary.innerHTML = "Question #" + (i+1) + ": INCORRECT";
            summary.style.color = "red";
        }
        else{
            summary.innerHTML = "Question #" + (i+1) + ": CORRECT!";
            summary.style.color = "green";
        }
        eQuiz.appendChild(summary); 
    }
    document.getElementById("options").style.display = "block";

}