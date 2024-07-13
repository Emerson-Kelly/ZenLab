// Import taskArray if needed
import { taskArray } from './displayTask.js';
import { saveProjectsToLocalStorage } from './localStorageFunctions.js';
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