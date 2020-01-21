//initiating essential variables
var question,questions,choiceA,choiceB,choiceC,choiceD,userChoice,allQuestions;
var points = [];
var score = 0;
var current = 0;
var defaultQuestions = [{question : "Who won the last WorldCup?",choiceA:"Brazil",choiceB:"France",choiceC:"Italy",choiceD:"Germany",correct: "B"},
{question : "Who won the last Golden Ball?",choiceA:"Messi",choiceB:"Ronaldo",choiceC:"Ibrahimovic",choiceD:"Neymar",correct : "A"},
{question : "Who is the current coach of Perspolis?",choiceA:"Daei",choiceB:"Branco",choiceC:"Caldron",choiceD:"Golmohammadi",correct : "D"},
{question:"Who has scored the most goals in national team?",choiceA:"Ronaldo",choiceB:"Messi",choiceC:"Daei",choiceD:"Pele",correct:"C"}];
// creating neccessary refrences to HTML elements
var elquizSection = document.getElementById("quizSection");
var elquiz = document.getElementById("quiz");
var elchoiceA = document.getElementById("choiceA");
var elchoiceB = document.getElementById("choiceB");
var elchoiceC = document.getElementById("choiceC");
var elchoiceD = document.getElementById("choiceD");
var elchoices = document.getElementsByName('option');
var submit = document.getElementById("submit");
var elquizStatus = document.getElementById("quizStatus")
//starting the game
populateQuestions();
displayQuestion();
//populating set of questions for the quiz
function populateQuestions(){
allQuestions = defaultQuestions;
questions = defaultQuestions[current];
question = questions.question;
choiceA = questions.choiceA;
choiceB = questions.choiceB;
choiceC = questions.choiceC;
choiceD = questions.choiceD;
}
//diplaying questions to the browser
function displayQuestion(){
    populateQuestions();
    elquiz.innerHTML = question;
    elchoiceA.innerHTML = choiceA;
    elchoiceB.innerHTML = choiceB;
    elchoiceC.innerHTML = choiceC;
    elchoiceD.innerHTML = choiceD;
    elquizStatus.innerHTML = (current+1)+ " of "+allQuestions.length;
}
//define function for submit button
submit.addEventListener("click",submitFunction);
function submitFunction(){
//check if user has selected any answer
    if(verifyFunction()){
        if(userChoice == questions.correct){
            score++;
            points[current] = 1;
            current++;
        }
        else{
            points[current] = 0;
            current++; 
        }
    }
    if( current == allQuestions.length){
        endGame();
    }
    displayQuestion();
}
function verifyFunction(){
    for(var i = 0; i < elchoices.length; i ++){
        if(elchoices[i].checked){
            userChoice = elchoices[i].value;
            elchoices[i].checked = false;
            return true;
        }
    }
    alert("you must select an answer!");
    return false;
    
}

function endGame(){
    elquizSection.innerHTML = "<h2>Your Score: " + score + " out of " + allQuestions.length + "</h2>";
    for(var i = 0; i < allQuestions.length; i++){
        var summary = document.createElement("p");
        if(points[i] == 0){
            summary.innerHTML = "Question #" + (i+1) + ": INCORRECT";
            summary.style.color = "red";
        }
        else{
            summary.innerHTML = "Question #" + (i+1) + ": CORRECT!";
            summary.style.color = "green";
        }
        elquizSection.appendChild(summary); 
    }
    document.getElementById("choices").style.display = "block";

}