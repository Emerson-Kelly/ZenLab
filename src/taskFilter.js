import { taskArray } from './displayTask.js';
import { toggleStrikethrough } from './completeTask.js';
import { projectCounter } from './createProject.js';
import { addEditTaskEventListeners } from './editTask.js';

// Add event listener to the dropdown menu
export const filterDropdown = document.getElementById('filter');

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
            sortTasksByDate(false); // Sort tasks from newest to oldest
            break;
        case 'oldNew':
            sortTasksByDate(true); // Sort tasks from oldest to newest
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
 export function sortTasksByPriority(highToLow) {
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
export function sortTasksByDate(newToOld) {
    taskArray.sort((task1, task2) => {
        const date1 = new Date(task1.dueDate);
        const date2 = new Date(task2.dueDate);
        if (newToOld) {
            return date2 - date1; // Sort from newest to oldest
        } else {
            return date1 - date2; // Sort from oldest to newest
        }
    });
    reorderTaskElements(taskArray);
}

// Function to filter tasks by completion
export function filterTasksByCompletion(complete) {
    console.log('Filtering tasks by completion:', complete ? 'Complete' : 'Incomplete'); // Debug statement
    const filteredTasks = taskArray.filter(task => task.taskStatus === (complete ? 'Complete' : 'Incomplete'));
    reorderTaskElements(filteredTasks);
}

// Function to reorder task elements in the DOM

export function reorderTaskElements(tasks) {
  
    // Get the ID of the currently active task container
    const activeTaskContainerId = document.querySelector('.nav-link.active').getAttribute('href').substring(1);
    const taskContainer = document.getElementById(activeTaskContainerId);
    if (!taskContainer) {
        console.error('Active task container not found');
        return;
    }
    taskContainer.innerHTML = ''; // Clear existing tasks
    
    tasks.forEach(task => {
        // Only append tasks that belong to the active project
        if (task.projectId === activeTaskContainerId) {
            const taskElement = task.createTaskElement(); // Assuming this method creates the task element
            
            taskContainer.appendChild(taskElement); // Append the task element to the container
            
            // Apply strikethrough style if the task is complete
            if (task.taskStatus === 'Complete') {
                toggleStrikethrough(taskElement, false);
            } else { 
                toggleStrikethrough(taskElement, true);
            }
        }

    });
   
   
}


