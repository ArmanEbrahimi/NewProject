//creating refrence to the input text box, the add buttom, and the task list
var task = document.getElementById("task");
var add = document.getElementById("add"); 
var taskList = document.getElementById("taskList"); 
//creating an addEvent handler for the add buttom
add.addEventListener("click",addFunction);
function addFunction(){
// getting the value from the input box
var input = task.value;
//adding new task to task list
if (input.trim()){
    var newItem = document.createElement("li");
    var taskTest = document.createTextNode(input);
    newItem.appendChild(taskTest);
//clearing the input box after clicking add button
    task.value="";
    taskList.appendChild(newItem);
// creating a done button each time a task is created
    var newButtom = document.createElement("button");
    newButtom.innerHTML = "Done";
    newItem.appendChild(newButtom);
}
// alerting the user if entering add buttom with empty box
else{
    alert("the task connot be empty!");
}
//creating an event listener for done button
newButtom.addEventListener("click",taskDone);
function taskDone(e){
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}
}
//creating an addEvent handler for clear button
clear.addEventListener("click",clearTaskList);
function clearTaskList(){
var taskItems = document.getElementById("taskList");
taskItems.remove();
}