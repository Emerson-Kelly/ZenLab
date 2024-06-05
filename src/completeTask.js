import { taskArray } from './displayTask.js';

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
    button.classList.toggle('btn-outline-success', isComplete);
    button.classList.toggle('btn-secondary', !isComplete);
    button.textContent = isComplete ? 'Complete' : 'Unmark';
}

// Add event listeners to complete buttons
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(event) {
        if (event.target.closest('.btn-outline-success, .btn-secondary')) {
            const completeButton = event.target.closest('.btn-outline-success, .btn-secondary');
            const card = completeButton.closest('.card.mb-2');
            const isComplete = completeButton.classList.contains('btn-secondary');
            
            toggleCompleteTask(card, isComplete);
            toggleStrikethrough(card, isComplete);
            toggleButton(completeButton, isComplete);
        }
    });
});
