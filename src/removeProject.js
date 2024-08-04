import { taskArray } from './displayTask.js';
import { saveProjectsToLocalStorage, saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorageFunctions.js';
import { projectArray, projectCounter, deleteProjectAndTasks } from './createProject.js';


// Function to remove a project and its tasks from the task array
export function removeProject(projectId) {
    // Remove tasks associated with the projectId
    const removedTasks = taskArray.filter(task => task.projectId === `taskContainer-${projectId}`);
    
    removedTasks.forEach(task => {
        const index = taskArray.indexOf(task);
        if (index !== -1) {
            taskArray.splice(index, 1); // Remove task from the global task array
        }
    });

    console.log(`Removed tasks for project with ID: ${projectId}`);
    saveTasksToLocalStorage(taskArray);

    // Remove the corresponding task container from local storage
    removeTaskData(`taskContainer-${projectId}`);

}




export function removeTaskData(taskContainerId) {
    // Construct the key using the taskContainerId
    const key = `zenLabTasks-${taskContainerId}`;

    // Retrieve the task data from localStorage
    const taskData = JSON.parse(localStorage.getItem(key)) || [];

    // Log the task data to console
    console.log('Task data before removal:', taskData);

    // Set the task data to an empty array to effectively remove tasks
    localStorage.setItem(key, JSON.stringify([]));

    // Optionally, confirm removal
    console.log('Task data has been cleared for:', key);
}





/*
document.getElementById("deleteAllTasks").addEventListener("click", () => {
    // Get the ID of the currently active project
    const activeProjectElement = document.querySelector('.nav-link.active');
    if (!activeProjectElement) {
        console.error('No active project found');
        return;
    }
    const activeProjectId = activeProjectElement.getAttribute('href').substring(1);

    // Filter out tasks that belong to the active project
    for (let i = taskArray.length - 1; i >= 0; i--) {
        if (taskArray[i].projectId === activeProjectId) {
            taskArray.splice(i, 1);
        }
    }

    // Update the task container in the DOM
    const taskContainer = document.getElementById(activeProjectId);
    if (taskContainer) {
        taskContainer.remove();
    }

    // Save the updated taskArray to local storage
    saveTasksToLocalStorage(taskArray);

    // Remove the task container from local storage
    localStorage.removeItem(`zenLabTasks-${activeProjectId}`);
});
*/