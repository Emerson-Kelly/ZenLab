import { taskArray } from './displayTask.js';
import { saveTasksToLocalStorage } from './localStorageFunctions.js';

// Function to mark a task as complete or unmark it
function toggleCompleteTask(taskElement, isComplete) {
    const taskTitle = taskElement.querySelector('.card-title').innerText;
    const taskIndex = taskArray.findIndex(task => task.title === taskTitle);
    if (taskIndex !== -1) {
        taskArray[taskIndex].taskStatus = isComplete ? 'Incomplete' : 'Complete';
        console.log('Updated taskArray:', taskArray);
    }
}

// Function to add or remove strikethrough to title and description
export function toggleStrikethrough(taskElement, isComplete) {
   
    const cardTitle = taskElement.querySelector('.card-title');
    const cardText = taskElement.querySelector('.card-text');
    if (cardTitle && cardText) {
        cardTitle.style.textDecoration = isComplete ? 'none' : 'line-through';
        cardText.style.textDecoration = isComplete ? 'none' : 'line-through';
    }
   
}




// Function to toggle the button text and class
function toggleButton(button, isComplete) {
    button.classList.toggle('complete', isComplete);
    button.classList.toggle('incomplete', !isComplete);
    button.innerHTML = isComplete ? 
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>';
}

// Add event listeners to complete buttons
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(event) {
        if (event.target.closest('.complete, .incomplete')) {
            const completeButton = event.target.closest('.complete, .incomplete');
            const card = completeButton.closest('.card.mb-2');
            const isComplete = completeButton.classList.contains('incomplete');
            
            toggleCompleteTask(card, isComplete);
            toggleStrikethrough(card, isComplete);
            toggleButton(completeButton, isComplete);
            saveTasksToLocalStorage(taskArray);
        }
    });


});


