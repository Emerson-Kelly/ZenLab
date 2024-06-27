import { taskArray } from './displayTask.js';

export function addEditTaskEventListeners(taskElement) {
    const cardTitleElement = taskElement.querySelector('.card-title');
    const cardTextElement = taskElement.querySelector('.card-text');

    cardTitleElement.addEventListener('input', () => {
        console.log('hello from card title');
        updateTaskArray(taskElement, 'title', cardTitleElement.innerText);
        
    });

    cardTextElement.addEventListener('input', () => {
        console.log('hello from card text');
        updateTaskArray(taskElement, 'description', cardTextElement.innerText);
    });

}



// Function to update the task array
function updateTaskArray(taskElement, key, value) {
    const index = taskElement.dataset.index;
    if (index >= 0 && index < taskArray.length) {
        taskArray[index][key] = value;
        console.log(`Updated task ${index}:`, taskArray[index]);
    }
}

