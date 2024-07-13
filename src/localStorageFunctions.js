// localStorageFunctions.js

// Handle Projects
export function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('zenLabProjects', JSON.stringify(projects));
    console.log('Projects saved to localStorage:', projects);
}

export function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('zenLabProjects');
    if (storedProjects) {
        try {
            const parsedProjects = JSON.parse(storedProjects);
            console.log('Projects loaded from localStorage:', parsedProjects);
            return parsedProjects;
        } catch (error) {
            console.error('Error parsing projects from localStorage:', error);
        }
    } else {
        console.log('No projects found in localStorage.');
    }
    return [];
}

// Handle Tasks
export function saveTasksToLocalStorage(taskArray) {
    const tasksByProject = {};

    taskArray.forEach(task => {
        const projectId = task.projectId;
        if (!tasksByProject[projectId]) {
            tasksByProject[projectId] = [];
        }
        tasksByProject[projectId].push(task);
    });

    for (const projectId in tasksByProject) {
        const tasksToSave = tasksByProject[projectId];
        localStorage.setItem(`zenLabTasks-${projectId}`, JSON.stringify(tasksToSave));
        console.log(`Tasks for project ${projectId} saved to localStorage:`, tasksToSave);
    }

    localStorage.setItem('zenLabAllTasks', JSON.stringify(taskArray));
}

export function loadTasksFromLocalStorage() {
    const taskArray = [];
    const storedTasks = localStorage.getItem('zenLabAllTasks');
    if (storedTasks) {
        try {
            const parsedTasks = JSON.parse(storedTasks);
            console.log('Tasks loaded from localStorage:', parsedTasks);
            return parsedTasks;
        } catch (error) {
            console.error('Error parsing tasks from localStorage:', error);
        }
    } else {
        console.log('No tasks found in localStorage.');
    }
    return taskArray;
}
