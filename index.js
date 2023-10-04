const clockContainer = document.querySelector(".clock");

function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString();
}