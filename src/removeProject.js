// Import taskArray if needed
import { taskArray } from './displayTask.js';


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
}


let deleteAllTasks = document.getElementById('deleteAllTasks');

deleteAllTasks.addEventListener('click', function(projectId){
   //event.preventDefault();
    console.log('remove test');
    removeProject();
});
