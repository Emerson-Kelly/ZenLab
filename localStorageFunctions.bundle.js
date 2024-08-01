"use strict";
(self["webpackChunkzenlab"] = self["webpackChunkzenlab"] || []).push([["localStorageFunctions"],{

/***/ "./src/localStorageFunctions.js":
/*!**************************************!*\
  !*** ./src/localStorageFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),
/* harmony export */   loadTasksFromLocalStorage: () => (/* binding */ loadTasksFromLocalStorage),
/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage),
/* harmony export */   saveTasksToLocalStorage: () => (/* binding */ saveTasksToLocalStorage)
/* harmony export */ });
// localStorageFunctions.js

// Handle Projects
function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('zenLabProjects', JSON.stringify(projects));
    console.log('Projects saved to localStorage:', projects);
}

function loadProjectsFromLocalStorage() {
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
function saveTasksToLocalStorage(taskArray) {
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

function loadTasksFromLocalStorage() {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/localStorageFunctions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RCx5Q0FBeUMsV0FBVztBQUNwRDs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmxhYi8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzXG5cbi8vIEhhbmRsZSBQcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3plbkxhYlByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICBjb25zb2xlLmxvZygnUHJvamVjdHMgc2F2ZWQgdG8gbG9jYWxTdG9yYWdlOicsIHByb2plY3RzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnemVuTGFiUHJvamVjdHMnKTtcbiAgICBpZiAoc3RvcmVkUHJvamVjdHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdHMgbG9hZGVkIGZyb20gbG9jYWxTdG9yYWdlOicsIHBhcnNlZFByb2plY3RzKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRQcm9qZWN0cztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2U6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHByb2plY3RzIGZvdW5kIGluIGxvY2FsU3RvcmFnZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuXG4vLyBIYW5kbGUgVGFza3NcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrQXJyYXkpIHtcbiAgICBjb25zdCB0YXNrc0J5UHJvamVjdCA9IHt9O1xuXG4gICAgdGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgICAgICBpZiAoIXRhc2tzQnlQcm9qZWN0W3Byb2plY3RJZF0pIHtcbiAgICAgICAgICAgIHRhc2tzQnlQcm9qZWN0W3Byb2plY3RJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0J5UHJvamVjdFtwcm9qZWN0SWRdLnB1c2godGFzayk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3RJZCBpbiB0YXNrc0J5UHJvamVjdCkge1xuICAgICAgICBjb25zdCB0YXNrc1RvU2F2ZSA9IHRhc2tzQnlQcm9qZWN0W3Byb2plY3RJZF07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB6ZW5MYWJUYXNrcy0ke3Byb2plY3RJZH1gLCBKU09OLnN0cmluZ2lmeSh0YXNrc1RvU2F2ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFza3MgZm9yIHByb2plY3QgJHtwcm9qZWN0SWR9IHNhdmVkIHRvIGxvY2FsU3RvcmFnZTpgLCB0YXNrc1RvU2F2ZSk7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3plbkxhYkFsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza3NGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IFtdO1xuICAgIGNvbnN0IHN0b3JlZFRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3plbkxhYkFsbFRhc2tzJyk7XG4gICAgaWYgKHN0b3JlZFRhc2tzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRUYXNrcyA9IEpTT04ucGFyc2Uoc3RvcmVkVGFza3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2tzIGxvYWRlZCBmcm9tIGxvY2FsU3RvcmFnZTonLCBwYXJzZWRUYXNrcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVGFza3M7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHRhc2tzIGZyb20gbG9jYWxTdG9yYWdlOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0YXNrcyBmb3VuZCBpbiBsb2NhbFN0b3JhZ2UuJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrQXJyYXk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=