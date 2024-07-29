import { createTaskContainer } from './createProjectContainer.js';
import { removeProject, removeTaskData } from './removeProject.js';
import { saveProjectsToLocalStorage, loadProjectsFromLocalStorage, saveTasksToLocalStorage, loadTasksFromLocalStorage } from './localStorageFunctions.js';
import { reorderTaskElements, sortTasksByPriority, sortTasksByDate, filterTasksByCompletion, filterDropdown } from './taskFilter.js';
import { forEach } from 'lodash';
import { taskArray } from './displayTask.js';

export let projectArray = []; // Initialize project array
export let projectCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    projectArray = loadProjectsFromLocalStorage();
    projectCounter = projectArray.length > 0 ? Math.max(...projectArray.map(p => parseInt(p.id))) : 0;

    console.log('Projects loaded on page load:', projectArray);

    if (projectArray.length === 0) {
        const defaultProjectName = 'New Project 1';
        const defaultProject = createProject(defaultProjectName);
        const taskContainerId = `taskContainer-${projectCounter}`;
        createSideBarDropDown(defaultProject.name, taskContainerId);
    } else {
        projectArray.forEach((project) => {
            const taskContainerId = `taskContainer-${project.id}`;
            createSideBarDropDown(project.name, taskContainerId);
        });
    }
    activateLastActiveProject();
});


const activateLastActiveProject = () => {
    const lastActiveProjectId = localStorage.getItem('activeProject');

    // Check if the last active project is still in the DOM
    const lastActiveProjectElement = document.querySelector(`.nav-link[href="#${lastActiveProjectId}"]`);

    if (lastActiveProjectElement && lastActiveProjectElement.closest('.sidebar-nav-item')) {
        lastActiveProjectElement.click();
    } else if (projectArray.length > 0) {
        const firstProjectElement = document.querySelectorAll('.nav-link')[0];
        if (firstProjectElement) {
            firstProjectElement.classList.add('active');
            const firstTaskContainerId = firstProjectElement.getAttribute('href').substring(1);
            const firstTaskContainer = document.getElementById(firstTaskContainerId);
            if (firstTaskContainer) {
                firstTaskContainer.style.display = 'block';
            }
            // Save the active project to localStorage
            localStorage.setItem('activeProject', firstTaskContainerId);
            window.history.pushState(null, null, `#${firstTaskContainerId}`);
        }
    }
};

export function handleProjectArray() {
    console.log(projectArray); // Function to handle project array as needed
}

export function createProject(projectName) {
    const project = {
        id: projectCounter + 1,
        name: projectName,
    };
    projectCounter++;
    projectArray.push(project);
    saveProjectsToLocalStorage(projectArray);
    return project;
}

const projectFilters = {}; // Object to store last selected filter for each project

document.getElementById("create-project").addEventListener("click", () => {
    let projectName = `New Project ${projectCounter + 1}`;
    const project = createProject(projectName);
    const taskContainerId = `taskContainer-${projectCounter}`;
    createSideBarDropDown(project.name, taskContainerId);
});

