import { createTaskContainer } from './createProjectContainer.js';
import { removeProject } from './removeProject.js';
import { saveProjectsToLocalStorage, loadProjectsFromLocalStorage, saveTasksToLocalStorage, loadTasksFromLocalStorage} from './localStorageFunctions.js'; 
import { reorderTaskElements, sortTasksByPriority, sortTasksByDate, filterTasksByCompletion, filterDropdown } from './taskFilter.js';
import { forEach } from 'lodash';
import { taskArray } from './displayTask.js';

export let projectArray = []; // Initialize project array
document.addEventListener('DOMContentLoaded', () => {
    projectArray = loadProjectsFromLocalStorage(); // Load projects
   
    console.log('Projects loaded on page load:', projectArray);
    /*if (projects.length > 0) {
        projects.forEach(project => {
            projectArray.push(project);
        });
    }*/
    // If no projects are found, create a default project
    if (projectArray.length === 0) {
        const defaultProjectName = 'New Project 1';
        const defaultProject = createProject(defaultProjectName);
        const taskContainerId = `taskContainer-${projectArray.length}`;
        createSideBarDropDown(defaultProject.name, taskContainerId);
    } else {
        // Initialize sidebar with loaded projects
        projectArray.forEach((project, index) => {
            const taskContainerId = `taskContainer-${index + 1}`;
            createSideBarDropDown(project.name, taskContainerId);
        });
    }

    // Activate the first project if there are any projects loaded
    if (projectArray.length > 0) {
        document.querySelectorAll('.nav-link')[0].classList.add('active');
        document.getElementById(`taskContainer-1`).style.display = 'block';
    }
});

export function handleProjectArray() {
    console.log(projectArray); // Function to handle project array as needed
}

export function createProject(projectName) {
    const project = {
        id: `project-${projectArray.length + 1}`,
        name: projectName,
        //tasks: [] // Initialize tasks array for the project
    };
    projectArray.push(project);


    //Push saved tasks into their respective projects
   //let test = 'test';
  // project.tasks.push(test);
  
   //project.tasks.push(taskArray);
 // saveTasksToLocalStorage(taskArray);
 
    saveProjectsToLocalStorage(projectArray);
    return project;
}

export let projectCounter = 0;
const projectFilters = {}; // Object to store last selected filter for each project

document.getElementById("create-project").addEventListener("click", () => {
    let projectName = `New Project ${projectArray.length + 1}`;
    const project = createProject(projectName);
    const taskContainerId = `taskContainer-${projectArray.length}`;
    createSideBarDropDown(project.name, taskContainerId);
});



export function createSideBarDropDown(projectName, taskContainerId) {
    projectCounter++;
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
    const projectId = taskContainerId.replace('taskContainer-', 'project-');

    // Update the project title in projectArray
    const project = projectArray.find(proj => proj.id === projectId);
    if (project) {
        project.name = newTitle;
    }

    // Save the updated projectArray to local storage
    saveProjectsToLocalStorage(projectArray);
});

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();

        listItem.remove();

        const taskContainer = document.getElementById(taskContainerId);
        if (taskContainer) {
            taskContainer.remove();
        }

        // Remove project from projectArray
        const projectId = taskContainerId.replace('taskContainer-', 'project-'); // Convert taskContainerId to projectId format
        const removedProject = projectArray.find(project => project.id === projectId);

    if (removedProject) {
        const index = projectArray.indexOf(removedProject);
        projectArray.splice(index, 1);
        console.log('Project removed from projectArray');
    }


        removeProject(taskContainerId);
        projectCounter--;
       
        const nextListItem = listItem.nextElementSibling || listItem.previousElementSibling;
        if (nextListItem) {
            const nextProjectElement = nextListItem.querySelector('.nav-link');
            if (nextProjectElement) {
                nextProjectElement.classList.add('active');

                const nextTaskContainerId = nextProjectElement.getAttribute('href').substring(1);
                const nextTaskContainer = document.getElementById(nextTaskContainerId);
                if (nextTaskContainer) {
                    nextTaskContainer.style.display = 'block';
                }
            }
        }

        saveProjectsToLocalStorage(projectArray); // Save updated projectArray
    });

    // Create task container and activate project
    createTaskContainer(taskContainerId, projectName);
    activateProject();
    saveProjectsToLocalStorage(projectArray); // Save updated projectArray
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
        default:
            // Default case or handle any other filters
            reorderTaskElements(projectArray.find(project => project.id === activeProjectId).tasks);
    }
});
