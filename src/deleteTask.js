import { taskArray } from './displayTask.js';

// Function to delete a task
function deleteTask(taskElement) {
    const taskIndex = taskArray.findIndex(task => task.title === taskElement.querySelector('.card-title').innerText);
    if (taskIndex !== -1) {
        taskArray.splice(taskIndex, 1);
        console.log('Updated taskArray:', taskArray);
    }
}

// Add event listeners to trash icons
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(event) {
        if (event.target.closest('.trash-icon')) {
            const trashIcon = event.target.closest('.trash-icon');
            const card = trashIcon.closest('.card.mb-2');
            deleteTask(card);
            card.remove();
        }
    });
});


