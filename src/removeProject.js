// Import taskArray if needed
import { taskArray } from './displayTask.js';
import { saveProjectsToLocalStorage, saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorageFunctions.js';
import { projectArray } from './createProject.js';

// Function to remove a project and its tasks from the task array

export function removeProject(projectId) {
    const removedTasks = taskArray.filter(task => task.projectId === projectId);
    removedTasks.forEach(task => {
        const index = taskArray.indexOf(task);
        if (index !== -1) {
            taskArray.splice(index, 1);
        }
        
    });
    
    console.log(`Removed tasks for project with ID: ${projectId}`);
    saveProjectsToLocalStorage(taskArray);
}


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
        taskContainer.innerHTML = '';
    }

    // Save the updated taskArray to local storage
    saveTasksToLocalStorage(taskArray);
});


/*
export function removeProject(projectId) {
    // Remove tasks associated with the project
    const updatedTaskArray = taskArray.filter(task => task.projectId !== projectId);
    taskArray.length = 0; // Clear the original array
    taskArray.push(...updatedTaskArray); // Add the filtered tasks back

    console.log(`Removed tasks for project with ID: ${projectId}`);
    saveProjectsToLocalStorage(projectArray);
}
*/