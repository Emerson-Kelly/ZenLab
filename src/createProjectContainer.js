import { appendTask } from './displayTask.js';

let projects = [];

export function createTaskContainer(taskContainerId) {
    const appendContainer = document.getElementById('appendContainer');

    if (!appendContainer) {
        console.error('appendContainer element not found');
        return;
    }

    // Create a new task container element
    const taskContainer = document.createElement('div');

    taskContainer.id = taskContainerId;  // Unique ID for each task container
    taskContainer.textContent = `taskContainer ${taskContainerId}`;
    taskContainer.classList.add('mt-4');

    appendContainer.appendChild(taskContainer);

    console.log('Task container created with ID:', taskContainerId);
    //console.log(projects);
}
