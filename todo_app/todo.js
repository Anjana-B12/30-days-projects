const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const addBtn = document.querySelector("button");

// Add task on button click
addBtn.addEventListener("click", addTask);

// ✅ Enter key works now
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("Please Enter a Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Check / delete
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

// Save data
function saveData() {
    localStorage.setItem("todo-Data", listContainer.innerHTML);
}

// Load data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("todo-Data") || "";
}

showTask();