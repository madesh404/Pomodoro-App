const bells = new Audio("./sounds/airport-bell.wav");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

const navButtons = document.querySelectorAll(".nav-btn");
const sessionCountDiv = document.querySelector(".count");

const slider = document.querySelector(".timeline-slider");

let myInterval;
let state = false;
let sessionAmount = 25; // default focus
let totalSeconds = sessionAmount * 60;
let completedSessions = 0;

function updateMode(mode) {
    const titleEl = document.querySelector(".title");
    const sessionCounter = document.querySelector(".session-count");

    if (mode === "focus") {
        document.title = "Pomodoro App";
        titleEl.textContent = "Focus Session";
        sessionCounter.style.display = "block";   // show counter
    }

    if (mode === "short") {
        document.title = "Pomodoro App";
        titleEl.textContent = "Short Break";
        sessionCounter.style.display = "none";    // hide counter
    }

    if (mode === "long") {
        document.title = "Pomodoro App";
        titleEl.textContent = "Long Break";
        sessionCounter.style.display = "none";    // hide counter
    }
}


// Update the DOM display
function updateDisplay() {
    minuteDiv.textContent = Math.floor(totalSeconds / 60);
    let s = totalSeconds % 60;
    secondDiv.textContent = s < 10 ? "0" + s : s;

    const progress = (1 - totalSeconds / (sessionAmount * 60)) * 100;

    document.documentElement.style.setProperty("--progress", progress);

    slider.value = progress;
}

// Timer logic
function appTimer() {
    if (state) return; // prevent double start
    state = true;

    myInterval = setInterval(() => {
        totalSeconds--;

        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(myInterval);
            bells.play();
            state = false;

            // Only count completed focus session
            if (sessionAmount === 25) {
                completedSessions++;
                sessionCountDiv.textContent = completedSessions;
            }
        }
    }, 1000);
}

// Reset logic
function resetTimer() {
    clearInterval(myInterval);
    state = false;
    totalSeconds = sessionAmount * 60;
    updateDisplay();
}

// Break + Session switching
navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        clearInterval(myInterval);
        state = false;

        if (btn.textContent.includes("Focus")) {
            sessionAmount = 25;
            updateMode("focus");
        } else if (btn.textContent.includes("Short")) {
            sessionAmount = 5;
            updateMode("short");
        } else if (btn.textContent.includes("Long")) {
            sessionAmount = 15;
            updateMode("long");
        }

        totalSeconds = sessionAmount * 60;
        updateDisplay();
    });
});

function updateFromSlider(value) {
    const total = sessionAmount * 60;    // session duration
    const secondsUsed = Math.floor((value / 100) * total);

    totalSeconds = total - secondsUsed;

    updateDisplay();
}

// Event listeners
startBtn.addEventListener("click", appTimer);
resetBtn.addEventListener("click", resetTimer);

slider.addEventListener("input", (e) => {
    clearInterval(myInterval);   // stop timer while scrubbing
    state = false;

    updateFromSlider(e.target.value);
});


// Initial display
updateDisplay();
