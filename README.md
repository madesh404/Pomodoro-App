# ⏳ Pomodoro Timer — Notion-Style Productivity App
![Pomodoro](https://img.shields.io/badge/Pomodoro%20Timer-🍅-red?style=for-the-badge)



![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)




A clean, modern **Notion-inspired Pomodoro timer** built with HTML, CSS, and JavaScript.
Features an **animated radial progress ring**, session tracking, break modes, reset controls, and a **timeline slider** for instantly adjusting or previewing the timer.

Perfect for studying, deep work, or building a custom productivity flow.

---

## ⭐ Features

### ✔ **Notion-Style Layout**

* Minimalistic UI
* Soft neutral colors
* Sidebar navigation for Focus / Short Break / Long Break

### ✔ **Animated Timer Ring**

* Dynamic radial scaling animation based on progress
* Smooth transitions
* Blue pulse aura when running

### ✔ **Pomodoro Functionality**

* **Focus session (25 min)**
* **Short break (5 min)**
* **Long break (15 min)**
* Start + Reset controls
* Audio bell notification at the end of each session

### ✔ **Session Counter**

* Tracks number of completed focus sessions
* Automatically hides during break modes

### ✔ **Timeline Slider (Developer Mode)**

* Allows **manually adjusting progress** to speed-test UI
* Helps debug the animation without waiting the full timer
* Updates the radial ring and time display in real time

---

## 📁 Project Structure

```
Pomodoro App/
│── index.html
│── style.css
│── app.js
│── sounds/
│     └── airport-bell.wav
```

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/madesh404/Pomodoro-App.git
```

### 2. Open the project

Double-click **index.html** to open it in your browser
—or—
Use a development server (recommended):

```sh
npx live-server
```

---

## 🧠 How It Works

### **Timer Logic**

* The app tracks total seconds based on the selected mode
* The display updates every second
* A CSS variable `--progress` drives the animation ring
* When time hits zero:
  * Audio bell plays
  * Session counter increments (focus mode only)

### **Modes**

| Mode          | Duration | Notes                       |
| ------------- | -------- | --------------------------- |
| Focus Session | 25:00    | Counts toward session total |
| Short Break   | 5:00     | Resets counter display      |
| Long Break    | 15:00    | Resets counter display      |

### **Progress Ring**

* Uses the CSS `transform: scale()` effect
* Grows / shrinks according to `--progress`
* Smooth transitions via cubic-bezier animation

### **Slider**

* Maps slider position → `--progress`
* Updates displayed time instantly
* Pure UI debug tool, optional to remove later

---

## 🔊 Audio

The sound file

```
sounds/airport-bell.wav
```

plays at the end of each completed session.

---

## 🛠 Technologies Used

* **HTML5** — structure
* **CSS3** — custom animations, Notion-style UI
* **JavaScript (ES6)** — timer logic + interactivity
* **Google Fonts (Inter)** — clean typography

---

## 📸 Screenshots (optional)

Add screenshots later to showcase:

* Focus mode
* Break modes
* Animated timer ring
* Slider functionality

---

## 📌 Future Improvements (Ideas)

* Settings page (custom durations)
* Dark mode toggle
* Todo list / tasks integration
* Save session history locally
* Sound selection + volume controls
* Mobile responsive layout

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).