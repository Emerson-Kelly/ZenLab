import { appendTask } from './displayTask.js';
import { saveProjectsToLocalStorage } from './localStorageFunctions.js';
import { projectArray } from './createProject.js';

export function createTaskContainer(taskContainerId, projectName) {
    const appendContainer = document.getElementById('appendContainer');

    if (!appendContainer) {
        console.error('appendContainer element not found');
        return;
    }
    
    // Check if the task container already exists
    let taskContainer = document.getElementById(taskContainerId);
    if (!taskContainer) {
        // Create a new task container element
        taskContainer = document.createElement('div');
        taskContainer.id = taskContainerId; // Unique ID for each task container
        taskContainer.classList.add('task-container', 'mt-4');
        appendContainer.appendChild(taskContainer);

        console.log(`Task container created with ID: ${taskContainerId} for ${projectName}`);
    } else {
        console.log(`Task container with ID: ${taskContainerId} already exists.`);
    }

        saveProjectsToLocalStorage(projectArray);

}
