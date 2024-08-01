"use strict";
(self["webpackChunkzenlab"] = self["webpackChunkzenlab"] || []).push([["datePicker"],{

/***/ "./src/datePicker.js":
/*!***************************!*\
  !*** ./src/datePicker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCalendar: () => (/* binding */ renderCalendar)
/* harmony export */ });
const daysContainer = document.getElementById("daysContainer");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const monthYear = document.getElementById("monthYear");
        const dateInput = document.getElementById("dateInput");
        const calendar = document.getElementById("calendar");

        let currentDate = new Date();
        let selectedDate = null;

        function handleDayClick(day) {
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            dateInput.value = selectedDate.toLocaleDateString("en-US");
            calendar.style.display = "none";
            renderCalendar();
        }

        function createDayElement(day) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");

            if (date.toDateString() === new Date().toDateString()) {
                dayElement.classList.add("current");
            }
            if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                dayElement.classList.add("selected");
            }

            dayElement.textContent = day;
            dayElement.addEventListener("click", () => handleDayClick(day));
            daysContainer.appendChild(dayElement);
        }

        function createDayNameElement(dayName) {
            const dayNameElement = document.createElement("div");
            dayNameElement.classList.add("day-name");
            dayNameElement.textContent = dayName;
            daysContainer.appendChild(dayNameElement);
        }

        function renderCalendar() {
            daysContainer.innerHTML = "";

            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            dayNames.forEach(dayName => createDayNameElement(dayName));

            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

            monthYear.textContent = `${currentDate.toLocaleString("default", {
                month: "long"
            })} ${currentDate.getFullYear()}`;

            for (let day = 1; day <= lastDay.getDate(); day++) {
                createDayElement(day);
            }
        }

        prevBtn.addEventListener("click", (event) => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            event.preventDefault();
            renderCalendar();
        });

        nextBtn.addEventListener("click", (event) => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            event.preventDefault();
            renderCalendar();
        });

        dateInput.addEventListener("click", () => {
            calendar.style.display = "block";
            positionCalendar();
        });

        document.addEventListener("click", (event) => {
            if (!dateInput.contains(event.target) && !calendar.contains(event.target)) {
                calendar.style.display = "none";
            }
        });

        function positionCalendar() {
            const inputRect = dateInput.getBoundingClientRect();
            //calendar.style.top = inputRect.bottom + "px";
            calendar.style.top = '100%'
            //calendar.style.left = inputRect.left + "px";
        }

        window.addEventListener("resize", positionCalendar);

        renderCalendar();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/datePicker.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVBpY2tlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsYUFBYSxHQUFHLEVBQUUsMEJBQTBCOztBQUU1Qyw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmxhYi8uL3NyYy9kYXRlUGlja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheXNDb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZCdG5cIik7XG4gICAgICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRCdG5cIik7XG4gICAgICAgIGNvbnN0IG1vbnRoWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhZZWFyXCIpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcbiAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyXCIpO1xuXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBudWxsO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURheUNsaWNrKGRheSkge1xuICAgICAgICAgICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZGF5KTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHNlbGVjdGVkRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVEYXlFbGVtZW50KGRheSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGRheSk7XG4gICAgICAgICAgICBjb25zdCBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUudG9EYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSAmJiBkYXRlLnRvRGF0ZVN0cmluZygpID09PSBzZWxlY3RlZERhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGRheTtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZURheUNsaWNrKGRheSkpO1xuICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURheU5hbWVFbGVtZW50KGRheU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRheU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXktbmFtZVwiKTtcbiAgICAgICAgICAgIGRheU5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZGF5TmFtZTtcbiAgICAgICAgICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TmFtZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbGVuZGFyKCkge1xuICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lcyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcbiAgICAgICAgICAgIGRheU5hbWVzLmZvckVhY2goZGF5TmFtZSA9PiBjcmVhdGVEYXlOYW1lRWxlbWVudChkYXlOYW1lKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgMSk7XG4gICAgICAgICAgICBjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuXG4gICAgICAgICAgICBtb250aFllYXIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF0ZS50b0xvY2FsZVN0cmluZyhcImRlZmF1bHRcIiwge1xuICAgICAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIlxuICAgICAgICAgICAgfSl9ICR7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX1gO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAxOyBkYXkgPD0gbGFzdERheS5nZXREYXRlKCk7IGRheSsrKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlRGF5RWxlbWVudChkYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjYWxlbmRhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGVJbnB1dC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFjYWxlbmRhci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvbkNhbGVuZGFyKCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRSZWN0ID0gZGF0ZUlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgLy9jYWxlbmRhci5zdHlsZS50b3AgPSBpbnB1dFJlY3QuYm90dG9tICsgXCJweFwiO1xuICAgICAgICAgICAgY2FsZW5kYXIuc3R5bGUudG9wID0gJzEwMCUnXG4gICAgICAgICAgICAvL2NhbGVuZGFyLnN0eWxlLmxlZnQgPSBpbnB1dFJlY3QubGVmdCArIFwicHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHBvc2l0aW9uQ2FsZW5kYXIpO1xuXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9