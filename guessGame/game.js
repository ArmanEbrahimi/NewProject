// program data:
var number = Math.floor(Math.random()*100+1);
var guess ;
var won = false;
var limit = 5;
var guesses = [];
// checking if the number has already been guessed
function avoidSame(){
    for(i = 0; i <guesses.length;i++){
        if(guess == guesses[i]){
            return true;
        }
    }
    return false;
}


// prompt user for their guess 
for(i = 1;i <= limit; i++){
    do{
        guess = parseInt(prompt("guess a number"));
    }while(isNaN(guess) || avoidSame(guess));

// if correct: let the user know they won
    if(guess == number){
    document.write("your guess is correct!");
    won = true;
    break;
    }

// if incorrect: let the user know
    else {
    guesses[i] = guess;
    alert("your guess is incorrect!\n ramined tries is "+ (5-i));
    }
}
if(won == true){
    document.write("you won!");
}
else{
    document.write("you lost! the correct answer was "+number);

}
