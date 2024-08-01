"use strict";
(self["webpackChunkzenlab"] = self["webpackChunkzenlab"] || []).push([["toggleMenu"],{

/***/ "./src/toggleMenu.js":
/*!***************************!*\
  !*** ./src/toggleMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleMenu: () => (/* binding */ toggleMenu)
/* harmony export */ });
function toggleMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var wrapper = document.getElementById('wrapper');
    var projects = document.querySelector('.projects');
    var createProject = document.getElementById('create-project');

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('toggled');

        var isToggled = wrapper.classList.contains('toggled');
        projects.style.display = isToggled ? 'none' : 'block';
        if (createProject) {
            createProject.style.display = isToggled ? 'none' : 'block';
        }
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/toggleMenu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlTWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5sYWIvLi9zcmMvdG9nZ2xlTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICB2YXIgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcbiAgICB2YXIgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICB2YXIgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKTtcblxuICAgICAgICB2YXIgaXNUb2dnbGVkID0gd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKTtcbiAgICAgICAgcHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IGlzVG9nZ2xlZCA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgIGlmIChjcmVhdGVQcm9qZWN0KSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBpc1RvZ2dsZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=