export function createSideBarDropDown(projectName, taskContainerId) {
    console.log('Project Counter:', projectCounter);

    const listItem = document.createElement('li');
    listItem.classList.add('sidebar-nav-item');

    const projectElement = document.createElement('a');
    projectElement.classList.add('nav-link');

    projectElement.href = `#${taskContainerId}`;
    projectElement.textContent = projectName;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = `x`;

    listItem.appendChild(projectElement);
    listItem.appendChild(deleteButton);

    const sidebar = document.querySelector('#sidebar-wrapper .projects');
    if (sidebar) {
        sidebar.appendChild(listItem);
    } else {
        console.error('Sidebar element not found');
    }

    const activateProject = () => {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        projectElement.classList.add('active');

        document.querySelectorAll('.task-container').forEach(container => {
            container.style.display = 'none';
        });
     
        const taskContainer = document.getElementById(taskContainerId);
        if (taskContainer) {
            taskContainer.style.display = 'block';
        }
   
        // Save the active project to localStorage
        localStorage.setItem('activeProject', taskContainerId);
        console.log('Saving active project ID:', taskContainerId);
        
        // Update filter dropdown to reflect last selected filter for this project
        const lastSelectedFilter = projectFilters[taskContainerId] || 'select'; // Default to 'select' if no filter is set
        filterDropdown.value = lastSelectedFilter;
    };

    let lastClickTime = 0;

    projectElement.addEventListener('click', (event) => {
        const currentTime = new Date().getTime();

        if (currentTime - lastClickTime < 500) {
            event.preventDefault();
            projectElement.contentEditable = true;
            projectElement.focus();
        } else {
            lastClickTime = currentTime;
            activateProject();
        }
    });

    projectElement.addEventListener('blur', () => {
        projectElement.contentEditable = false;
    
        // Get the new title
        const newTitle = projectElement.textContent.trim();
        const projectId = parseInt(taskContainerId.replace('taskContainer-', ''));
    
        // Update the project title in projectArray
        const project = projectArray.find(proj => proj.id === projectId);
        if (project) {
            project.name = newTitle;
            console.log(`Project ID ${projectId} renamed to: ${newTitle}`);
    
            // Save the updated projectArray to local storage
            saveProjectsToLocalStorage(projectArray);
            saveTasksToLocalStorage(taskArray);
        }
    });
    

   
    deleteButton.addEventListener('click', (event) => {
       deleteProjectAndTasks(listItem, taskContainerId);
       const projectId = parseInt(taskContainerId.replace('taskContainer-', ''));
       removeProject(projectId);
        // Remove the values/array from the respective taskContainer 
       removeTaskData(taskContainerId);
    });
   
    
    createTaskContainer(taskContainerId, projectName);
    activateProject();
    saveProjectsToLocalStorage(projectArray); // Save updated projectArray
    
}

export function deleteProjectAndTasks(listItem, taskContainerId) {
    event.preventDefault();
    listItem.style.display = 'none';
    const taskContainer = document.getElementById(taskContainerId);
    if (taskContainer) {
        taskContainer.style.display = 'none';
        taskContainer.innerHTML = '';
    }

    const projectId = parseInt(taskContainerId.replace('taskContainer-', ''));
    const removedProjectIndex = projectArray.findIndex(project => project.id === projectId);
    if (removedProjectIndex !== -1) {
        projectArray.splice(removedProjectIndex, 1);
        console.log(`Project ${projectId} removed from projectArray`);
    }
    
    saveProjectsToLocalStorage(projectArray); // Update localStorage after deletion
    
    // Handle UI and activate another project if needed
    const nextListItem = listItem.nextElementSibling || listItem.previousElementSibling;
    if (nextListItem) {
        const nextProjectElement = nextListItem.querySelector('.nav-link');
        if (nextProjectElement) {
            nextProjectElement.classList.add('active');

            const nextTaskContainerId = nextProjectElement.getAttribute('href').substring(1);
            const nextTaskContainer = document.getElementById(nextTaskContainerId);
            if (nextTaskContainer) {
                document.querySelectorAll('.task-container').forEach(container => {
                    container.style.display = 'none';
                });
                nextTaskContainer.style.display = 'block';

                localStorage.setItem('activeProject', nextTaskContainerId);
                console.log('Activated next project ID:', nextTaskContainerId);
            }
        }
    } else {
        localStorage.removeItem('activeProject');
        window.history.pushState(null, null, '#');
    }
   
    projectCounter--; // Decrease projectCounter if necessary
}

// Function to handle filter change
filterDropdown.addEventListener('change', () => {
    const selectedOption = filterDropdown.value;
    const activeProjectId = document.querySelector('.nav-link.active').getAttribute('href').substring(1);

    // Store the selected filter for the active project
    projectFilters[activeProjectId] = selectedOption;

    switch (selectedOption) {
        case 'highLow':
            sortTasksByPriority(true, activeProjectId); // Sort tasks from highest to lowest priority
            break;
        case 'lowHigh':
            sortTasksByPriority(false, activeProjectId); // Sort tasks from lowest to highest priority
            break;
        case 'newOld':
            sortTasksByDate(false, activeProjectId); // Sort tasks from newest to oldest
            break;
        case 'oldNew':
            sortTasksByDate(true, activeProjectId); // Sort tasks from oldest to newest
            break;
        case 'complete':
            filterTasksByCompletion(true, activeProjectId); // Filter tasks by completion
            break;
        case 'incomplete':
            filterTasksByCompletion(false, activeProjectId); // Filter tasks by incompletion
            break;
        /*default:
            // Default case or handle any other filters
            reorderTaskElements(projectArray.find(project => project.id === activeProjectId).tasks);*/
    }
});
