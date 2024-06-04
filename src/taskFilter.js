import { taskArray } from './displayTask.js';

// Add event listener to the dropdown menu

const filterDropdown = document.getElementById('filter');

filterDropdown.addEventListener('change', () => {
    const selectedOption = filterDropdown.value;
    switch (selectedOption) {
        case 'highLow':
            sortTasksByPriority(true); // Sort tasks from highest to lowest priority
            break;
        case 'lowHigh':
            sortTasksByPriority(false); // Sort tasks from lowest to highest priority
            break;
        case 'newOld':
            sortTasksByDate(true); // Sort tasks from newest to oldest
            break;
        case 'oldNew':
            sortTasksByDate(false); // Sort tasks from oldest to newest
            break;
        case 'complete':
            filterTasksByCompletion(true); // Filter tasks by completion
            break;
        case 'incomplete':
            filterTasksByCompletion(false); // Filter tasks by incompletion
            break;
            default:
                reorderTaskElements(taskArray);
    }
});


// Function to sort tasks by priority
function sortTasksByPriority(highToLow) {
    taskArray.sort((task1, task2) => {
        // Convert priority to numerical value for comparison
        const priorityValues = { high: 3, medium: 2, low: 1 };
        const priority1 = priorityValues[task1.priority];
        const priority2 = priorityValues[task2.priority];

        if (highToLow) {
            return priority2 - priority1; // Sort from highest to lowest priority
        } else {
            return priority1 - priority2; // Sort from lowest to highest priority
        }
    });
    reorderTaskElements(taskArray);
}

// Function to sort tasks by date
function sortTasksByDate(newToOld) {
    taskArray.sort((task1, task2) => {
        const date1 = new Date(task1.dueDate);
        const date2 = new Date(task2.dueDate);
        if (newToOld) {
            return date1 - date2; // Sort from newest to oldest
        } else {
            return date2 - date1; // Sort from oldest to newest
        }
    });
    reorderTaskElements(taskArray);
}

// Function to filter tasks by completion
function filterTasksByCompletion(complete) {
    console.log('Filtering tasks by completion:', complete ? 'Complete' : 'Incomplete'); // Debug statement

    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = ''; // Clear existing tasks

    const filteredTasks = taskArray.filter(task => task.taskStatus === (complete ? 'Complete' : 'Incomplete'));
    reorderTaskElements(filteredTasks);
}



// Function to reorder task elements in the DOM
function reorderTaskElements(tasks) {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = task.createTaskElement(); // Assuming this method creates the task element
        taskContainer.appendChild(taskElement); // Append the task element to the container
    });
}
