#  Todo Application

A Todo App built with plain HTML, CSS and JavaScript. I used core **DOM methods** to build and manage the UI dynamically. User interactions are handled through **event listeners**. Data is persisted using **localStorage with JSON methods** so tasks survive even after page reload.

---
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/7070c115-eb82-4567-8529-63ea28212f42" />


## 📸 Preview

<img width="1599" height="860" alt="Todo App Preview" src="https://github.com/user-attachments/assets/0cc6cbcf-8279-4385-be1e-a1b737fe7058" />

> 📸 Todo Application — Add, Delete, Save and Persist tasks using localStorage

---

##  Features

- **Adding tasks is instant** — type anything and hit Add, it appears on the list right away without any page refresh.
- **Deleting is one click** — every task has a trash icon that removes it from the list immediately.
- **Check it off when done** — clicking the checkbox strikes through the task so you know what's completed and what's pending.
- **Save button keeps your work** — your tasks don't just live in the browser memory, they get saved to localStorage so nothing is lost.
- **Reload without worry** — even after closing or refreshing the browser, all your tasks and their checked status come back exactly as you left them.
- **No empty tasks allowed** — if you try to add a blank task, the app warns you instantly with a validation alert.
- **Works on any screen** — built with Bootstrap so it looks clean and usable on both desktop and mobile screens.

---

## 🛠️ Tech Stack

- **HTML** — Structure of the app.
- **CSS** — Styling and visual design.
- **JavaScript** — Logic, DOM manipulation and interactivity.
- **Bootstrap 4** — Responsive layout and mobile friendly design.
- **localStorage** — Stores tasks in browser so they persist on reload.
- **JSON Methods** — Converts data between object and string format for storage.

---

##  Project Structure

```
todo-application/
 ├── index.html   → Structure
 ├── style.css    → Styling
 ├── script.js    → Logic
 └── README.md    → Documentation
```

---

##  Development Journey — Step by Step

This project was built progressively, solving real problems at each stage.

---

### Phase 1 — Static to Dynamic

**Step 1** — First wrote a checkbox directly in HTML just to see and understand how the structure looks on screen.

**Step 2** — Then recreated that same structure using JavaScript — built the todo item, the label container and the delete icon all through code dynamically.

**Step 3** — Made the entire thing fully dynamic so nothing is hardcoded in HTML anymore. Each todo became an object holding its own text, unique number and checked status.

---

### Phase 2 — Reusability

**Step 4** — Instead of repeating the same code for every single todo item, wrapped everything into one reusable function. Call the function, pass the todo, it builds everything automatically.

**Step 5** — Made the necessary changes so the function accepts the todo object as input and works for any todo item.

---

### Phase 3 — Rendering & Unique IDs

**Step 6** — Used a loop to go through all the initial todos and render them on screen automatically when the page loads.

**Step 7** — Hit a bug where every checkbox and label had the same ID causing wrong behavior. Fixed it by using the unique number of each todo to generate unique IDs for every element.

---

### Phase 4 — Interactions

**Step 8** — Added a strikethrough style that visually marks a task as completed.

**Step 9** — Wired the checkbox so clicking it toggles the strikethrough on and off. Uncheck it and the strikethrough disappears.

**Step 10** — Connected the delete icon so clicking it instantly removes that specific todo from the screen.

---

### Phase 5 — Adding New Todos

**Step 11** — Connected the Add button to read the user input, create a new todo from it, show it on screen and clear the input box after adding.

**Step 12** — Added a popup warning that fires if the user tries to add a task without typing anything.

**Step 13** — Added a hint text inside the input box so the user knows what to type.

---

### Phase 6 — Persistence Problem

**Step 14** — Realized that every page reload wipes all the tasks clean because the browser destroys everything and starts fresh.

**Step 15** — Set the goal to make tasks survive even after the page reloads.

**Step 16** — Decided to use a storage mechanism that lives outside the page and doesn't get destroyed on reload.

**Step 17** — Used the browser's local storage to save tasks as a string and read them back as an object when needed.

---

### Phase 7 — Save Button

**Step 18** — Added a Save button in the HTML so the user can manually save their tasks.

**Step 19** — Connected the Save button to store the entire task list into local storage in string format.

**Step 20** — On every page load, the app reads the saved tasks from local storage and displays them automatically on screen.

---

### Phase 8 — Bug Fixes

**Step 21** — Found that newly added tasks were appearing on screen but disappearing after reload. The fix was to add new tasks to the existing list before saving so they get included in storage.

**Step 22** — Found that deleted tasks were coming back after reload because they were only removed visually but not from storage. Fixed it by finding the exact task in the list and removing it from storage permanently.

---

### Phase 9 — Checked Status Persistence

**Step 23** — Noticed that checked tasks were losing their strikethrough after every reload. Fixed it by saving the checked status of each task along with its data. When tasks load back, the app reads that status and automatically applies the strikethrough if the task was checked before.

---

##  Author

**Upputuri Tarun Kumar**
- Email: tarunupputuri7@gmail.com
- LinkedIn: www.linkedin.com/in/tarunkumarupputuri
- GitHub: [github.com/TarunUpputuri1](https://github.com/TarunUpputuri1)

---

##  College

St. Ann's College of Engineering and Technology, Chirala ,
 JNTUK University

---

##  License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, please give it a star!**
