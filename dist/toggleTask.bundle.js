(self["webpackChunkzenlab"] = self["webpackChunkzenlab"] || []).push([["toggleTask"],{

/***/ "./src/toggleTask.js":
/*!***************************!*\
  !*** ./src/toggleTask.js ***!
  \***************************/
/***/ (() => {

document.getElementById('toggle-task-input').addEventListener('click', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskForm');
    var btnSubmit = document.querySelector('.btn, .submit');
    var backgroundWrapper = document.getElementById('wrapper');
    var body = document.getElementsByTagName('body')[0];
    var closeTaskInput = document.getElementById('closeTaskInput');

   /* if (taskInput.style.display === 'none' || taskInput.style.display === '') {
        taskInput.style.display = 'block';
        backgroundWrapper.style.opacity = '.5';
        body.style.background = "#eeeeee";
    }  
    else {
        taskInput.style.display = 'none';
       
    }*/

    if (taskInput.style.opacity === '0' || taskInput.style.opacity === '') {
        taskInput.style.opacity = '1';
        backgroundWrapper.style.opacity = '.5';
        body.style.background = "#eeeeee";
        
    }  
    else {
        taskInput.style.opacity = '0';
    }

    btnSubmit.addEventListener('click', function(event){
        const prioritySelection = document.getElementById('priority');
        if (prioritySelection.value === "") {
            taskInput.style.opacity = '1';
        }
        else {
        taskInput.style.opacity = '0';
        backgroundWrapper.style.opacity = '1';
        body.style.removeProperty("background");
        }
    });
    closeTaskInput.addEventListener('click', function(event){
        taskInput.style.opacity = '0';
        backgroundWrapper.style.opacity = '1';
        body.style.removeProperty("background");
    });
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/toggleTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmxhYi8uL3NyYy90b2dnbGVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtdGFzay1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Zvcm0nKTtcbiAgICB2YXIgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0biwgLnN1Ym1pdCcpO1xuICAgIHZhciBiYWNrZ3JvdW5kV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIHZhciBjbG9zZVRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVRhc2tJbnB1dCcpO1xuXG4gICAvKiBpZiAodGFza0lucHV0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCB0YXNrSW5wdXQuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcbiAgICAgICAgdGFza0lucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBiYWNrZ3JvdW5kV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJy41JztcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZWVlZWVlXCI7XG4gICAgfSAgXG4gICAgZWxzZSB7XG4gICAgICAgIHRhc2tJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgIFxuICAgIH0qL1xuXG4gICAgaWYgKHRhc2tJbnB1dC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgfHwgdGFza0lucHV0LnN0eWxlLm9wYWNpdHkgPT09ICcnKSB7XG4gICAgICAgIHRhc2tJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBiYWNrZ3JvdW5kV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJy41JztcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZWVlZWVlXCI7XG4gICAgICAgIFxuICAgIH0gIFxuICAgIGVsc2Uge1xuICAgICAgICB0YXNrSW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9XG5cbiAgICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGlmIChwcmlvcml0eVNlbGVjdGlvbi52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdGFza0lucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIHRhc2tJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBiYWNrZ3JvdW5kV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNsb3NlVGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB0YXNrSW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgYmFja2dyb3VuZFdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tncm91bmRcIik7XG4gICAgfSk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9