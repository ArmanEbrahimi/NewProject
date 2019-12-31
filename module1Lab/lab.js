/* asking user to enter his/her name and adding it as a value to username variable */
var userName = window.prompt("Please enter your name :");
/* getting access to paragraph tagged greeting and assign it to greeting variable */
var greetingParagraph = document.getElementById("greeting");
/* adding the user input to the end of greeting paragraph */
greetingParagraph.innerHTML += ", "+userName;
/* prompting user to enter first number */
var firstNumber = parseInt(window.prompt("enter the first number: "));
/* prompting user to enter the second number */
var secondNumber = parseInt(window.prompt("enter the second number"));
/* getting access to operand #1 & #2 paragraphes and assign it to a variable */
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
/* writing entered number to operand paragraphes */
operand1.innerHTML += firstNumber;
operand2.innerHTML += secondNumber;
/* creating variables with proper name for arithmetic operations*/
var sum = firstNumber+secondNumber;
var difference = firstNumber-secondNumber;
var product = firstNumber*secondNumber;
var quotient = firstNumber/secondNumber;
var modResult = firstNumber%secondNumber;
/* updating paragraphs and displaying them to browser with result values */
document.getElementById("addition").innerHTML = "The sum of "+firstNumber+" and "+secondNumber+" is "+sum;
document.getElementById("subtraction").innerHTML = "The difference between "+firstNumber+" and "+secondNumber+ " is "+difference;
document.getElementById("multiplication").innerHTML = "The product of "+firstNumber+" and "+secondNumber+" is "+product;
document.getElementById("division").innerHTML = "The quetient of "+firstNumber+" and "+secondNumber+" is "+quotient;
document.getElementById("modulus").innerHTML = "The mod operation of "+firstNumber+" and "+secondNumber+" is "+modResult;