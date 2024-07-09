import { appendTask } from './displayTask.js';



export function createTaskContainer(taskContainerId, projectName) {
    const appendContainer = document.getElementById('appendContainer');

    if (!appendContainer) {
        console.error('appendContainer element not found');
        return;
    }

    // Create a new task container element
    const taskContainer = document.createElement('div');

    taskContainer.id = taskContainerId;  // Unique ID for each task container
    //taskContainer.textContent = `Task Container for ${projectName}`; // Use projectName in text content
    taskContainer.classList.add('task-container');
    taskContainer.classList.add('mt-4');
 


    appendContainer.appendChild(taskContainer);

    console.log(`Task container created with ID: ${taskContainerId} for ${projectName}`);
}
