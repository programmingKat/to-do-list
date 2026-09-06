
// Enter tasks

//HTML
// add a button - add task
// input a task

//JS
//take input task - use query selector to append to p
document.querySelector('#submit-task').addEventListener('click', runToDo)
document.querySelector('#active-list').addEventListener('click',isTaskCompleted)
document.querySelector('#delete-completed').addEventListener('click',deleteAllCompleted)
document.querySelector('#delete-all').addEventListener('click', deleteAll)
function runToDo(){
    createNewTask()
}

function createNewTask(){
    const newTask = document.querySelector('#new-task').value
    const newLi = document.createElement('li')
    //create checkbox
    const newCheckBox = document.createElement('input')
    newCheckBox.type = 'checkbox'

    //append checkbox and li to the ul
    newLi.innerText = newTask
    newLi.prepend(newCheckBox)
    document.querySelector('#active-list').appendChild(newLi)
}


function isTaskCompleted(eventObject){
    eventObject.target.parentElement.classList.toggle('checked')
    console.log(eventObject.target.type)

    // if(eventObject.target.type == 'checkbox'){
    //     console.log(eventObject.target.parentElement)
    // }
    // console.log(eventObject)
}

// function deleteThisTask(){

// }

function deleteAllCompleted(){
    //all checked
    const completedTasks = document.querySelectorAll('.checked')
    //console log to see node list of items
    //display hide
    completedTasks.forEach(removeTaskFromList)
}
function removeTaskFromList(task){
    task.remove()
}

function deleteAll(){
    //all checked
    document.querySelector('#active-list').innerHTML = ''
    //console log to see node list of items
    //display hide
}
// Mark complete
// When tasks are complete, to do a line-through //strike-through
//ability to delete completed & uncompleted tasks individually 
//delete all completed tasks button


// Input at the top/heading of the page
// Submit button 
// Display the tasks you submitted or entered. 
// Check box to display when the tasks is completed. 
// Once we hit the checkbox, a line-through will go through the checked item/list. 
// Add a delete button to-the 
// Click delete, the list clears (add a warning on the delete button). 
