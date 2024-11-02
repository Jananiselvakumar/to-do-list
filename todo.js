// Get references to the input field and task list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a checkbox to mark the task as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        li.classList.toggle("completed", checkbox.checked);
    };

    // Create a delete button
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Append the checkbox and delete button to the list item
    li.prepend(checkbox);
    li.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}